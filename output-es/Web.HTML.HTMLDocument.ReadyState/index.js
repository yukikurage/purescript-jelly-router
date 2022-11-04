import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $ReadyState = tag => ({tag});
const Loading = /* #__PURE__ */ $ReadyState("Loading");
const Interactive = /* #__PURE__ */ $ReadyState("Interactive");
const Complete = /* #__PURE__ */ $ReadyState("Complete");
const showReadyState = {
  show: v => {
    if (v.tag === "Loading") { return "Loading"; }
    if (v.tag === "Interactive") { return "Interactive"; }
    if (v.tag === "Complete") { return "Complete"; }
    $runtime.fail();
  }
};
const print = v => {
  if (v.tag === "Loading") { return "loading"; }
  if (v.tag === "Interactive") { return "interactive"; }
  if (v.tag === "Complete") { return "complete"; }
  $runtime.fail();
};
const parse = v => {
  if (v === "loading") { return Data$dMaybe.$Maybe("Just", Loading); }
  if (v === "interactive") { return Data$dMaybe.$Maybe("Just", Interactive); }
  if (v === "complete") { return Data$dMaybe.$Maybe("Just", Complete); }
  return Data$dMaybe.Nothing;
};
const eqReadyState = {
  eq: x => y => {
    if (x.tag === "Loading") { return y.tag === "Loading"; }
    if (x.tag === "Interactive") { return y.tag === "Interactive"; }
    if (x.tag === "Complete") { return y.tag === "Complete"; }
    return false;
  }
};
const ordReadyState = {
  compare: x => y => {
    if (x.tag === "Loading") {
      if (y.tag === "Loading") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Loading") { return Data$dOrdering.GT; }
    if (x.tag === "Interactive") {
      if (y.tag === "Interactive") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Interactive") { return Data$dOrdering.GT; }
    if (x.tag === "Complete") {
      if (y.tag === "Complete") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqReadyState
};
export {$ReadyState, Complete, Interactive, Loading, eqReadyState, ordReadyState, parse, print, showReadyState};
