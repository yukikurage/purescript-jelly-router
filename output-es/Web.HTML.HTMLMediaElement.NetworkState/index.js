import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $NetworkState = tag => ({tag});
const Empty = /* #__PURE__ */ $NetworkState("Empty");
const Idle = /* #__PURE__ */ $NetworkState("Idle");
const Loading = /* #__PURE__ */ $NetworkState("Loading");
const NoSource = /* #__PURE__ */ $NetworkState("NoSource");
const toEnumNetworkState = v => {
  if (v === 0) { return Data$dMaybe.$Maybe("Just", Empty); }
  if (v === 1) { return Data$dMaybe.$Maybe("Just", Idle); }
  if (v === 2) { return Data$dMaybe.$Maybe("Just", Loading); }
  if (v === 3) { return Data$dMaybe.$Maybe("Just", NoSource); }
  return Data$dMaybe.Nothing;
};
const showNetworkState = {
  show: v => {
    if (v.tag === "Empty") { return "Empty"; }
    if (v.tag === "Idle") { return "Idle"; }
    if (v.tag === "Loading") { return "Loading"; }
    if (v.tag === "NoSource") { return "NoSource"; }
    $runtime.fail();
  }
};
const fromEnumNetworkState = v => {
  if (v.tag === "Empty") { return 0; }
  if (v.tag === "Idle") { return 1; }
  if (v.tag === "Loading") { return 2; }
  if (v.tag === "NoSource") { return 3; }
  $runtime.fail();
};
const eqNetworkState = {
  eq: x => y => {
    if (x.tag === "Empty") { return y.tag === "Empty"; }
    if (x.tag === "Idle") { return y.tag === "Idle"; }
    if (x.tag === "Loading") { return y.tag === "Loading"; }
    if (x.tag === "NoSource") { return y.tag === "NoSource"; }
    return false;
  }
};
const ordNetworkState = {
  compare: x => y => {
    if (x.tag === "Empty") {
      if (y.tag === "Empty") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Empty") { return Data$dOrdering.GT; }
    if (x.tag === "Idle") {
      if (y.tag === "Idle") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Idle") { return Data$dOrdering.GT; }
    if (x.tag === "Loading") {
      if (y.tag === "Loading") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Loading") { return Data$dOrdering.GT; }
    if (x.tag === "NoSource") {
      if (y.tag === "NoSource") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqNetworkState
};
const enumNetworkState = {
  succ: a => toEnumNetworkState((() => {
    if (a.tag === "Empty") { return 1; }
    if (a.tag === "Idle") { return 2; }
    if (a.tag === "Loading") { return 3; }
    if (a.tag === "NoSource") { return 4; }
    $runtime.fail();
  })()),
  pred: a => toEnumNetworkState((() => {
    if (a.tag === "Empty") { return -1; }
    if (a.tag === "Idle") { return 0; }
    if (a.tag === "Loading") { return 1; }
    if (a.tag === "NoSource") { return 2; }
    $runtime.fail();
  })()),
  Ord0: () => ordNetworkState
};
const boundedNetworkState = {bottom: Empty, top: NoSource, Ord0: () => ordNetworkState};
const boundedEnumNetworkState = {cardinality: 4, toEnum: toEnumNetworkState, fromEnum: fromEnumNetworkState, Bounded0: () => boundedNetworkState, Enum1: () => enumNetworkState};
export {
  $NetworkState,
  Empty,
  Idle,
  Loading,
  NoSource,
  boundedEnumNetworkState,
  boundedNetworkState,
  enumNetworkState,
  eqNetworkState,
  fromEnumNetworkState,
  ordNetworkState,
  showNetworkState,
  toEnumNetworkState
};
