import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $ReadyState = tag => ({tag});
const None = /* #__PURE__ */ $ReadyState("None");
const Loading = /* #__PURE__ */ $ReadyState("Loading");
const Loaded = /* #__PURE__ */ $ReadyState("Loaded");
const $$Error = /* #__PURE__ */ $ReadyState("Error");
const toEnumReadyState = v => {
  if (v === 0) { return Data$dMaybe.$Maybe("Just", None); }
  if (v === 1) { return Data$dMaybe.$Maybe("Just", Loading); }
  if (v === 2) { return Data$dMaybe.$Maybe("Just", Loaded); }
  if (v === 3) { return Data$dMaybe.$Maybe("Just", $$Error); }
  return Data$dMaybe.Nothing;
};
const showReadyState = {
  show: v => {
    if (v.tag === "None") { return "None"; }
    if (v.tag === "Loading") { return "Loading"; }
    if (v.tag === "Loaded") { return "Loaded"; }
    if (v.tag === "Error") { return "Error"; }
    $runtime.fail();
  }
};
const fromEnumReadyState = v => {
  if (v.tag === "None") { return 0; }
  if (v.tag === "Loading") { return 1; }
  if (v.tag === "Loaded") { return 2; }
  if (v.tag === "Error") { return 3; }
  $runtime.fail();
};
const eqReadyState = {
  eq: x => y => {
    if (x.tag === "None") { return y.tag === "None"; }
    if (x.tag === "Loading") { return y.tag === "Loading"; }
    if (x.tag === "Loaded") { return y.tag === "Loaded"; }
    if (x.tag === "Error") { return y.tag === "Error"; }
    return false;
  }
};
const ordReadyState = {
  compare: x => y => {
    if (x.tag === "None") {
      if (y.tag === "None") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "None") { return Data$dOrdering.GT; }
    if (x.tag === "Loading") {
      if (y.tag === "Loading") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Loading") { return Data$dOrdering.GT; }
    if (x.tag === "Loaded") {
      if (y.tag === "Loaded") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Loaded") { return Data$dOrdering.GT; }
    if (x.tag === "Error") {
      if (y.tag === "Error") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqReadyState
};
const enumReadyState = {
  succ: a => toEnumReadyState((() => {
    if (a.tag === "None") { return 1; }
    if (a.tag === "Loading") { return 2; }
    if (a.tag === "Loaded") { return 3; }
    if (a.tag === "Error") { return 4; }
    $runtime.fail();
  })()),
  pred: a => toEnumReadyState((() => {
    if (a.tag === "None") { return -1; }
    if (a.tag === "Loading") { return 0; }
    if (a.tag === "Loaded") { return 1; }
    if (a.tag === "Error") { return 2; }
    $runtime.fail();
  })()),
  Ord0: () => ordReadyState
};
const boundedReadyState = {bottom: None, top: $$Error, Ord0: () => ordReadyState};
const boundedEnumReadyState = {cardinality: 4, toEnum: toEnumReadyState, fromEnum: fromEnumReadyState, Bounded0: () => boundedReadyState, Enum1: () => enumReadyState};
export {
  $ReadyState,
  $$Error as Error,
  Loaded,
  Loading,
  None,
  boundedEnumReadyState,
  boundedReadyState,
  enumReadyState,
  eqReadyState,
  fromEnumReadyState,
  ordReadyState,
  showReadyState,
  toEnumReadyState
};
