import * as $runtime from "../runtime.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnit from "../Data.Unit/index.js";
import {modifyChannelImpl, newChannelImpl, readChannel, subscribeChannel} from "./foreign.js";
const identity = x => x;
const functorSignal = {
  map: f => v => (
    {
      run: cb => v.run(x => cb(f(x))),
      get: () => {
        const a$p = v.get();
        return f(a$p);
      }
    }
  )
};
const applySignal = {
  apply: v => v1 => (
    {
      run: cb => v.run(f => v1.run(x => cb(f(x)))),
      get: () => {
        const f$p = v.get();
        const a$p = v1.get();
        return f$p(a$p);
      }
    }
  ),
  Functor0: () => functorSignal
};
const bindSignal = {
  bind: v => f => (
    {
      run: cb => v.run(a => f(a).run(cb)),
      get: () => {
        const a = v.get();
        return f(a).get();
      }
    }
  ),
  Apply0: () => applySignal
};
const semigroupSignal = dictSemigroup => (
  {
    append: a => b => (
      {
        run: cb => a.run(x => {
          const $5 = dictSemigroup.append(x);
          return b.run(x$1 => cb($5(x$1)));
        }),
        get: () => {
          const a$p = a.get();
          const a$p$1 = b.get();
          return dictSemigroup.append(a$p)(a$p$1);
        }
      }
    )
  }
);
const applicativeSignal = {pure: a => ({run: cb => cb(a), get: () => a}), Apply0: () => applySignal};
const monadSignal = {Applicative0: () => applicativeSignal, Bind1: () => bindSignal};
const monoidSignal = dictMonoid => {
  const $1 = dictMonoid.Semigroup0();
  const semigroupSignal1 = {
    append: a => b => (
      {
        run: cb => a.run(x => {
          const $6 = $1.append(x);
          return b.run(x$1 => cb($6(x$1)));
        }),
        get: () => {
          const a$p = a.get();
          const a$p$1 = b.get();
          return $1.append(a$p)(a$p$1);
        }
      }
    )
  };
  return {mempty: {run: cb => cb(dictMonoid.mempty), get: () => dictMonoid.mempty}, Semigroup0: () => semigroupSignal1};
};
const subscribe = chn => ({run: subscribeChannel(chn), get: readChannel(chn)});
const runSignal = dictMonadEffect => v => dictMonadEffect.liftEffect(v.run(identity));
const watchSignal = dictMonadEffect => {
  const bind1 = dictMonadEffect.Monad0().Bind1().bind;
  return sig => bind1(dictMonadEffect.liftEffect(() => ({value: true})))(isInit => dictMonadEffect.liftEffect(sig.run(x => () => {
    const init = isInit.value;
    if (init) {
      isInit.value = false;
      return () => Data$dUnit.unit;
    }
    return x();
  })));
};
const readSignal = dictMonadEffect => v => dictMonadEffect.liftEffect(v.get);
const newChannel = dictMonadEffect => x => dictMonadEffect.liftEffect(newChannelImpl(x));
const newState = dictMonadEffect => {
  const Monad0 = dictMonadEffect.Monad0();
  const bind1 = Monad0.Bind1().bind;
  const pure2 = Monad0.Applicative0().pure;
  return a => bind1(dictMonadEffect.liftEffect(newChannelImpl(a)))(chn => pure2(Data$dTuple.$Tuple({run: subscribeChannel(chn), get: readChannel(chn)}, chn)));
};
const modifyChannel = dictMonadEffect => c => f => dictMonadEffect.liftEffect(modifyChannelImpl(c)(f));
const writeChannel = dictMonadEffect => c => a => dictMonadEffect.liftEffect(modifyChannelImpl(c)(v => a));
const memoSignal = dictMonadEffect => {
  const Monad0 = dictMonadEffect.Monad0();
  const bind1 = Monad0.Bind1().bind;
  const pure2 = Monad0.Applicative0().pure;
  return sig => bind1(dictMonadEffect.liftEffect(newChannelImpl(Data$dUnit.unit)))(chn => bind1(dictMonadEffect.liftEffect(sig.run(x => () => {
    const v = x();
    modifyChannelImpl(chn)(v$1 => v._1)();
    return v._2;
  })))(cln => pure2(Data$dTuple.$Tuple({run: subscribeChannel(chn), get: readChannel(chn)}, cln))));
};
export {
  applicativeSignal,
  applySignal,
  bindSignal,
  functorSignal,
  identity,
  memoSignal,
  modifyChannel,
  monadSignal,
  monoidSignal,
  newChannel,
  newState,
  readSignal,
  runSignal,
  semigroupSignal,
  subscribe,
  watchSignal,
  writeChannel
};
export * from "./foreign.js";
