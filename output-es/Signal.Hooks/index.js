import * as $runtime from "../runtime.js";
import * as Control$dApply from "../Control.Apply/index.js";
import * as Control$dMonad$dReader$dTrans from "../Control.Monad.Reader.Trans/index.js";
import * as Control$dMonad$dRec$dClass from "../Control.Monad.Rec.Class/index.js";
import * as Control$dMonad$dWriter$dTrans from "../Control.Monad.Writer.Trans/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnit from "../Data.Unit/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Effect$dClass from "../Effect.Class/index.js";
import * as Effect$dTimer from "../Effect.Timer/index.js";
import * as Signal from "../Signal/index.js";
import * as Web$dEvent$dEventTarget from "../Web.Event.EventTarget/index.js";
const monoidEffect = /* #__PURE__ */ (() => {
  const semigroupEffect1 = {
    append: a => b => () => {
      a();
      b();
      return Data$dUnit.unit;
    }
  };
  return {mempty: () => Data$dUnit.unit, Semigroup0: () => semigroupEffect1};
})();
const semigroupEffect = {
  append: a => b => () => {
    a();
    b();
    return Data$dUnit.unit;
  }
};
const tell = /* #__PURE__ */ (() => Control$dMonad$dWriter$dTrans.monadTellWriterT(monoidEffect)(Effect.monadEffect).tell)();
const Hooks = x => x;
const monadRecHooks = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadRecWriterT(monoidEffect)(Control$dMonad$dRec$dClass.monadRecEffect);
const monadHooks = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadWriterT(monoidEffect)(Effect.monadEffect);
const monadEffectHooks = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.monadEffectWriter(monoidEffect)(Effect$dClass.monadEffectEffect);
const memoSignal = /* #__PURE__ */ Signal.memoSignal(monadEffectHooks);
const functorHooks = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.functorWriterT(Effect.functorEffect);
const bindHooks = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.bindWriterT(semigroupEffect)(Effect.bindEffect);
const applyHooks = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.applyWriterT(semigroupEffect)(Effect.applyEffect);
const applicativeHooks = /* #__PURE__ */ Control$dMonad$dWriter$dTrans.applicativeWriterT(monoidEffect)(Effect.applicativeEffect);
const useHooks = dict => dict.useHooks;
const useHooks_ = dictMonadHooks => {
  const void2 = dictMonadHooks.MonadEffect0().Monad0().Bind1().Apply0().Functor0().map(v => Data$dUnit.unit);
  return sig => void2(dictMonadHooks.useHooks(sig));
};
const useUpdate = dictMonadHooks => {
  const MonadEffect0 = dictMonadHooks.MonadEffect0();
  const bind3 = MonadEffect0.Monad0().Bind1().bind;
  const useHooks_1 = useHooks_(dictMonadHooks);
  return sig => bind3(MonadEffect0.liftEffect(() => ({value: true})))(isInit => useHooks_1((() => {
    const $6 = eff => bind3(MonadEffect0.liftEffect(() => isInit.value))(init => {
      if (init) {
        return MonadEffect0.liftEffect(() => {
          isInit.value = false;
          const a$p = monoidEffect.mempty();
          return a$p;
        });
      }
      return eff;
    });
    return {
      run: cb => sig.run(x => cb($6(x))),
      get: () => {
        const a$p = sig.get();
        return $6(a$p);
      }
    };
  })()));
};
const useIf = dictMonadHooks => cond => ifTrue => ifFalse => dictMonadHooks.useHooks({
  run: cb => cond.run(x => cb((() => {
    if (x) { return ifTrue; }
    return ifFalse;
  })())),
  get: () => {
    const a$p = cond.get();
    return (() => {
      if (a$p) { return ifTrue; }
      return ifFalse;
    })();
  }
});
const useIf_ = dictMonadHooks => {
  const void2 = dictMonadHooks.MonadEffect0().Monad0().Bind1().Apply0().Functor0().map(v => Data$dUnit.unit);
  return cond => ifTrue => ifFalse => void2(dictMonadHooks.useHooks({
    run: cb => cond.run(x => cb((() => {
      if (x) { return ifTrue; }
      return ifFalse;
    })())),
    get: () => {
      const a$p = cond.get();
      return (() => {
        if (a$p) { return ifTrue; }
        return ifFalse;
      })();
    }
  }));
};
const useWhen = dictMonadHooks => {
  const Monad0 = dictMonadHooks.MonadEffect0().Monad0();
  const map1 = Monad0.Bind1().Apply0().Functor0().map;
  const pure2 = Monad0.Applicative0().pure;
  return cond => ifTrue => {
    const $6 = map1(Data$dMaybe.Just)(ifTrue);
    const $7 = pure2(Data$dMaybe.Nothing);
    return dictMonadHooks.useHooks({
      run: cb => cond.run(x => cb((() => {
        if (x) { return $6; }
        return $7;
      })())),
      get: () => {
        const a$p = cond.get();
        return (() => {
          if (a$p) { return $6; }
          return $7;
        })();
      }
    });
  };
};
const useWhen_ = dictMonadHooks => {
  const void2 = dictMonadHooks.MonadEffect0().Monad0().Bind1().Apply0().Functor0().map(v => Data$dUnit.unit);
  const useWhen1 = useWhen(dictMonadHooks);
  return cond => ifTrue => void2(useWhen1(cond)(ifTrue));
};
const useEffect = dictMonadHooks => {
  const liftEffect2 = dictMonadHooks.MonadEffect0().liftEffect;
  return sig => dictMonadHooks.useHooks({
    run: cb => sig.run(x => cb(liftEffect2(x))),
    get: () => {
      const a$p = sig.get();
      return liftEffect2(a$p);
    }
  });
};
const useEffect_ = dictMonadHooks => {
  const $1 = dictMonadHooks.MonadEffect0().Monad0().Bind1().Apply0().Functor0().map(v => Data$dUnit.unit);
  const liftEffect2 = dictMonadHooks.MonadEffect0().liftEffect;
  return x => $1(dictMonadHooks.useHooks({
    run: cb => x.run(x$1 => cb(liftEffect2(x$1))),
    get: () => {
      const a$p = x.get();
      return liftEffect2(a$p);
    }
  }));
};
const useCleaner = dict => dict.useCleaner;
const useSubscriber = dictMonadHooks => {
  const MonadEffect0 = dictMonadHooks.MonadEffect0();
  const Monad0 = MonadEffect0.Monad0();
  const Bind1 = Monad0.Bind1();
  const newState = Signal.newState(MonadEffect0);
  const pure2 = Monad0.Applicative0().pure;
  const $6 = Bind1.Apply0();
  const map = $6.Functor0().map;
  const useHooks_1 = useHooks_(dictMonadHooks);
  return subscribe => handler => Bind1.bind(newState(pure2(Data$dUnit.unit)))(v => Bind1.bind(MonadEffect0.liftEffect(subscribe(e => {
    const $13 = $6.apply(map(v$1 => Control$dApply.identity)(handler(e)))(pure2(Data$dUnit.unit));
    return Signal.modifyChannelImpl(v._2)(v$1 => $13);
  })))(sub => Bind1.bind(dictMonadHooks.useCleaner(sub))(() => useHooks_1(v._1))));
};
const useEvent = dictMonadHooks => {
  const useSubscriber1 = useSubscriber(dictMonadHooks);
  return target => eventType => handler => useSubscriber1(callback => {
    const $6 = Web$dEvent$dEventTarget.eventListener(callback);
    return () => {
      const el = $6();
      Web$dEvent$dEventTarget.addEventListener(eventType)(el)(false)(target)();
      return Web$dEvent$dEventTarget.removeEventListener(eventType)(el)(false)(target);
    };
  })(handler);
};
const useInterval = dictMonadHooks => {
  const useSubscriber1 = useSubscriber(dictMonadHooks);
  return ms => handler => useSubscriber1(callback => {
    const $5 = Effect$dTimer.setIntervalImpl(ms)(callback(Data$dUnit.unit));
    return () => {
      const interval = $5();
      return Effect$dTimer.clearIntervalImpl(interval);
    };
  })(v => handler);
};
const useTimeout = dictMonadHooks => {
  const useSubscriber1 = useSubscriber(dictMonadHooks);
  return ms => handler => useSubscriber1(callback => {
    const $5 = Effect$dTimer.setTimeoutImpl(ms)(callback(Data$dUnit.unit));
    return () => {
      const timeout = $5();
      return Effect$dTimer.clearTimeoutImpl(timeout);
    };
  })(v => handler);
};
const monadHooksReaderT = dictMonadHooks => {
  const MonadEffect0 = dictMonadHooks.MonadEffect0();
  const Monad0 = MonadEffect0.Monad0();
  const bind3 = Control$dMonad$dReader$dTrans.bindReaderT(Monad0.Bind1()).bind;
  const monadEffectReader = Control$dMonad$dReader$dTrans.monadEffectReader(MonadEffect0);
  return {
    useCleaner: x => {
      const $6 = dictMonadHooks.useCleaner(x);
      return v => $6;
    },
    useHooks: sig => bind3(Monad0.Applicative0().pure)(r => {
      const $7 = dictMonadHooks.useHooks({
        run: cb => sig.run(x => cb(x(r))),
        get: () => {
          const a$p = sig.get();
          return a$p(r);
        }
      });
      return v => $7;
    }),
    MonadEffect0: () => monadEffectReader
  };
};
const monadHooksWriterTSignal = dictMonadHooks => {
  const MonadEffect0 = dictMonadHooks.MonadEffect0();
  const Monad0 = MonadEffect0.Monad0();
  const Bind1 = Monad0.Bind1();
  const Applicative0 = Monad0.Applicative0();
  return dictMonoid => {
    const $6 = dictMonoid.Semigroup0();
    const semigroupSignal1 = {
      append: a => b => (
        {
          run: cb => a.run(x => {
            const $11 = $6.append(x);
            return b.run(x$1 => cb($11(x$1)));
          }),
          get: () => {
            const a$p = a.get();
            const a$p$1 = b.get();
            return $6.append(a$p)(a$p$1);
          }
        }
      )
    };
    const monoidSignal = {mempty: {run: cb => cb(dictMonoid.mempty), get: () => dictMonoid.mempty}, Semigroup0: () => semigroupSignal1};
    const lift1 = Control$dMonad$dWriter$dTrans.monadTransWriterT(monoidSignal).lift(Monad0);
    const bindWriterT = Control$dMonad$dWriter$dTrans.bindWriterT((() => {
      const $10 = dictMonoid.Semigroup0();
      return {
        append: a => b => (
          {
            run: cb => a.run(x => {
              const $15 = $10.append(x);
              return b.run(x$1 => cb($15(x$1)));
            }),
            get: () => {
              const a$p = a.get();
              const a$p$1 = b.get();
              return $10.append(a$p)(a$p$1);
            }
          }
        )
      };
    })())(Bind1);
    const tell1 = Control$dMonad$dWriter$dTrans.monadTellWriterT(monoidSignal)(Monad0).tell;
    const pure2 = Control$dMonad$dWriter$dTrans.applicativeWriterT(monoidSignal)(Applicative0).pure;
    const monadEffectWriter = Control$dMonad$dWriter$dTrans.monadEffectWriter(monoidSignal)(MonadEffect0);
    return {
      useCleaner: x => lift1(dictMonadHooks.useCleaner(x)),
      useHooks: sig => bindWriterT.bind(lift1(dictMonadHooks.useHooks({
        run: cb => sig.run(x => cb(x)),
        get: () => {
          const a$p = sig.get();
          return a$p;
        }
      })))(sigAW => bindWriterT.bind(tell1({
        run: cb => sigAW.run(x => x._2.run(cb)),
        get: () => {
          const a$p = sigAW.get();
          return a$p._2.get();
        }
      }))(() => pure2({
        run: cb => sigAW.run(x => cb(x._1)),
        get: () => {
          const a$p = sigAW.get();
          return a$p._1;
        }
      }))),
      MonadEffect0: () => monadEffectWriter
    };
  };
};
const useAff_ = dictMonadHooks => {
  const useEffect_1 = useEffect_(dictMonadHooks);
  return sig => useEffect_1({
    run: cb => sig.run(x => cb((() => {
      const $5 = Effect$dAff._makeFiber(Effect$dAff.ffiUtil, Effect$dAff._map(v => Data$dUnit.unit)(x));
      return () => {
        const fiber = $5();
        fiber.run();
        return Data$dUnit.unit;
      };
    })())),
    get: () => {
      const a$p = sig.get();
      return (() => {
        const $4 = Effect$dAff._makeFiber(Effect$dAff.ffiUtil, Effect$dAff._map(v => Data$dUnit.unit)(a$p));
        return () => {
          const fiber = $4();
          fiber.run();
          return Data$dUnit.unit;
        };
      })();
    }
  });
};
const useAff = dictMonadHooks => {
  const MonadEffect0 = dictMonadHooks.MonadEffect0();
  const Monad0 = MonadEffect0.Monad0();
  const Bind1 = Monad0.Bind1();
  const newState = Signal.newState(MonadEffect0);
  const useEffect_1 = useEffect_(dictMonadHooks);
  const pure2 = Monad0.Applicative0().pure;
  return sig => Bind1.bind(MonadEffect0.liftEffect(() => ({value: 0})))(currentRef => Bind1.bind(newState(Data$dMaybe.Nothing))(v => Bind1.bind(useEffect_1((() => {
    const $10 = aff => () => {
      const $11 = currentRef.value;
      const current = currentRef.value = $11 + 1 | 0;
      const fiber = Effect$dAff._makeFiber(
        Effect$dAff.ffiUtil,
        Effect$dAff._bind(aff)(a => Effect$dAff._bind(Effect$dAff._liftEffect(() => currentRef.value))(current$p => {
          const $15 = Effect$dAff._liftEffect(Signal.modifyChannelImpl(v._2)(v$1 => Data$dMaybe.$Maybe("Just", a)));
          if (current === current$p) { return $15; }
          return Effect$dAff._pure(Data$dUnit.unit);
        }))
      )();
      fiber.run();
      return Data$dUnit.unit;
    };
    return {
      run: cb => sig.run(x => cb($10(x))),
      get: () => {
        const a$p = sig.get();
        return $10(a$p);
      }
    };
  })()))(() => pure2(v._1))));
};
const runHooks = dictMonadEffect => v => dictMonadEffect.liftEffect(v);
const runHooks_ = m => () => {
  m();
  return Data$dUnit.unit;
};
const monadHooksHooks = {
  useCleaner: cleaner => tell(cleaner),
  useHooks: sig => bindHooks.bind(memoSignal({
    run: cb => sig.run(x => cb(x)),
    get: () => {
      const a$p = sig.get();
      return a$p;
    }
  }))(v => bindHooks.bind(tell(v._2))(() => applicativeHooks.pure(v._1))),
  MonadEffect0: () => monadEffectHooks
};
const nubEq = dictMonadHooks => {
  const MonadEffect0 = dictMonadHooks.MonadEffect0();
  const Monad0 = MonadEffect0.Monad0();
  const Bind1 = Monad0.Bind1();
  const newState = Signal.newState(MonadEffect0);
  const useHooks_1 = useHooks_(dictMonadHooks);
  const Applicative0 = Monad0.Applicative0();
  return dictEq => sig => Bind1.bind(newState(Data$dUnit.unit))(v => Bind1.bind(useHooks_1((() => {
    const $10 = a => Bind1.bind(MonadEffect0.liftEffect(v._1.get))(prev => {
      const $12 = dictEq.eq(a)(prev);
      const $13 = MonadEffect0.liftEffect(Signal.modifyChannelImpl(v._2)(v$1 => a));
      if (!$12) { return $13; }
      if ($12) { return Applicative0.pure(Data$dUnit.unit); }
      $runtime.fail();
    });
    return {
      run: cb => sig.run(x => cb($10(x))),
      get: () => {
        const a$p = sig.get();
        return $10(a$p);
      }
    };
  })()))(() => Applicative0.pure(v._1)));
};
const newStateEq = dictMonadHooks => {
  const MonadEffect0 = dictMonadHooks.MonadEffect0();
  const Monad0 = MonadEffect0.Monad0();
  const bind3 = Monad0.Bind1().bind;
  const newState = Signal.newState(MonadEffect0);
  const nubEq1 = nubEq(dictMonadHooks);
  const pure2 = Monad0.Applicative0().pure;
  return dictEq => {
    const nubEq2 = nubEq1(dictEq);
    return a => bind3(newState(a))(v => bind3(nubEq2(v._1))(sig$p => pure2(Data$dTuple.$Tuple(sig$p, v._2))));
  };
};
const liftHooks = dictMonadHooks => {
  const MonadEffect0 = dictMonadHooks.MonadEffect0();
  const Monad0 = MonadEffect0.Monad0();
  const Bind1 = Monad0.Bind1();
  const pure2 = Monad0.Applicative0().pure;
  return m => Bind1.bind(MonadEffect0.liftEffect(m))(v => Bind1.bind(dictMonadHooks.useCleaner(v._2))(() => pure2(v._1)));
};
export {
  Hooks,
  applicativeHooks,
  applyHooks,
  bindHooks,
  functorHooks,
  liftHooks,
  memoSignal,
  monadEffectHooks,
  monadHooks,
  monadHooksHooks,
  monadHooksReaderT,
  monadHooksWriterTSignal,
  monadRecHooks,
  monoidEffect,
  newStateEq,
  nubEq,
  runHooks,
  runHooks_,
  semigroupEffect,
  tell,
  useAff,
  useAff_,
  useCleaner,
  useEffect,
  useEffect_,
  useEvent,
  useHooks,
  useHooks_,
  useIf,
  useIf_,
  useInterval,
  useSubscriber,
  useTimeout,
  useUpdate,
  useWhen,
  useWhen_
};
