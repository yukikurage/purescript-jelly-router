import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dUnit from "../Data.Unit/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Jelly$dAff from "../Jelly.Aff/index.js";
import * as Jelly$dComponent from "../Jelly.Component/index.js";
import * as Jelly$dHydrate from "../Jelly.Hydrate/index.js";
import * as Jelly$dRouter from "../Jelly.Router/index.js";
import * as Signal$dHooks from "../Signal.Hooks/index.js";
const traverse_ = /* #__PURE__ */ Data$dFoldable.traverse_(Signal$dHooks.applicativeHooks)(Data$dFoldable.foldableMaybe);
const root = dictComponent => {
  const MonadHooks0 = dictComponent.MonadHooks0();
  const Bind1 = MonadHooks0.MonadEffect0().Monad0().Bind1();
  const useHooks_ = Signal$dHooks.useHooks_(MonadHooks0);
  const div$p = dictComponent.el("div")([]);
  const routerLink$p = Jelly$dRouter.routerLink$p(dictComponent);
  return dictRouter => {
    const routerLink$p1 = routerLink$p(dictRouter);
    return Bind1.bind(dictRouter.useCurrentRoute)(currentRoute => Bind1.bind(useHooks_((() => {
      const $9 = v => {
        if (v === "/") { return div$p(dictComponent.textSig({run: cb => cb("Home"), get: () => "Home"})); }
        if (v === "/hoge") { return div$p(dictComponent.textSig({run: cb => cb("Hoge"), get: () => "Hoge"})); }
        if (v === "/fuga") { return div$p(dictComponent.textSig({run: cb => cb("Fuga"), get: () => "Fuga"})); }
        if (v === "/fuga#piyo") { return div$p(dictComponent.textSig({run: cb => cb("Fuga#piyo"), get: () => "Fuga#piyo"})); }
        return div$p(dictComponent.textSig({run: cb => cb("404"), get: () => "404"}));
      };
      return {
        run: cb => currentRoute.run(x => cb($9(x))),
        get: () => {
          const a$p = currentRoute.get();
          return $9(a$p);
        }
      };
    })()))(() => Bind1.bind(div$p(routerLink$p1("/")(dictComponent.textSig({run: cb => cb("Home"), get: () => "Home"}))))(() => Bind1.bind(div$p(routerLink$p1("/hoge")(dictComponent.textSig({
      run: cb => cb("Hoge"),
      get: () => "Hoge"
    }))))(() => Bind1.bind(div$p(routerLink$p1("/fuga")(dictComponent.textSig({run: cb => cb("Fuga"), get: () => "Fuga"}))))(() => div$p(routerLink$p1("/fuga#piyo")(dictComponent.textSig({
      run: cb => cb("Fuga#piyo"),
      get: () => "Fuga#piyo"
    }))))))));
  };
};
const root1 = /* #__PURE__ */ root(/* #__PURE__ */ Jelly$dComponent.componentReaderT(Jelly$dHydrate.componentHydrateM))(/* #__PURE__ */ Jelly$dRouter.routerRouterT(Jelly$dHydrate.monadEffectHydrateM));
const main = /* #__PURE__ */ (() => {
  const $0 = Effect$dAff._makeFiber(
    Effect$dAff.ffiUtil,
    Effect$dAff._bind(Jelly$dAff.awaitBody)(bodyMaybe => Effect$dAff._liftEffect((() => {
      const $1 = traverse_(Jelly$dRouter.mountRouter(root1))(bodyMaybe);
      return () => {
        $1();
        return Data$dUnit.unit;
      };
    })()))
  );
  return () => {
    const fiber = $0();
    fiber.run();
    return Data$dUnit.unit;
  };
})();
export {main, root, root1, traverse_};
