import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $SelectionMode = tag => ({tag});
const Preserve = /* #__PURE__ */ $SelectionMode("Preserve");
const Select = /* #__PURE__ */ $SelectionMode("Select");
const Start = /* #__PURE__ */ $SelectionMode("Start");
const End = /* #__PURE__ */ $SelectionMode("End");
const showSelectionMode = {
  show: v => {
    if (v.tag === "Preserve") { return "Preserve"; }
    if (v.tag === "Select") { return "Select"; }
    if (v.tag === "Start") { return "Start"; }
    if (v.tag === "End") { return "End"; }
    $runtime.fail();
  }
};
const print = v => {
  if (v.tag === "Preserve") { return "preserve"; }
  if (v.tag === "Select") { return "select"; }
  if (v.tag === "Start") { return "start"; }
  if (v.tag === "End") { return "end"; }
  $runtime.fail();
};
const parse = v => {
  if (v === "preserve") { return Data$dMaybe.$Maybe("Just", Preserve); }
  if (v === "select") { return Data$dMaybe.$Maybe("Just", Select); }
  if (v === "start") { return Data$dMaybe.$Maybe("Just", Start); }
  if (v === "end") { return Data$dMaybe.$Maybe("Just", End); }
  return Data$dMaybe.Nothing;
};
const eqSelectionMode = {
  eq: x => y => {
    if (x.tag === "Preserve") { return y.tag === "Preserve"; }
    if (x.tag === "Select") { return y.tag === "Select"; }
    if (x.tag === "Start") { return y.tag === "Start"; }
    if (x.tag === "End") { return y.tag === "End"; }
    return false;
  }
};
const ordSelectionMode = {
  compare: x => y => {
    if (x.tag === "Preserve") {
      if (y.tag === "Preserve") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Preserve") { return Data$dOrdering.GT; }
    if (x.tag === "Select") {
      if (y.tag === "Select") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Select") { return Data$dOrdering.GT; }
    if (x.tag === "Start") {
      if (y.tag === "Start") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Start") { return Data$dOrdering.GT; }
    if (x.tag === "End") {
      if (y.tag === "End") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqSelectionMode
};
export {$SelectionMode, End, Preserve, Select, Start, eqSelectionMode, ordSelectionMode, parse, print, showSelectionMode};
