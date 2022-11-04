import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
const foldMap = /* #__PURE__ */ (() => Data$dList$dTypes.foldableList.foldMap(Data$dList$dTypes.monoidList))();
const Free = x => x;
const showFree = dictShow => {
  const show = Data$dList$dTypes.showList(Data$dList$dTypes.showList(dictShow)).show;
  return {show: v => "(Free " + (show(v) + ")")};
};
const semiringFree = {
  add: v => v1 => Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(v1)(v),
  zero: Data$dList$dTypes.Nil,
  mul: v => v1 => Data$dList$dTypes.bindList.bind(v)(xs => Data$dList$dTypes.bindList.bind(v1)(ys => Data$dList$dTypes.$List(
    "Cons",
    Data$dList$dTypes.foldableList.foldr(Data$dList$dTypes.Cons)(ys)(xs),
    Data$dList$dTypes.Nil
  ))),
  one: /* #__PURE__ */ Data$dList$dTypes.$List("Cons", Data$dList$dTypes.Nil, Data$dList$dTypes.Nil)
};
const newtypeFree = {Coercible0: () => undefined};
const liftFree = dictSemiring => {
  const sum1 = (() => {
    const go = go$a0$copy => go$a1$copy => {
      let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
      while (go$c) {
        const b = go$a0, v = go$a1;
        if (v.tag === "Nil") {
          go$c = false;
          go$r = b;
          continue;
        }
        if (v.tag === "Cons") {
          go$a0 = dictSemiring.add(b)(v._1);
          go$a1 = v._2;
          continue;
        }
        $runtime.fail();
      };
      return go$r;
    };
    return go(dictSemiring.zero);
  })();
  const product1 = (() => {
    const go = go$a0$copy => go$a1$copy => {
      let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
      while (go$c) {
        const b = go$a0, v = go$a1;
        if (v.tag === "Nil") {
          go$c = false;
          go$r = b;
          continue;
        }
        if (v.tag === "Cons") {
          go$a0 = dictSemiring.mul(b)(v._1);
          go$a1 = v._2;
          continue;
        }
        $runtime.fail();
      };
      return go$r;
    };
    return go(dictSemiring.one);
  })();
  return f => v => sum1(Data$dList$dTypes.listMap((() => {
    const $5 = Data$dList$dTypes.listMap(f);
    return x => product1($5(x));
  })())(v));
};
const functorFree = {map: fn => v => Data$dList$dTypes.listMap(Data$dList$dTypes.listMap(fn))(v)};
const free = a => Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", a, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil);
const lowerFree = dictSemiring => f => a => f(Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", a, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil));
const foldableFree = {
  foldl: fn => accum => v => {
    const $3 = (() => {
      const go = go$a0$copy => go$a1$copy => {
        let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
        while (go$c) {
          const b = go$a0, v$1 = go$a1;
          if (v$1.tag === "Nil") {
            go$c = false;
            go$r = b;
            continue;
          }
          if (v$1.tag === "Cons") {
            go$a0 = fn(b)(v$1._1);
            go$a1 = v$1._2;
            continue;
          }
          $runtime.fail();
        };
        return go$r;
      };
      return go;
    })();
    const go = go$a0$copy => go$a1$copy => {
      let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
      while (go$c) {
        const b = go$a0, v$1 = go$a1;
        if (v$1.tag === "Nil") {
          go$c = false;
          go$r = b;
          continue;
        }
        if (v$1.tag === "Cons") {
          go$a0 = $3(b)(v$1._1);
          go$a1 = v$1._2;
          continue;
        }
        $runtime.fail();
      };
      return go$r;
    };
    return go(accum)(v);
  },
  foldr: fn => accum => v => Data$dList$dTypes.foldableList.foldr(b => a => Data$dList$dTypes.foldableList.foldr(fn)(a)(b))(accum)(v),
  foldMap: dictMonoid => {
    const fold1 = Data$dList$dTypes.foldableList.foldMap(dictMonoid)(Data$dFoldable.identity);
    return fn => v => fold1(foldMap(Data$dList$dTypes.listMap(fn))(v));
  }
};
const traversableFree = {
  sequence: dictApplicative => {
    const map2 = dictApplicative.Apply0().Functor0().map;
    const sequence1 = Data$dList$dTypes.traversableList.traverse(dictApplicative)(Data$dList$dTypes.identity);
    return v => map2(Free)(sequence1(Data$dList$dTypes.listMap(sequence1)(v)));
  },
  traverse: dictApplicative => fn => freeA => traversableFree.sequence(dictApplicative)(Data$dList$dTypes.listMap(Data$dList$dTypes.listMap(fn))(freeA)),
  Functor0: () => functorFree,
  Foldable1: () => foldableFree
};
const eqFree = dictEq => (
  {
    eq: v => v1 => {
      const go = go$a0$copy => go$a1$copy => go$a2$copy => {
        let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$a2 = go$a2$copy, go$c = true, go$r;
        while (go$c) {
          const v$1 = go$a0, v1$1 = go$a1, v2 = go$a2;
          if (!v2) {
            go$c = false;
            go$r = false;
            continue;
          }
          if (v$1.tag === "Nil") {
            if (v1$1.tag === "Nil") {
              go$c = false;
              go$r = v2;
              continue;
            }
            go$c = false;
            go$r = false;
            continue;
          }
          if (v$1.tag === "Cons") {
            if (v1$1.tag === "Cons") {
              go$a0 = v$1._2;
              go$a1 = v1$1._2;
              go$a2 = v2 && (() => {
                const go$1 = go$1$a0$copy => go$1$a1$copy => go$1$a2$copy => {
                  let go$1$a0 = go$1$a0$copy, go$1$a1 = go$1$a1$copy, go$1$a2 = go$1$a2$copy, go$1$c = true, go$1$r;
                  while (go$1$c) {
                    const v$2 = go$1$a0, v1$2 = go$1$a1, v2$1 = go$1$a2;
                    if (!v2$1) {
                      go$1$c = false;
                      go$1$r = false;
                      continue;
                    }
                    if (v$2.tag === "Nil") {
                      if (v1$2.tag === "Nil") {
                        go$1$c = false;
                        go$1$r = v2$1;
                        continue;
                      }
                      go$1$c = false;
                      go$1$r = false;
                      continue;
                    }
                    if (v$2.tag === "Cons") {
                      if (v1$2.tag === "Cons") {
                        go$1$a0 = v$2._2;
                        go$1$a1 = v1$2._2;
                        go$1$a2 = v2$1 && dictEq.eq(v1$2._1)(v$2._1);
                        continue;
                      }
                      go$1$c = false;
                      go$1$r = false;
                      continue;
                    }
                    go$1$c = false;
                    go$1$r = false;
                    continue;
                  };
                  return go$1$r;
                };
                return go$1(v1$1._1)(v$1._1)(true);
              })();
              continue;
            }
            go$c = false;
            go$r = false;
            continue;
          }
          go$c = false;
          go$r = false;
          continue;
        };
        return go$r;
      };
      return go(v)(v1)(true);
    }
  }
);
const ordFree = dictOrd => {
  const compare = Data$dList$dTypes.ordList(Data$dList$dTypes.ordList(dictOrd)).compare;
  const eqFree1 = eqFree(dictOrd.Eq0());
  return {compare: v => v1 => compare(v)(v1), Eq0: () => eqFree1};
};
const applyFree = {
  apply: v => v1 => Data$dList$dTypes.bindList.bind(v)(fns => Data$dList$dTypes.bindList.bind(v1)(xs => Data$dList$dTypes.$List(
    "Cons",
    Data$dList$dTypes.applyList.apply(fns)(xs),
    Data$dList$dTypes.Nil
  ))),
  Functor0: () => functorFree
};
const applicativeFree = {pure: free, Apply0: () => applyFree};
export {Free, applicativeFree, applyFree, eqFree, foldMap, foldableFree, free, functorFree, liftFree, lowerFree, newtypeFree, ordFree, semiringFree, showFree, traversableFree};
