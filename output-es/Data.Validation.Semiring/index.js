// | This module defines a variant of applicative validation with
// | an `Alt` instance, for validators which support errors
// | with multiple alternatives.
import * as $runtime from "../runtime.js";
import * as Data$dBifunctor from "../Data.Bifunctor/index.js";
import * as Data$dEither from "../Data.Either/index.js";
const V = x => x;
const validation = v => v1 => v2 => {
  if (v2.tag === "Left") { return v(v2._1); }
  if (v2.tag === "Right") { return v1(v2._1); }
  $runtime.fail();
};
const toEither = v => v;
const showV = dictShow => dictShow1 => (
  {
    show: v => {
      if (v.tag === "Left") { return "invalid (" + (dictShow.show(v._1) + ")"); }
      if (v.tag === "Right") { return "pure (" + (dictShow1.show(v._1) + ")"); }
      $runtime.fail();
    }
  }
);
const newtypeV = {Coercible0: () => undefined};
const isValid = v => v.tag === "Right";
const invalid = x => Data$dEither.$Either("Left", x);
const functorV = Data$dEither.functorEither;
const foldableV = {
  foldMap: dictMonoid => v1 => v2 => {
    if (v2.tag === "Left") { return dictMonoid.mempty; }
    if (v2.tag === "Right") { return v1(v2._1); }
    $runtime.fail();
  },
  foldr: f => b => v2 => {
    if (v2.tag === "Left") { return b; }
    if (v2.tag === "Right") { return f(v2._1)(b); }
    $runtime.fail();
  },
  foldl: f => b => {
    const $2 = f(b);
    return v2 => {
      if (v2.tag === "Left") { return b; }
      if (v2.tag === "Right") { return $2(v2._1); }
      $runtime.fail();
    };
  }
};
const traversableV = {
  sequence: dictApplicative => {
    const $1 = dictApplicative.Apply0().Functor0().map(x => Data$dEither.$Either("Right", x));
    return v2 => {
      if (v2.tag === "Left") { return dictApplicative.pure(Data$dEither.$Either("Left", v2._1)); }
      if (v2.tag === "Right") { return $1(v2._1); }
      $runtime.fail();
    };
  },
  traverse: dictApplicative => {
    const map = dictApplicative.Apply0().Functor0().map;
    return f => {
      const $3 = map(x => Data$dEither.$Either("Right", x));
      return v2 => {
        if (v2.tag === "Left") { return dictApplicative.pure(Data$dEither.$Either("Left", v2._1)); }
        if (v2.tag === "Right") { return $3(f(v2._1)); }
        $runtime.fail();
      };
    };
  },
  Functor0: () => Data$dEither.functorEither,
  Foldable1: () => foldableV
};
const eqV = dictEq => dictEq1 => (
  {
    eq: x => y => {
      if (x.tag === "Left") {
        if (y.tag === "Left") { return dictEq.eq(x._1)(y._1); }
        return false;
      }
      if (x.tag === "Right") {
        if (y.tag === "Right") { return dictEq1.eq(x._1)(y._1); }
        return false;
      }
      return false;
    }
  }
);
const ordV = dictOrd => {
  const ordEither = Data$dEither.ordEither(dictOrd);
  const $2 = dictOrd.Eq0();
  return dictOrd1 => {
    const compare = ordEither(dictOrd1).compare;
    const $5 = dictOrd1.Eq0();
    const eqV2 = {
      eq: x => y => {
        if (x.tag === "Left") {
          if (y.tag === "Left") { return $2.eq(x._1)(y._1); }
          return false;
        }
        if (x.tag === "Right") {
          if (y.tag === "Right") { return $5.eq(x._1)(y._1); }
          return false;
        }
        return false;
      }
    };
    return {compare: x => y => compare(x)(y), Eq0: () => eqV2};
  };
};
const eq1V = dictEq => (
  {
    eq1: dictEq1 => x => y => {
      if (x.tag === "Left") {
        if (y.tag === "Left") { return dictEq.eq(x._1)(y._1); }
        return false;
      }
      if (x.tag === "Right") {
        if (y.tag === "Right") { return dictEq1.eq(x._1)(y._1); }
        return false;
      }
      return false;
    }
  }
);
const ord1V = dictOrd => {
  const ordV1 = ordV(dictOrd);
  const $2 = dictOrd.Eq0();
  const eq1V1 = {
    eq1: dictEq1 => x => y => {
      if (x.tag === "Left") {
        if (y.tag === "Left") { return $2.eq(x._1)(y._1); }
        return false;
      }
      if (x.tag === "Right") {
        if (y.tag === "Right") { return dictEq1.eq(x._1)(y._1); }
        return false;
      }
      return false;
    }
  };
  return {compare1: dictOrd1 => ordV1(dictOrd1).compare, Eq10: () => eq1V1};
};
const bifunctorV = Data$dBifunctor.bifunctorEither;
const applyV = dictSemiring => (
  {
    apply: v => v1 => {
      if (v.tag === "Left") {
        if (v1.tag === "Left") { return Data$dEither.$Either("Left", dictSemiring.mul(v._1)(v1._1)); }
        return Data$dEither.$Either("Left", v._1);
      }
      if (v1.tag === "Left") { return Data$dEither.$Either("Left", v1._1); }
      if (v.tag === "Right") {
        if (v1.tag === "Right") { return Data$dEither.$Either("Right", v._1(v1._1)); }
        $runtime.fail();
      }
      $runtime.fail();
    },
    Functor0: () => Data$dEither.functorEither
  }
);
const semigroupV = dictSemiring => {
  const $1 = applyV(dictSemiring);
  const map = $1.Functor0().map;
  return dictSemigroup => ({append: a => b => $1.apply(map(dictSemigroup.append)(a))(b)});
};
const applicativeV = dictSemiring => {
  const applyV1 = applyV(dictSemiring);
  return {pure: x => Data$dEither.$Either("Right", x), Apply0: () => applyV1};
};
const monoidV = dictSemiring => {
  const semigroupV1 = semigroupV(dictSemiring);
  return dictMonoid => {
    const semigroupV2 = semigroupV1(dictMonoid.Semigroup0());
    return {mempty: Data$dEither.$Either("Right", dictMonoid.mempty), Semigroup0: () => semigroupV2};
  };
};
const andThen = v1 => f => {
  if (v1.tag === "Left") { return Data$dEither.$Either("Left", v1._1); }
  if (v1.tag === "Right") { return f(v1._1); }
  $runtime.fail();
};
const altV = dictSemiring => (
  {
    alt: v => v1 => {
      if (v.tag === "Left") {
        if (v1.tag === "Left") { return Data$dEither.$Either("Left", dictSemiring.add(v._1)(v1._1)); }
        return v1;
      }
      if (v.tag === "Right") { return Data$dEither.$Either("Right", v._1); }
      $runtime.fail();
    },
    Functor0: () => Data$dEither.functorEither
  }
);
const plusV = dictSemiring => {
  const altV1 = altV(dictSemiring);
  return {empty: Data$dEither.$Either("Left", dictSemiring.zero), Alt0: () => altV1};
};
export {
  V,
  altV,
  andThen,
  applicativeV,
  applyV,
  bifunctorV,
  eq1V,
  eqV,
  foldableV,
  functorV,
  invalid,
  isValid,
  monoidV,
  newtypeV,
  ord1V,
  ordV,
  plusV,
  semigroupV,
  showV,
  toEither,
  traversableV,
  validation
};
