import * as $runtime from "../runtime.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Jelly$dProp from "../Jelly.Prop/index.js";
const monadTellWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadTellWriterT(Data$dMonoid.monoidString)(Effect.monadEffect);
const monadEffectWriter = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadEffectWriter(Data$dMonoid.monoidString)(Effect$dClass.monadEffectEffect);
const bindWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.bindWriterT(Data$dSemigroup.semigroupString)(Effect.bindEffect);
const applicativeWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.applicativeWriterT(Data$dMonoid.monoidString)(Effect.applicativeEffect);
const RenderM = x => x;
const monadWriterStringRenderM = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterWriterT(Data$dMonoid.monoidString)(Effect.monadEffect);
const monadTellStringRenderM = monadTellWriterT;
const monadRenderM = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterT(Data$dMonoid.monoidString)(Effect.monadEffect);
const monadRecRenderM = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadRecWriterT(Data$dMonoid.monoidString)(Control$dMonad$dRec$dClass.monadRecEffect);
const monadEffectRenderM = monadEffectWriter;
const monadHooksRenderM = /* #__PURE__ */ (() => (
  {
    useCleaner: Control$dMonad$dWriter$dTrans.monadTransWriterT(Data$dMonoid.monoidString).lift(Effect.monadEffect),
    useHooks: sig => bindWriterT.bind(monadEffectWriter.liftEffect(sig.get))(v => bindWriterT.bind(monadEffectWriter.liftEffect(v))(v1 => bindWriterT.bind(monadTellWriterT.tell(v1._2))(() => applicativeWriterT.pure({
      run: cb => cb(v1._1),
      get: () => v1._1
    })))),
    MonadEffect0: () => monadEffectWriter
  }
))();
const functorRenderM = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.functorWriterT(Effect.functorEffect);
const bindRenderM = bindWriterT;
const applyRenderM = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.applyWriterT(Data$dSemigroup.semigroupString)(Effect.applyEffect);
const applicativeRenderM = applicativeWriterT;
const render = v => () => {
  const v1 = v();
  return v1._2;
};
const componentRenderM = {
  el: tag => props => children => bindWriterT.bind(monadEffectWriter.liftEffect(Jelly$dProp.fold(Data$dFunctor.arrayMap(Jelly$dProp.renderProp)(props))))(propsRendered => bindWriterT.bind(monadEffectWriter.liftEffect(() => {
    const v1 = children();
    return v1._2;
  }))(childrenRendered => monadTellWriterT.tell("<" + (tag + (propsRendered + (">" + (childrenRendered + ("</" + (tag + ">"))))))))),
  elNS: namespace => tag => props => children => bindWriterT.bind(monadEffectWriter.liftEffect(Jelly$dProp.fold(Data$dFunctor.arrayMap(Jelly$dProp.renderProp)(props))))(propsRendered => bindWriterT.bind(monadEffectWriter.liftEffect(() => {
    const v1 = children();
    return v1._2;
  }))(childrenRendered => monadTellWriterT.tell("<" + (tag + (" xmlns=\"" + (namespace + ("\"" + (propsRendered + (">" + (childrenRendered + ("</" + (tag + ">")))))))))))),
  elVoid: tag => props => bindWriterT.bind(monadEffectWriter.liftEffect(Jelly$dProp.fold(Data$dFunctor.arrayMap(Jelly$dProp.renderProp)(props))))(propsRendered => monadTellWriterT.tell("<" + (
    tag + (propsRendered + ">")
  ))),
  rawSig: innerHtmlSig => bindWriterT.bind(monadEffectWriter.liftEffect(innerHtmlSig.get))(monadTellWriterT.tell),
  textSig: ts => bindWriterT.bind(monadEffectWriter.liftEffect(ts.get))(monadTellWriterT.tell),
  doctype: name => publicId => systemId => monadTellWriterT.tell("<!DOCTYPE " + (name + (" " + (publicId + (" " + (systemId + ">")))))),
  MonadHooks0: () => monadHooksRenderM
};
export {
  RenderM,
  applicativeRenderM,
  applicativeWriterT,
  applyRenderM,
  bindRenderM,
  bindWriterT,
  componentRenderM,
  functorRenderM,
  monadEffectRenderM,
  monadEffectWriter,
  monadHooksRenderM,
  monadRecRenderM,
  monadRenderM,
  monadTellStringRenderM,
  monadTellWriterT,
  monadWriterStringRenderM,
  render
};
