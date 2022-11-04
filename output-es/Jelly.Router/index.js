import * as $runtime from "../runtime.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Jelly$dComponent from "../Jelly.Component/index.js";
import * as Jelly$dHydrate from "../Jelly.Hydrate/index.js";
import * as Jelly$dProp from "../Jelly.Prop/index.js";
import * as Signal from "../Signal/index.js";
import * as Signal$dHooks from "../Signal.Hooks/index.js";
import * as Web$dEvent$dEvent from "../Web.Event.Event/index.js";
import * as Web$dHTML from "../Web.HTML/index.js";
import * as Web$dHTML$dHistory from "../Web.HTML.History/index.js";
import * as Web$dHTML$dLocation from "../Web.HTML.Location/index.js";
import * as Web$dHTML$dWindow from "../Web.HTML.Window/index.js";
const newState = /* #__PURE__ */ Signal.newState(Effect$dClass.monadEffectEffect);
const newStateEq = /* #__PURE__ */ Signal$dHooks.newStateEq(Signal$dHooks.monadHooksHooks)(Data$dEq.eqString);
const useEvent = /* #__PURE__ */ Signal$dHooks.useEvent(Signal$dHooks.monadHooksHooks);
const RouterT = x => x;
const monadRouterT = dictMonad => Control$dMonad$dReader$dTrans.monadReaderT(dictMonad);
const monadHooksRouterT = dictMonadHooks => Signal$dHooks.monadHooksReaderT(dictMonadHooks);
const monadEffectRouterT = dictMonadEffect => Control$dMonad$dReader$dTrans.monadEffectReader(dictMonadEffect);
const routerRouterT = dictMonadEffect => {
  const Monad0 = dictMonadEffect.Monad0();
  const bind2 = Control$dMonad$dReader$dTrans.bindReaderT(Monad0.Bind1()).bind;
  const $3 = Monad0.Applicative0().pure;
  const map = Control$dMonad$dReader$dTrans.monadReaderT(Monad0).Bind1().Apply0().Functor0().map;
  const liftEffect1 = Control$dMonad$dReader$dTrans.monadEffectReader(dictMonadEffect).liftEffect;
  const monadEffectRouterT1 = Control$dMonad$dReader$dTrans.monadEffectReader(dictMonadEffect);
  return {
    usePushRoute: route => bind2(map(v => v.pushState)($3))(push => liftEffect1(push(route))),
    useReplaceRoute: route => bind2(map(v => v.replaceState)($3))(replace => liftEffect1(replace(route))),
    useCurrentRoute: map(v => v.currentRoute)($3),
    MonadEffect0: () => monadEffectRouterT1
  };
};
const functorRouterT = dictMonad => {
  const $1 = dictMonad.Bind1().Apply0().Functor0();
  return {
    map: x => {
      const $3 = $1.map(x);
      return v => x$1 => $3(v(x$1));
    }
  };
};
const componentRouterT = dictComponent => Jelly$dComponent.componentReaderT(dictComponent);
const bindRouterT = dictMonad => Control$dMonad$dReader$dTrans.bindReaderT(dictMonad.Bind1());
const applyRouterT = dictMonad => {
  const $1 = dictMonad.Bind1().Apply0();
  const $2 = $1.Functor0();
  const functorReaderT1 = {
    map: x => {
      const $4 = $2.map(x);
      return v => x$1 => $4(v(x$1));
    }
  };
  return {apply: v => v1 => r => $1.apply(v(r))(v1(r)), Functor0: () => functorReaderT1};
};
const applicativeRouterT = dictMonad => {
  const $1 = dictMonad.Applicative0();
  const $2 = $1.Apply0();
  const $3 = $2.Functor0();
  const functorReaderT1 = {
    map: x => {
      const $5 = $3.map(x);
      return v => x$1 => $5(v(x$1));
    }
  };
  const applyReaderT1 = {apply: v => v1 => r => $2.apply(v(r))(v1(r)), Functor0: () => functorReaderT1};
  return {
    pure: x => {
      const $7 = $1.pure(x);
      return v => $7;
    },
    Apply0: () => applyReaderT1
  };
};
const useReplaceRoute = dict => dict.useReplaceRoute;
const usePushRoute = dict => dict.usePushRoute;
const useCurrentRoute = dict => dict.useCurrentRoute;
const routerLink = dictComponent => {
  const MonadEffect0 = dictComponent.MonadHooks0().MonadEffect0();
  const discard3 = MonadEffect0.Monad0().Bind1().bind;
  const a = dictComponent.el("a");
  return dictRouter => route => props => component => a(Data$dSemigroup.concatArray([
    Jelly$dProp.$Prop("PropHandler", "click", e => discard3(MonadEffect0.liftEffect(Web$dEvent$dEvent.preventDefault(e)))(() => dictRouter.usePushRoute(route))),
    Jelly$dProp.attr(Jelly$dProp.attrValueString)("href")(route)
  ])(props))(component);
};
const routerLink$p = dictComponent => {
  const routerLink1 = routerLink(dictComponent);
  return dictRouter => {
    const routerLink2 = routerLink1(dictRouter);
    return route => component => routerLink2(route)([])(component);
  };
};
const renderRouter = v => route => {
  const $2 = newState(route);
  return () => {
    const v1 = $2();
    const v1$1 = v({
      pushState: Signal.writeChannel(Effect$dClass.monadEffectEffect)(v1._2),
      replaceState: Signal.writeChannel(Effect$dClass.monadEffectEffect)(v1._2),
      currentRoute: v1._1
    })();
    return v1$1._2;
  };
};
const mountRouter = v => node => Signal$dHooks.bindHooks.bind(Signal$dHooks.monadEffectHooks.liftEffect(Web$dHTML.window))(w => Signal$dHooks.bindHooks.bind(Signal$dHooks.monadEffectHooks.liftEffect((() => {
  const $3 = Web$dHTML$dWindow.location(w);
  return () => {
    const l = $3();
    const pn = Web$dHTML$dLocation.pathname(l)();
    const sr = Web$dHTML$dLocation.search(l)();
    const hs = Web$dHTML$dLocation.hash(l)();
    return pn + (sr + hs);
  };
})()))(initRoute => Signal$dHooks.bindHooks.bind(newStateEq(initRoute))(v1 => {
  const handleRoute = handleFn => route => {
    const $7 = Effect.bindE(Web$dHTML$dWindow.history(w))(handleFn({})("")(route));
    return () => {
      $7();
      return Signal.modifyChannelImpl(v1._2)(v$1 => route)();
    };
  };
  const routerR = {pushState: handleRoute(Web$dHTML$dHistory.pushState), replaceState: handleRoute(Web$dHTML$dHistory.replaceState), currentRoute: v1._1};
  return Signal$dHooks.bindHooks.bind(useEvent(w)("popstate")(v2 => Signal$dHooks.bindHooks.bind(Signal$dHooks.monadEffectHooks.liftEffect(Effect.bindE(Web$dHTML$dWindow.location(w))(Web$dHTML$dLocation.href)))(route => Signal$dHooks.monadEffectHooks.liftEffect(Signal.modifyChannelImpl(v1._2)(v$1 => route)))))(() => Jelly$dHydrate.mount(v(routerR))(node));
})));
export {
  RouterT,
  applicativeRouterT,
  applyRouterT,
  bindRouterT,
  componentRouterT,
  functorRouterT,
  monadEffectRouterT,
  monadHooksRouterT,
  monadRouterT,
  mountRouter,
  newState,
  newStateEq,
  renderRouter,
  routerLink,
  routerLink$p,
  routerRouterT,
  useCurrentRoute,
  useEvent,
  usePushRoute,
  useReplaceRoute
};
