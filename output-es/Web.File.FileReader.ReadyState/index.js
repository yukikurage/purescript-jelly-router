import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $ReadyState = tag => ({tag});
const EMPTY = /* #__PURE__ */ $ReadyState("EMPTY");
const LOADING = /* #__PURE__ */ $ReadyState("LOADING");
const DONE = /* #__PURE__ */ $ReadyState("DONE");
const toEnumReadyState = v => {
  if (v === 0) { return Data$dMaybe.$Maybe("Just", EMPTY); }
  if (v === 1) { return Data$dMaybe.$Maybe("Just", LOADING); }
  if (v === 2) { return Data$dMaybe.$Maybe("Just", DONE); }
  return Data$dMaybe.Nothing;
};
const showReadyState = {
  show: v => {
    if (v.tag === "EMPTY") { return "EMPTY"; }
    if (v.tag === "LOADING") { return "LOADING"; }
    if (v.tag === "DONE") { return "DONE"; }
    $runtime.fail();
  }
};
const fromEnumReadyState = v => {
  if (v.tag === "EMPTY") { return 0; }
  if (v.tag === "LOADING") { return 1; }
  if (v.tag === "DONE") { return 2; }
  $runtime.fail();
};
const eqReadyState = {
  eq: x => y => {
    if (x.tag === "EMPTY") { return y.tag === "EMPTY"; }
    if (x.tag === "LOADING") { return y.tag === "LOADING"; }
    if (x.tag === "DONE") { return y.tag === "DONE"; }
    return false;
  }
};
const ordReadyState = {
  compare: x => y => {
    if (x.tag === "EMPTY") {
      if (y.tag === "EMPTY") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "EMPTY") { return Data$dOrdering.GT; }
    if (x.tag === "LOADING") {
      if (y.tag === "LOADING") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "LOADING") { return Data$dOrdering.GT; }
    if (x.tag === "DONE") {
      if (y.tag === "DONE") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqReadyState
};
const enumReadyState = {
  succ: a => toEnumReadyState((() => {
    if (a.tag === "EMPTY") { return 1; }
    if (a.tag === "LOADING") { return 2; }
    if (a.tag === "DONE") { return 3; }
    $runtime.fail();
  })()),
  pred: a => toEnumReadyState((() => {
    if (a.tag === "EMPTY") { return -1; }
    if (a.tag === "LOADING") { return 0; }
    if (a.tag === "DONE") { return 1; }
    $runtime.fail();
  })()),
  Ord0: () => ordReadyState
};
const boundedReadyState = {bottom: EMPTY, top: DONE, Ord0: () => ordReadyState};
const boundedEnumReadyState = {cardinality: 3, toEnum: toEnumReadyState, fromEnum: fromEnumReadyState, Bounded0: () => boundedReadyState, Enum1: () => enumReadyState};
export {
  $ReadyState,
  DONE,
  EMPTY,
  LOADING,
  boundedEnumReadyState,
  boundedReadyState,
  enumReadyState,
  eqReadyState,
  fromEnumReadyState,
  ordReadyState,
  showReadyState,
  toEnumReadyState
};
