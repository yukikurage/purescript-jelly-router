module Jelly.Router where

import Prelude

import Control.Monad.Reader (ReaderT, asks, runReaderT)
import Data.Tuple.Nested ((/\))
import Effect (Effect)
import Effect.Class (class MonadEffect, liftEffect)
import Foreign (unsafeToForeign)
import Jelly.Component (class Component)
import Jelly.Element (a)
import Jelly.Hydrate (HydrateM, mount)
import Jelly.Prop (Prop, on, (:=))
import Jelly.Render (RenderM, render)
import Signal (Signal, newState, writeChannel)
import Signal.Hooks (class MonadHooks, Hooks, newStateEq, useEvent)
import Web.DOM (Node)
import Web.Event.Event (preventDefault)
import Web.HTML (window)
import Web.HTML.Event.EventTypes (click)
import Web.HTML.Event.PopStateEvent.EventTypes (popstate)
import Web.HTML.History (DocumentTitle(..), URL(..), pushState, replaceState)
import Web.HTML.Location (hash, href, pathname, search)
import Web.HTML.Window (history, location)
import Web.HTML.Window as Window

class MonadEffect m <= Router m where
  -- | Push a new Route to the browser history.
  usePushRoute :: String -> m Unit
  -- | Replace the current Route in the browser history.
  useReplaceRoute :: String -> m Unit
  -- | Get the current Route.
  useCurrentRoute :: m (Signal String)

type RouterR =
  { pushState :: String -> Effect Unit
  , replaceState :: String -> Effect Unit
  , currentRoute :: Signal String
  }

newtype RouterT :: forall k. (k -> Type) -> k -> Type
newtype RouterT m a = RouterT (ReaderT RouterR m a)

derive newtype instance Monad m => Functor (RouterT m)
derive newtype instance Monad m => Apply (RouterT m)
derive newtype instance Monad m => Applicative (RouterT m)
derive newtype instance Monad m => Bind (RouterT m)
derive newtype instance Monad m => Monad (RouterT m)
derive newtype instance MonadEffect m => MonadEffect (RouterT m)
derive newtype instance MonadHooks m => MonadHooks (RouterT m)
derive newtype instance Component m => Component (RouterT m)
instance MonadEffect m => Router (RouterT m) where
  usePushRoute route = RouterT $ asks _.pushState >>= \push -> liftEffect $ push route
  useReplaceRoute route = RouterT $ asks _.replaceState >>= \replace -> liftEffect $ replace route
  useCurrentRoute = RouterT $ asks _.currentRoute

mountRouter :: RouterT HydrateM Unit -> Node -> Hooks Unit
mountRouter (RouterT m) node = do
  w <- liftEffect window
  initRoute <- liftEffect do
    l <- location w
    pn <- pathname l
    sr <- search l
    hs <- hash l
    pure $ pn <> sr <> hs

  currentRoute /\ crChn <- newStateEq initRoute
  let
    handleRoute handleFn route = do
      handleFn (unsafeToForeign {}) (DocumentTitle "")
        (URL $ route) =<< history w
      writeChannel crChn route

    routerR =
      { pushState: handleRoute pushState
      , replaceState: handleRoute replaceState
      , currentRoute
      }

  useEvent (Window.toEventTarget w) popstate \_ -> do
    route <- liftEffect $ href =<< location w
    writeChannel crChn route

  mount (runReaderT m routerR) node

renderRouter :: RouterT RenderM Unit -> String -> Effect String
renderRouter (RouterT m) route = do
  currentRoute /\ crChn <- newState route
  let
    routerR =
      { pushState: writeChannel crChn
      , replaceState: writeChannel crChn
      , currentRoute
      }
  render $ runReaderT m routerR

routerLink
  :: forall m
   . Component m
  => Router m
  => String
  -> Array (Prop m)
  -> m Unit
  -> m Unit
routerLink route props component = do
  let
    handleClick e = do
      liftEffect $ preventDefault e
      usePushRoute route

  a ([ on click handleClick, "href" := route ] <> props) component

routerLink' :: forall m. Component m => Router m => String -> m Unit -> m Unit
routerLink' route component = routerLink route [] component
