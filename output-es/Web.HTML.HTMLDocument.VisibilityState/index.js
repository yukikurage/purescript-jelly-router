import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $VisibilityState = tag => ({tag});
const Visible = /* #__PURE__ */ $VisibilityState("Visible");
const Hidden = /* #__PURE__ */ $VisibilityState("Hidden");
const showVisibilityState = {
  show: v => {
    if (v.tag === "Visible") { return "Visible"; }
    if (v.tag === "Hidden") { return "Hidden"; }
    $runtime.fail();
  }
};
const print = v => {
  if (v.tag === "Visible") { return "visible"; }
  if (v.tag === "Hidden") { return "hidden"; }
  $runtime.fail();
};
const parse = v => {
  if (v === "visible") { return Data$dMaybe.$Maybe("Just", Visible); }
  if (v === "hidden") { return Data$dMaybe.$Maybe("Just", Hidden); }
  return Data$dMaybe.Nothing;
};
const eqVisibilityState = {
  eq: x => y => {
    if (x.tag === "Visible") { return y.tag === "Visible"; }
    if (x.tag === "Hidden") { return y.tag === "Hidden"; }
    return false;
  }
};
const ordVisibilityState = {
  compare: x => y => {
    if (x.tag === "Visible") {
      if (y.tag === "Visible") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Visible") { return Data$dOrdering.GT; }
    if (x.tag === "Hidden") {
      if (y.tag === "Hidden") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqVisibilityState
};
export {$VisibilityState, Hidden, Visible, eqVisibilityState, ordVisibilityState, parse, print, showVisibilityState};
