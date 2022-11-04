import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $DecodingHint = tag => ({tag});
const Sync = /* #__PURE__ */ $DecodingHint("Sync");
const Async = /* #__PURE__ */ $DecodingHint("Async");
const Auto = /* #__PURE__ */ $DecodingHint("Auto");
const showDecodingHint = {
  show: v => {
    if (v.tag === "Sync") { return "Sync"; }
    if (v.tag === "Async") { return "Async"; }
    if (v.tag === "Auto") { return "Auto"; }
    $runtime.fail();
  }
};
const print = v => {
  if (v.tag === "Sync") { return "sync"; }
  if (v.tag === "Async") { return "async"; }
  if (v.tag === "Auto") { return "auto"; }
  $runtime.fail();
};
const parse = v => {
  if (v === "") { return Data$dMaybe.$Maybe("Just", Auto); }
  if (v === "sync") { return Data$dMaybe.$Maybe("Just", Sync); }
  if (v === "async") { return Data$dMaybe.$Maybe("Just", Async); }
  if (v === "auto") { return Data$dMaybe.$Maybe("Just", Auto); }
  return Data$dMaybe.Nothing;
};
const eqDecodingHint = {
  eq: x => y => {
    if (x.tag === "Sync") { return y.tag === "Sync"; }
    if (x.tag === "Async") { return y.tag === "Async"; }
    if (x.tag === "Auto") { return y.tag === "Auto"; }
    return false;
  }
};
const ordDecodingHint = {
  compare: x => y => {
    if (x.tag === "Sync") {
      if (y.tag === "Sync") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Sync") { return Data$dOrdering.GT; }
    if (x.tag === "Async") {
      if (y.tag === "Async") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Async") { return Data$dOrdering.GT; }
    if (x.tag === "Auto") {
      if (y.tag === "Auto") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqDecodingHint
};
export {$DecodingHint, Async, Auto, Sync, eqDecodingHint, ordDecodingHint, parse, print, showDecodingHint};
