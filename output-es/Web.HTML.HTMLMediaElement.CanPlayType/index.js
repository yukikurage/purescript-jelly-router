import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $CanPlayType = tag => ({tag});
const Unspecified = /* #__PURE__ */ $CanPlayType("Unspecified");
const Maybe = /* #__PURE__ */ $CanPlayType("Maybe");
const Probably = /* #__PURE__ */ $CanPlayType("Probably");
const showCanPlayType = {
  show: v => {
    if (v.tag === "Unspecified") { return "Unspecified"; }
    if (v.tag === "Maybe") { return "Maybe"; }
    if (v.tag === "Probably") { return "Probably"; }
    $runtime.fail();
  }
};
const print = v => {
  if (v.tag === "Unspecified") { return ""; }
  if (v.tag === "Maybe") { return "maybe"; }
  if (v.tag === "Probably") { return "probably"; }
  $runtime.fail();
};
const parse = v => {
  if (v === "") { return Data$dMaybe.$Maybe("Just", Unspecified); }
  if (v === "maybe") { return Data$dMaybe.$Maybe("Just", Maybe); }
  if (v === "probably") { return Data$dMaybe.$Maybe("Just", Probably); }
  return Data$dMaybe.Nothing;
};
const eqCanPlayType = {
  eq: x => y => {
    if (x.tag === "Unspecified") { return y.tag === "Unspecified"; }
    if (x.tag === "Maybe") { return y.tag === "Maybe"; }
    if (x.tag === "Probably") { return y.tag === "Probably"; }
    return false;
  }
};
const ordCanPlayType = {
  compare: x => y => {
    if (x.tag === "Unspecified") {
      if (y.tag === "Unspecified") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Unspecified") { return Data$dOrdering.GT; }
    if (x.tag === "Maybe") {
      if (y.tag === "Maybe") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Maybe") { return Data$dOrdering.GT; }
    if (x.tag === "Probably") {
      if (y.tag === "Probably") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqCanPlayType
};
export {$CanPlayType, Maybe, Probably, Unspecified, eqCanPlayType, ordCanPlayType, parse, print, showCanPlayType};
