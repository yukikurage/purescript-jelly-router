import * as $runtime from "../runtime.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dSemigroup from "../Data.Semigroup/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnit from "../Data.Unit/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dRef from "../Effect.Ref/index.js";
import * as Signal from "../Signal/index.js";
import * as Signal$dHooks from "../Signal.Hooks/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Web$dDOM$dDocument from "../Web.DOM.Document/index.js";
import * as Web$dDOM$dElement from "../Web.DOM.Element/index.js";
import * as Web$dDOM$dNode from "../Web.DOM.Node/index.js";
import * as Web$dHTML from "../Web.HTML/index.js";
import * as Web$dHTML$dWindow from "../Web.HTML.Window/index.js";
import * as Web$dInternal$dFFI from "../Web.Internal.FFI/index.js";
import {convertInnerHtmlToNodes, createDocumentType, updateChildren} from "./foreign.js";
const monoidSignal = /* #__PURE__ */ (() => {
  const semigroupSignal1 = {
    append: a => b => (
      {
        run: cb => a.run(x => {
          const $4 = Data$dSemigroup.concatArray(x);
          return b.run(x$1 => cb($4(x$1)));
        }),
        get: () => {
          const a$p = a.get();
          const a$p$1 = b.get();
          return Data$dSemigroup.concatArray(a$p)(a$p$1);
        }
      }
    )
  };
  return {mempty: {run: cb => cb([]), get: () => []}, Semigroup0: () => semigroupSignal1};
})();
const monadWriterT = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterT(monoidSignal)(Signal$dHooks.monadHooks);
const semigroupSignal = {
  append: a => b => (
    {
      run: cb => a.run(x => {
        const $4 = Data$dSemigroup.concatArray(x);
        return b.run(x$1 => cb($4(x$1)));
      }),
      get: () => {
        const a$p = a.get();
        const a$p$1 = b.get();
        return Data$dSemigroup.concatArray(a$p)(a$p$1);
      }
    }
  )
};
const for_ = /* #__PURE__ */ Data$dFoldable.for_(Effect.applicativeEffect)(Data$dFoldable.foldableArray);
const HydrateM = x => x;
const monadWriterSignalArrayNod = /* #__PURE__ */ Control$dMonad$dReader$dTrans.monadWriterReaderT(/* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterWriterT(monoidSignal)(Signal$dHooks.monadHooks));
const monadTellSignalArrayNodeH = /* #__PURE__ */ Control$dMonad$dReader$dTrans.monadTellReaderT(/* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadTellWriterT(monoidSignal)(Signal$dHooks.monadHooks));
const monadRecHydrateM = /* #__PURE__ */ Control$dMonad$dReader$dTrans.monadRecReaderT(/* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadRecWriterT(monoidSignal)(Signal$dHooks.monadRecHooks));
const monadReaderRefMaybeNodeHy = /* #__PURE__ */ Control$dMonad$dReader$dTrans.monadReaderReaderT(monadWriterT);
const monadHydrateM = /* #__PURE__ */ Control$dMonad$dReader$dTrans.monadReaderT(monadWriterT);
const monadHooksHydrateM = /* #__PURE__ */ Signal$dHooks.monadHooksReaderT(/* #__PURE__ */ Signal$dHooks.monadHooksWriterTSignal(Signal$dHooks.monadHooksHooks)(Data$dMonoid.monoidArray));
const liftHooks = /* #__PURE__ */ (() => {
  const MonadEffect0 = monadHooksHydrateM.MonadEffect0();
  const Monad0 = MonadEffect0.Monad0();
  const Bind1 = Monad0.Bind1();
  const pure2 = Monad0.Applicative0().pure;
  return m => Bind1.bind(MonadEffect0.liftEffect(m))(v => Bind1.bind(monadHooksHydrateM.useCleaner(v._2))(() => pure2(v._1)));
})();
const monadEffectHydrateM = /* #__PURE__ */ Control$dMonad$dReader$dTrans.monadEffectReader(/* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadEffectWriter(monoidSignal)(Signal$dHooks.monadEffectHooks));
const monadAskRefMaybeNodeHydra = /* #__PURE__ */ (() => {
  const monadReaderT1 = Control$dMonad$dReader$dTrans.monadReaderT(monadWriterT);
  return {ask: monadWriterT.Applicative0().pure, Monad0: () => monadReaderT1};
})();
const functorHydrateM = /* #__PURE__ */ (() => {
  const $0 = Control$dMonad$dWriter$dTrans.functorWriterT(Signal$dHooks.functorHooks);
  return {
    map: x => {
      const $2 = $0.map(x);
      return v => x$1 => $2(v(x$1));
    }
  };
})();
const bindHydrateM = /* #__PURE__ */ Control$dMonad$dReader$dTrans.bindReaderT(/* #__PURE__ */ Control$dMonad$dWriter$dTrans.bindWriterT(semigroupSignal)(Signal$dHooks.bindHooks));
const applyHydrateM = /* #__PURE__ */ (() => {
  const $0 = Control$dMonad$dWriter$dTrans.applyWriterT(semigroupSignal)(Signal$dHooks.applyHooks);
  const $1 = $0.Functor0();
  const functorReaderT1 = {
    map: x => {
      const $3 = $1.map(x);
      return v => x$1 => $3(v(x$1));
    }
  };
  return {apply: v => v1 => r => $0.apply(v(r))(v1(r)), Functor0: () => functorReaderT1};
})();
const applicativeHydrateM = /* #__PURE__ */ (() => {
  const $0 = Control$dMonad$dWriter$dTrans.applicativeWriterT(monoidSignal)(Signal$dHooks.applicativeHooks);
  const $1 = $0.Apply0();
  const $2 = $1.Functor0();
  const functorReaderT1 = {
    map: x => {
      const $4 = $2.map(x);
      return v => x$1 => $4(v(x$1));
    }
  };
  const applyReaderT1 = {apply: v => v1 => r => $1.apply(v(r))(v1(r)), Functor0: () => functorReaderT1};
  return {
    pure: x => {
      const $6 = $0.pure(x);
      return v => $6;
    },
    Apply0: () => applyReaderT1
  };
})();
const runSignalRegister = dictMonadHooks => dictMonadEffect => {
  const watchSignal = Signal.watchSignal(dictMonadEffect);
  return doInitialize => {
    if (doInitialize) { return Signal.runSignal(dictMonadEffect); }
    return watchSignal;
  };
};
const useRegisterChildren = dictMonadHooks => {
  const MonadEffect0 = dictMonadHooks.MonadEffect0();
  const bind3 = MonadEffect0.Monad0().Bind1().bind;
  const watchSignal = Signal.watchSignal(MonadEffect0);
  return doInitialize => elem => chlSig => bind3((() => {
    if (doInitialize) { return Signal.runSignal(MonadEffect0); }
    return watchSignal;
  })()({
    run: cb => chlSig.run(x => cb((() => {
      const $9 = updateChildren(elem)(x);
      return () => {
        $9();
        return () => Data$dUnit.unit;
      };
    })())),
    get: () => {
      const a$p = chlSig.get();
      return (() => {
        const $8 = updateChildren(elem)(a$p);
        return () => {
          $8();
          return () => Data$dUnit.unit;
        };
      })();
    }
  }))(cleaner => dictMonadHooks.useCleaner(cleaner));
};
const useRegisterChildren1 = /* #__PURE__ */ useRegisterChildren(Signal$dHooks.monadHooksHooks);
const useRegisterProp = dictMonadHooks => {
  const MonadEffect0 = dictMonadHooks.MonadEffect0();
  const bind3 = MonadEffect0.Monad0().Bind1().bind;
  const watchSignal = Signal.watchSignal(MonadEffect0);
  const useEvent = Signal$dHooks.useEvent(dictMonadHooks);
  return doInitialize => element => v => {
    if (v.tag === "PropAttribute") {
      return bind3((() => {
        if (doInitialize) { return Signal.runSignal(MonadEffect0); }
        return watchSignal;
      })()((() => {
        const $8 = value => {
          const $9 = (() => {
            if (value.tag === "Nothing") { return Web$dDOM$dElement.removeAttribute(v._1)(element); }
            if (value.tag === "Just") { return Web$dDOM$dElement.setAttribute(v._1)(value._1)(element); }
            $runtime.fail();
          })();
          return () => {
            $9();
            return () => Data$dUnit.unit;
          };
        };
        return {
          run: cb => v._2.run(x => cb($8(x))),
          get: () => {
            const a$p = v._2.get();
            return $8(a$p);
          }
        };
      })()))(cleaner => dictMonadHooks.useCleaner(cleaner));
    }
    if (v.tag === "PropHandler") { return useEvent(element)(v._1)(v._2); }
    if (v.tag === "PropMountEffect") { return v._1(element); }
    $runtime.fail();
  };
};
const useRegisterProps = dictMonadHooks => {
  const traverse_ = Data$dFoldable.traverse_(dictMonadHooks.MonadEffect0().Monad0().Applicative0())(Data$dFoldable.foldableArray);
  const useRegisterProp1 = useRegisterProp(dictMonadHooks);
  return doInitialize => element => props => traverse_(useRegisterProp1(doInitialize)(element))(props);
};
const useRegisterProps1 = /* #__PURE__ */ useRegisterProps(monadHooksHydrateM);
const useRegisterText = dictMonadHooks => {
  const MonadEffect0 = dictMonadHooks.MonadEffect0();
  const bind3 = MonadEffect0.Monad0().Bind1().bind;
  const watchSignal = Signal.watchSignal(MonadEffect0);
  return doInitialize => txt => txtSig => bind3((() => {
    if (doInitialize) { return Signal.runSignal(MonadEffect0); }
    return watchSignal;
  })()({
    run: cb => txtSig.run(x => cb((() => {
      const $9 = Web$dDOM$dNode.setTextContent(x)(txt);
      return () => {
        $9();
        return () => Data$dUnit.unit;
      };
    })())),
    get: () => {
      const a$p = txtSig.get();
      return (() => {
        const $8 = Web$dDOM$dNode.setTextContent(a$p)(txt);
        return () => {
          $8();
          return () => Data$dUnit.unit;
        };
      })();
    }
  }))(cleaner => dictMonadHooks.useCleaner(cleaner));
};
const useRegisterText1 = /* #__PURE__ */ useRegisterText(monadHooksHydrateM);
const hydrateNode = convertTo => convertFrom => make => bindHydrateM.bind(monadAskRefMaybeNodeHydra.ask)(realNodeRef => bindHydrateM.bind(monadEffectHydrateM.liftEffect(() => realNodeRef.value))(maybeNode => {
  const v = v1 => bindHydrateM.bind(monadEffectHydrateM.liftEffect(make))(a => bindHydrateM.bind(monadTellSignalArrayNodeH.tell((() => {
    const $7 = [convertFrom(a)];
    return {run: cb => cb($7), get: () => $7};
  })()))(() => applicativeHydrateM.pure(Data$dTuple.$Tuple(a, false))));
  if (maybeNode.tag === "Just") {
    const $6 = convertTo(maybeNode._1);
    if ($6.tag === "Just") {
      return bindHydrateM.bind(monadEffectHydrateM.liftEffect((() => {
        const $7 = Web$dDOM$dNode._nextSibling(maybeNode._1);
        return () => {
          const a$p = $7();
          return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
        };
      })()))(ns => bindHydrateM.bind(monadEffectHydrateM.liftEffect(() => realNodeRef.value = ns))(() => bindHydrateM.bind(monadTellSignalArrayNodeH.tell((() => {
        const $9 = [maybeNode._1];
        return {run: cb => cb($9), get: () => $9};
      })()))(() => applicativeHydrateM.pure(Data$dTuple.$Tuple($6._1, true)))));
    }
    return v(true);
  }
  return v(true);
}));
const hydrate = v => node => Signal$dHooks.bindHooks.bind(Signal$dHooks.monadEffectHooks.liftEffect((() => {
  const $2 = Web$dDOM$dNode._firstChild(node);
  return Effect.bindE(() => {
    const a$p = $2();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  })(Effect$dRef._new);
})()))(realNodeRef => Signal$dHooks.bindHooks.bind(v(realNodeRef))(v1 => useRegisterChildren1(true)(node)(v1._2)));
const mount = cmp => node => Signal$dHooks.bindHooks.bind(Signal$dHooks.monadEffectHooks.liftEffect(updateChildren(node)([])))(() => hydrate(cmp)(node));
const componentHydrateM = {
  el: tag => props => children => bindHydrateM.bind(monadEffectHydrateM.liftEffect(Web$dHTML.window))(w => bindHydrateM.bind(monadEffectHydrateM.liftEffect((() => {
    const $4 = Web$dHTML$dWindow.document(w);
    return () => {
      const a$p = $4();
      return a$p;
    };
  })()))(d => bindHydrateM.bind(hydrateNode(Web$dInternal$dFFI.unsafeReadProtoTagged("Element"))(Unsafe$dCoerce.unsafeCoerce)(Web$dDOM$dDocument.createElement(tag)(d)))(v => bindHydrateM.bind(liftHooks(hydrate(children)(v._1)))(() => useRegisterProps1(!v._2)(v._1)(props))))),
  elNS: namespace => tag => props => children => bindHydrateM.bind(monadEffectHydrateM.liftEffect(Web$dHTML.window))(w => bindHydrateM.bind(monadEffectHydrateM.liftEffect((() => {
    const $5 = Web$dHTML$dWindow.document(w);
    return () => {
      const a$p = $5();
      return a$p;
    };
  })()))(d => bindHydrateM.bind(hydrateNode(Web$dInternal$dFFI.unsafeReadProtoTagged("Element"))(Unsafe$dCoerce.unsafeCoerce)(Web$dDOM$dDocument._createElementNS(Data$dNullable.notNull(namespace))(tag)(d)))(v => bindHydrateM.bind(liftHooks(hydrate(children)(v._1)))(() => useRegisterProps1(!v._2)(v._1)(props))))),
  elVoid: tag => props => bindHydrateM.bind(monadEffectHydrateM.liftEffect(Web$dHTML.window))(w => bindHydrateM.bind(monadEffectHydrateM.liftEffect((() => {
    const $3 = Web$dHTML$dWindow.document(w);
    return () => {
      const a$p = $3();
      return a$p;
    };
  })()))(d => bindHydrateM.bind(hydrateNode(Web$dInternal$dFFI.unsafeReadProtoTagged("Element"))(Unsafe$dCoerce.unsafeCoerce)(Web$dDOM$dDocument.createElement(tag)(d)))(v => useRegisterProps1(!v._2)(v._1)(props)))),
  textSig: ts => bindHydrateM.bind(monadEffectHydrateM.liftEffect(Web$dHTML.window))(w => bindHydrateM.bind(monadEffectHydrateM.liftEffect((() => {
    const $2 = Web$dHTML$dWindow.document(w);
    return () => {
      const a$p = $2();
      return a$p;
    };
  })()))(d => bindHydrateM.bind(hydrateNode(Web$dInternal$dFFI.unsafeReadProtoTagged("Text"))(Unsafe$dCoerce.unsafeCoerce)(Web$dDOM$dDocument.createTextNode("")(d)))(v => useRegisterText1(!v._2)(v._1)(ts)))),
  rawSig: innerHtmlSig => bindHydrateM.bind(monadAskRefMaybeNodeHydra.ask)(realNodeRef => bindHydrateM.bind(monadHooksHydrateM.useHooks({
    run: cb => innerHtmlSig.run(x => cb(monadEffectHydrateM.liftEffect(convertInnerHtmlToNodes(x)))),
    get: () => {
      const a$p = innerHtmlSig.get();
      return monadEffectHydrateM.liftEffect(convertInnerHtmlToNodes(a$p));
    }
  }))(nodesSig => bindHydrateM.bind(monadEffectHydrateM.liftEffect(nodesSig.get))(nodes => bindHydrateM.bind(monadEffectHydrateM.liftEffect(for_(nodes)(v => () => {
    const maybeNode = realNodeRef.value;
    if (maybeNode.tag === "Just") {
      const a$p = Web$dDOM$dNode._nextSibling(maybeNode._1)();
      return realNodeRef.value = Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    }
    if (maybeNode.tag === "Nothing") { return realNodeRef.value = Data$dMaybe.Nothing; }
    $runtime.fail();
  })))(() => monadTellSignalArrayNodeH.tell(nodesSig))))),
  doctype: name => publicId => systemId => bindHydrateM.bind(monadEffectHydrateM.liftEffect(Web$dHTML.window))(w => bindHydrateM.bind(monadEffectHydrateM.liftEffect((() => {
    const $4 = Web$dHTML$dWindow.document(w);
    return () => {
      const a$p = $4();
      return a$p;
    };
  })()))(d => bindHydrateM.bind(hydrateNode(Web$dInternal$dFFI.unsafeReadProtoTagged("DocumentType"))(Unsafe$dCoerce.unsafeCoerce)(createDocumentType(name)(publicId)(systemId)(d)))(() => applicativeHydrateM.pure(Data$dUnit.unit)))),
  MonadHooks0: () => monadHooksHydrateM
};
export {
  HydrateM,
  applicativeHydrateM,
  applyHydrateM,
  bindHydrateM,
  componentHydrateM,
  for_,
  functorHydrateM,
  hydrate,
  hydrateNode,
  liftHooks,
  monadAskRefMaybeNodeHydra,
  monadEffectHydrateM,
  monadHooksHydrateM,
  monadHydrateM,
  monadReaderRefMaybeNodeHy,
  monadRecHydrateM,
  monadTellSignalArrayNodeH,
  monadWriterSignalArrayNod,
  monadWriterT,
  monoidSignal,
  mount,
  runSignalRegister,
  semigroupSignal,
  useRegisterChildren,
  useRegisterChildren1,
  useRegisterProp,
  useRegisterProps,
  useRegisterProps1,
  useRegisterText,
  useRegisterText1
};
export * from "./foreign.js";
