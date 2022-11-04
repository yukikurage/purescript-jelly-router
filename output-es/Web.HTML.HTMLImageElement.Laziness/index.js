import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $Laziness = tag => ({tag});
const Eager = /* #__PURE__ */ $Laziness("Eager");
const Lazy = /* #__PURE__ */ $Laziness("Lazy");
const showDecodingHint = {
  show: v => {
    if (v.tag === "Eager") { return "Eager"; }
    if (v.tag === "Lazy") { return "Lazy"; }
    $runtime.fail();
  }
};
const print = v => {
  if (v.tag === "Eager") { return "eager"; }
  if (v.tag === "Lazy") { return "lazy"; }
  $runtime.fail();
};
const parse = v => {
  if (v === "") { return Data$dMaybe.$Maybe("Just", Eager); }
  if (v === "eager") { return Data$dMaybe.$Maybe("Just", Eager); }
  if (v === "lazy") { return Data$dMaybe.$Maybe("Just", Lazy); }
  return Data$dMaybe.Nothing;
};
const eqDecodingHint = {
  eq: x => y => {
    if (x.tag === "Eager") { return y.tag === "Eager"; }
    if (x.tag === "Lazy") { return y.tag === "Lazy"; }
    return false;
  }
};
const ordDecodingHint = {
  compare: x => y => {
    if (x.tag === "Eager") {
      if (y.tag === "Eager") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Eager") { return Data$dOrdering.GT; }
    if (x.tag === "Lazy") {
      if (y.tag === "Lazy") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqDecodingHint
};
export {$Laziness, Eager, Lazy, eqDecodingHint, ordDecodingHint, parse, print, showDecodingHint};
