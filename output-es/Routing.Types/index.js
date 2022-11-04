import * as $runtime from "../runtime.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $RoutePart = (tag, _1) => ({tag, _1});
const eq1 = /* #__PURE__ */ (() => Data$dMap$dInternal.eqMap(Data$dEq.eqString)(Data$dEq.eqString).eq)();
const compare1 = /* #__PURE__ */ (() => Data$dMap$dInternal.ordMap(Data$dOrd.ordString)(Data$dOrd.ordString).compare)();
const Path = value0 => $RoutePart("Path", value0);
const Query = value0 => $RoutePart("Query", value0);
const eqRoutePart = {
  eq: x => y => {
    if (x.tag === "Path") {
      if (y.tag === "Path") { return x._1 === y._1; }
      return false;
    }
    if (x.tag === "Query") {
      if (y.tag === "Query") { return eq1(x._1)(y._1); }
      return false;
    }
    return false;
  }
};
const ordRoutePart = {
  compare: x => y => {
    if (x.tag === "Path") {
      if (y.tag === "Path") { return Data$dOrd.ordString.compare(x._1)(y._1); }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Path") { return Data$dOrdering.GT; }
    if (x.tag === "Query") {
      if (y.tag === "Query") { return compare1(x._1)(y._1); }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqRoutePart
};
export {$RoutePart, Path, Query, compare1, eq1, eqRoutePart, ordRoutePart};
