import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $ReadyState = tag => ({tag});
const HaveNothing = /* #__PURE__ */ $ReadyState("HaveNothing");
const HaveMetadata = /* #__PURE__ */ $ReadyState("HaveMetadata");
const HaveCurrentData = /* #__PURE__ */ $ReadyState("HaveCurrentData");
const HaveFutureData = /* #__PURE__ */ $ReadyState("HaveFutureData");
const HaveEnoughData = /* #__PURE__ */ $ReadyState("HaveEnoughData");
const toEnumReadyState = v => {
  if (v === 0) { return Data$dMaybe.$Maybe("Just", HaveNothing); }
  if (v === 1) { return Data$dMaybe.$Maybe("Just", HaveMetadata); }
  if (v === 2) { return Data$dMaybe.$Maybe("Just", HaveCurrentData); }
  if (v === 3) { return Data$dMaybe.$Maybe("Just", HaveFutureData); }
  if (v === 4) { return Data$dMaybe.$Maybe("Just", HaveEnoughData); }
  return Data$dMaybe.Nothing;
};
const showReadyState = {
  show: v => {
    if (v.tag === "HaveNothing") { return "HaveNothing"; }
    if (v.tag === "HaveMetadata") { return "HaveMetadata"; }
    if (v.tag === "HaveCurrentData") { return "HaveCurrentData"; }
    if (v.tag === "HaveFutureData") { return "HaveFutureData"; }
    if (v.tag === "HaveEnoughData") { return "HaveEnoughData"; }
    $runtime.fail();
  }
};
const fromEnumReadyState = v => {
  if (v.tag === "HaveNothing") { return 0; }
  if (v.tag === "HaveMetadata") { return 1; }
  if (v.tag === "HaveCurrentData") { return 2; }
  if (v.tag === "HaveFutureData") { return 3; }
  if (v.tag === "HaveEnoughData") { return 4; }
  $runtime.fail();
};
const eqReadyState = {
  eq: x => y => {
    if (x.tag === "HaveNothing") { return y.tag === "HaveNothing"; }
    if (x.tag === "HaveMetadata") { return y.tag === "HaveMetadata"; }
    if (x.tag === "HaveCurrentData") { return y.tag === "HaveCurrentData"; }
    if (x.tag === "HaveFutureData") { return y.tag === "HaveFutureData"; }
    if (x.tag === "HaveEnoughData") { return y.tag === "HaveEnoughData"; }
    return false;
  }
};
const ordReadyState = {
  compare: x => y => {
    if (x.tag === "HaveNothing") {
      if (y.tag === "HaveNothing") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "HaveNothing") { return Data$dOrdering.GT; }
    if (x.tag === "HaveMetadata") {
      if (y.tag === "HaveMetadata") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "HaveMetadata") { return Data$dOrdering.GT; }
    if (x.tag === "HaveCurrentData") {
      if (y.tag === "HaveCurrentData") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "HaveCurrentData") { return Data$dOrdering.GT; }
    if (x.tag === "HaveFutureData") {
      if (y.tag === "HaveFutureData") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "HaveFutureData") { return Data$dOrdering.GT; }
    if (x.tag === "HaveEnoughData") {
      if (y.tag === "HaveEnoughData") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqReadyState
};
const enumReadyState = {
  succ: a => toEnumReadyState((() => {
    if (a.tag === "HaveNothing") { return 1; }
    if (a.tag === "HaveMetadata") { return 2; }
    if (a.tag === "HaveCurrentData") { return 3; }
    if (a.tag === "HaveFutureData") { return 4; }
    if (a.tag === "HaveEnoughData") { return 5; }
    $runtime.fail();
  })()),
  pred: a => toEnumReadyState((() => {
    if (a.tag === "HaveNothing") { return -1; }
    if (a.tag === "HaveMetadata") { return 0; }
    if (a.tag === "HaveCurrentData") { return 1; }
    if (a.tag === "HaveFutureData") { return 2; }
    if (a.tag === "HaveEnoughData") { return 3; }
    $runtime.fail();
  })()),
  Ord0: () => ordReadyState
};
const boundedReadyState = {bottom: HaveNothing, top: HaveEnoughData, Ord0: () => ordReadyState};
const boundedEnumReadyState = {cardinality: 5, toEnum: toEnumReadyState, fromEnum: fromEnumReadyState, Bounded0: () => boundedReadyState, Enum1: () => enumReadyState};
export {
  $ReadyState,
  HaveCurrentData,
  HaveEnoughData,
  HaveFutureData,
  HaveMetadata,
  HaveNothing,
  boundedEnumReadyState,
  boundedReadyState,
  enumReadyState,
  eqReadyState,
  fromEnumReadyState,
  ordReadyState,
  showReadyState,
  toEnumReadyState
};
