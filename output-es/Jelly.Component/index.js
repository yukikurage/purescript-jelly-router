import * as $runtime from "../runtime.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Jelly$dProp from "../Jelly.Prop/index.js";
import * as Signal$dHooks from "../Signal.Hooks/index.js";
const textSig = dict => dict.textSig;
const text = dictComponent => x => dictComponent.textSig({run: cb => cb(x), get: () => x});
const rawSig = dict => dict.rawSig;
const raw = dictComponent => innerHtml => dictComponent.rawSig({run: cb => cb(innerHtml), get: () => innerHtml});
const elVoid = dict => dict.elVoid;
const elVoid$p = dictComponent => tag => dictComponent.elVoid(tag)([]);
const elNS = dict => dict.elNS;
const elNS$p = dictComponent => namespace => tag => dictComponent.elNS(namespace)(tag)([]);
const el = dict => dict.el;
const el$p = dictComponent => tag => dictComponent.el(tag)([]);
const doctype = dict => dict.doctype;
const doctypeHtml = dictComponent => dictComponent.doctype("html")("")("");
const componentReaderT = dictComponent => {
  const MonadHooks0 = dictComponent.MonadHooks0();
  const Monad0 = MonadHooks0.MonadEffect0().Monad0();
  const bind = Control$dMonad$dReader$dTrans.bindReaderT(Monad0.Bind1()).bind;
  const $4 = Monad0.Applicative0().pure;
  const monadHooksReaderT = Signal$dHooks.monadHooksReaderT(MonadHooks0);
  return {
    el: tag => props => children => bind($4)(r => {
      const $10 = dictComponent.el(tag)(Data$dFunctor.arrayMap(Jelly$dProp.hoistProp(m => m(r)))(props))(children(r));
      return v => $10;
    }),
    elNS: ns => tag => props => children => bind($4)(r => {
      const $11 = dictComponent.elNS(ns)(tag)(Data$dFunctor.arrayMap(Jelly$dProp.hoistProp(m => m(r)))(props))(children(r));
      return v => $11;
    }),
    elVoid: tag => props => bind($4)(r => {
      const $9 = dictComponent.elVoid(tag)(Data$dFunctor.arrayMap(Jelly$dProp.hoistProp(m => m(r)))(props));
      return v => $9;
    }),
    rawSig: sig => {
      const $7 = dictComponent.rawSig(sig);
      return v => $7;
    },
    textSig: sig => {
      const $7 = dictComponent.textSig(sig);
      return v => $7;
    },
    doctype: dc => publicId => systemId => {
      const $9 = dictComponent.doctype(dc)(publicId)(systemId);
      return v => $9;
    },
    MonadHooks0: () => monadHooksReaderT
  };
};
export {componentReaderT, doctype, doctypeHtml, el, el$p, elNS, elNS$p, elVoid, elVoid$p, raw, rawSig, text, textSig};
