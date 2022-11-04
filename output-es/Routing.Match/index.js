import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dInt from "../Data.Int/index.js";
import * as Data$dList from "../Data.List/index.js";
import * as Data$dList$dTypes from "../Data.List.Types/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNumber from "../Data.Number/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dSemiring$dFree from "../Data.Semiring.Free/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import * as Data$dUnit from "../Data.Unit/index.js";
import * as Data$dValidation$dSemiring from "../Data.Validation.Semiring/index.js";
import * as Routing$dMatch$dError from "../Routing.Match.Error/index.js";
import * as Routing$dTypes from "../Routing.Types/index.js";
const alt = /* #__PURE__ */ (() => Data$dValidation$dSemiring.altV(Data$dSemiring$dFree.semiringFree).alt)();
const Match = x => x;
const str = route => {
  if (route.tag === "Cons") {
    if (route._1.tag === "Path") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple(route._2, route._1._1)); }
    return Data$dEither.$Either(
      "Left",
      Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedString, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
    );
  }
  return Data$dEither.$Either(
    "Left",
    Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedString, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
  );
};
const runMatch = v => route => {
  const $2 = v(route);
  if ($2.tag === "Left") {
    return Data$dEither.$Either(
      "Left",
      (() => {
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
              go$a0 = v$1._1 + ("\n" + b);
              go$a1 = v$1._2;
              continue;
            }
            $runtime.fail();
          };
          return go$r;
        };
        return go("")(Data$dList$dTypes.bindList.bind(Data$dList$dTypes.listMap(Data$dList.reverse)($2._1))(es => Data$dList$dTypes.$List(
          "Cons",
          (() => {
            const go$1 = go$1$a0$copy => go$1$a1$copy => {
              let go$1$a0 = go$1$a0$copy, go$1$a1 = go$1$a1$copy, go$1$c = true, go$1$r;
              while (go$1$c) {
                const b = go$1$a0, v$1 = go$1$a1;
                if (v$1.tag === "Nil") {
                  go$1$c = false;
                  go$1$r = b;
                  continue;
                }
                if (v$1.tag === "Cons") {
                  go$1$a0 = v$1._1 + (";" + b);
                  go$1$a1 = v$1._2;
                  continue;
                }
                $runtime.fail();
              };
              return go$1$r;
            };
            return go$1("")(Data$dList$dTypes.listMap(Routing$dMatch$dError.showMatchError)(es));
          })(),
          Data$dList$dTypes.Nil
        )));
      })()
    );
  }
  if ($2.tag === "Right") { return Data$dEither.$Either("Right", $2._1._2); }
  $runtime.fail();
};
const params = route => {
  if (route.tag === "Cons") {
    if (route._1.tag === "Query") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple(route._2, route._1._1)); }
    return Data$dEither.$Either(
      "Left",
      Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedQuery, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
    );
  }
  return Data$dEither.$Either(
    "Left",
    Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedQuery, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
  );
};
const param = key => route => {
  if (route.tag === "Cons") {
    if (route._1.tag === "Query") {
      const v = Data$dMap$dInternal.lookup(Data$dOrd.ordString)(key)(route._1._1);
      if (v.tag === "Nothing") {
        return Data$dEither.$Either(
          "Left",
          Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.$MatchError("KeyNotFound", key), Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
        );
      }
      if (v.tag === "Just") {
        const remainingParams = Data$dMap$dInternal.delete(Data$dOrd.ordString)(key)(route._1._1);
        return Data$dEither.$Either(
          "Right",
          (() => {
            if (remainingParams.tag === "Leaf") { return Data$dTuple.$Tuple(route._2, v._1); }
            return Data$dTuple.$Tuple(Data$dList$dTypes.$List("Cons", Routing$dTypes.$RoutePart("Query", remainingParams), route._2), v._1);
          })()
        );
      }
      $runtime.fail();
    }
    return Data$dEither.$Either(
      "Left",
      Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedQuery, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
    );
  }
  return Data$dEither.$Either(
    "Left",
    Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedQuery, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
  );
};
const optionalMatch = v => route => {
  const $2 = v(route);
  if ($2.tag === "Left") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple(route, Data$dMaybe.Nothing)); }
  if ($2.tag === "Right") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple($2._1._1, Data$dMaybe.$Maybe("Just", $2._1._2))); }
  $runtime.fail();
};
const num = route => {
  if (route.tag === "Cons") {
    if (route._1.tag === "Path") {
      const v = Data$dNumber.fromStringImpl(route._1._1, Data$dNumber.isFinite, Data$dMaybe.Just, Data$dMaybe.Nothing);
      if (v.tag === "Just") {
        if (!Data$dNumber.isNaN(v._1)) { return Data$dEither.$Either("Right", Data$dTuple.$Tuple(route._2, v._1)); }
        return Data$dEither.$Either(
          "Left",
          Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedNumber, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
        );
      }
      return Data$dEither.$Either(
        "Left",
        Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedNumber, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
      );
    }
    return Data$dEither.$Either(
      "Left",
      Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedNumber, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
    );
  }
  return Data$dEither.$Either(
    "Left",
    Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedNumber, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
  );
};
const newtypeMatch = {Coercible0: () => undefined};
const matchFunctor = {
  map: fn => v => r => {
    const $3 = v(r);
    if ($3.tag === "Left") { return Data$dEither.$Either("Left", $3._1); }
    if ($3.tag === "Right") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple($3._1._1, fn($3._1._2))); }
    $runtime.fail();
  }
};
const matchApply = {
  apply: v => v1 => r => {
    const $3 = v(r);
    if ($3.tag === "Left") {
      return Data$dEither.$Either(
        "Left",
        Data$dSemiring$dFree.semiringFree.mul($3._1)((() => {
          const $4 = v1(r);
          if ($4.tag === "Left") { return $4._1; }
          if ($4.tag === "Right") { return Data$dList$dTypes.$List("Cons", Data$dList$dTypes.Nil, Data$dList$dTypes.Nil); }
          $runtime.fail();
        })())
      );
    }
    if ($3.tag === "Right") {
      const $4 = v1($3._1._1);
      if ($4.tag === "Left") { return Data$dEither.$Either("Left", $4._1); }
      if ($4.tag === "Right") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple($4._1._1, $3._1._2($4._1._2))); }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Functor0: () => matchFunctor
};
const matchApplicative = {pure: a => r => Data$dEither.$Either("Right", Data$dTuple.$Tuple(r, a)), Apply0: () => matchApply};
const matchAlt = {alt: v => v1 => r => alt(v(r))(v1(r)), Functor0: () => matchFunctor};
const matchPlus = {empty: v => Data$dEither.$Either("Left", Data$dList$dTypes.$List("Cons", Data$dList$dTypes.Nil, Data$dList$dTypes.Nil)), Alt0: () => matchAlt};
const matchAlternative = {Applicative0: () => matchApplicative, Plus1: () => matchPlus};
const lit = input => route => {
  if (route.tag === "Cons") {
    if (route._1.tag === "Path") {
      if (route._1._1 === input) { return Data$dEither.$Either("Right", Data$dTuple.$Tuple(route._2, Data$dUnit.unit)); }
      return Data$dEither.$Either(
        "Left",
        Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.$MatchError("UnexpectedPath", input), Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
      );
    }
    return Data$dEither.$Either(
      "Left",
      Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedPathPart, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
    );
  }
  return Data$dEither.$Either(
    "Left",
    Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedPathPart, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
  );
};
const root = /* #__PURE__ */ lit("");
const list = v => {
  const go = go$a0$copy => go$a1$copy => {
    let go$a0 = go$a0$copy, go$a1 = go$a1$copy, go$c = true, go$r;
    while (go$c) {
      const accum = go$a0, r = go$a1;
      const $4 = Data$dEither.$Either("Right", Data$dTuple.$Tuple(r, Data$dList.reverse(accum)));
      const $5 = v(r);
      if ($5.tag === "Left") {
        go$c = false;
        go$r = $4;
        continue;
      }
      if ($5.tag === "Right") {
        go$a0 = Data$dList$dTypes.$List("Cons", $5._1._2, accum);
        go$a1 = $5._1._1;
        continue;
      }
      $runtime.fail();
    };
    return go$r;
  };
  return go(Data$dList$dTypes.Nil);
};
const $$int = route => {
  if (route.tag === "Cons") {
    if (route._1.tag === "Path") {
      const v = Data$dInt.fromString(route._1._1);
      if (v.tag === "Nothing") {
        return Data$dEither.$Either(
          "Left",
          Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedInt, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
        );
      }
      if (v.tag === "Just") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple(route._2, v._1)); }
      $runtime.fail();
    }
    return Data$dEither.$Either(
      "Left",
      Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedInt, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
    );
  }
  return Data$dEither.$Either(
    "Left",
    Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedInt, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
  );
};
const fail = msg => v => Data$dEither.$Either(
  "Left",
  Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.$MatchError("Fail", msg), Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
);
const end = route => {
  if (route.tag === "Nil") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple(Data$dList$dTypes.Nil, Data$dUnit.unit)); }
  return Data$dEither.$Either(
    "Left",
    Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedEnd, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
  );
};
const eitherMatch = v => r => {
  const $2 = v(r);
  if ($2.tag === "Left") { return Data$dEither.$Either("Left", $2._1); }
  if ($2.tag === "Right") {
    if ($2._1._2.tag === "Left") {
      return Data$dEither.$Either(
        "Left",
        Data$dList$dTypes.$List(
          "Cons",
          Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.$MatchError("Fail", "Nested check failed"), Data$dList$dTypes.Nil),
          Data$dList$dTypes.Nil
        )
      );
    }
    if ($2._1._2.tag === "Right") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple($2._1._1, $2._1._2._1)); }
    $runtime.fail();
  }
  $runtime.fail();
};
const nonempty = /* #__PURE__ */ (() => eitherMatch(matchFunctor.map(x => {
  if (x === "") { return Data$dEither.$Either("Left", "Empty string"); }
  return Data$dEither.$Either("Right", x);
})(str)))();
const bool = route => {
  if (route.tag === "Cons") {
    if (route._1.tag === "Path") {
      if (route._1._1 === "true") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple(route._2, true)); }
      if (route._1._1 === "false") { return Data$dEither.$Either("Right", Data$dTuple.$Tuple(route._2, false)); }
      return Data$dEither.$Either(
        "Left",
        Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedBoolean, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
      );
    }
    return Data$dEither.$Either(
      "Left",
      Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedBoolean, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
    );
  }
  return Data$dEither.$Either(
    "Left",
    Data$dList$dTypes.$List("Cons", Data$dList$dTypes.$List("Cons", Routing$dMatch$dError.ExpectedBoolean, Data$dList$dTypes.Nil), Data$dList$dTypes.Nil)
  );
};
export {
  Match,
  alt,
  bool,
  eitherMatch,
  end,
  fail,
  $$int as int,
  list,
  lit,
  matchAlt,
  matchAlternative,
  matchApplicative,
  matchApply,
  matchFunctor,
  matchPlus,
  newtypeMatch,
  nonempty,
  num,
  optionalMatch,
  param,
  params,
  root,
  runMatch,
  str
};
