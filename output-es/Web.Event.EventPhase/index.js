import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $EventPhase = tag => ({tag});
const None = /* #__PURE__ */ $EventPhase("None");
const Capturing = /* #__PURE__ */ $EventPhase("Capturing");
const AtTarget = /* #__PURE__ */ $EventPhase("AtTarget");
const Bubbling = /* #__PURE__ */ $EventPhase("Bubbling");
const toEnumEventPhase = v => {
  if (v === 0) { return Data$dMaybe.$Maybe("Just", None); }
  if (v === 1) { return Data$dMaybe.$Maybe("Just", Capturing); }
  if (v === 2) { return Data$dMaybe.$Maybe("Just", AtTarget); }
  if (v === 3) { return Data$dMaybe.$Maybe("Just", Bubbling); }
  return Data$dMaybe.Nothing;
};
const fromEnumEventPhase = v => {
  if (v.tag === "None") { return 0; }
  if (v.tag === "Capturing") { return 1; }
  if (v.tag === "AtTarget") { return 2; }
  if (v.tag === "Bubbling") { return 3; }
  $runtime.fail();
};
const eqEventPhase = {
  eq: x => y => {
    if (x.tag === "None") { return y.tag === "None"; }
    if (x.tag === "Capturing") { return y.tag === "Capturing"; }
    if (x.tag === "AtTarget") { return y.tag === "AtTarget"; }
    if (x.tag === "Bubbling") { return y.tag === "Bubbling"; }
    return false;
  }
};
const ordEventPhase = {
  compare: x => y => {
    if (x.tag === "None") {
      if (y.tag === "None") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "None") { return Data$dOrdering.GT; }
    if (x.tag === "Capturing") {
      if (y.tag === "Capturing") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Capturing") { return Data$dOrdering.GT; }
    if (x.tag === "AtTarget") {
      if (y.tag === "AtTarget") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "AtTarget") { return Data$dOrdering.GT; }
    if (x.tag === "Bubbling") {
      if (y.tag === "Bubbling") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqEventPhase
};
const enumEventPhase = {
  succ: a => toEnumEventPhase((() => {
    if (a.tag === "None") { return 1; }
    if (a.tag === "Capturing") { return 2; }
    if (a.tag === "AtTarget") { return 3; }
    if (a.tag === "Bubbling") { return 4; }
    $runtime.fail();
  })()),
  pred: a => toEnumEventPhase((() => {
    if (a.tag === "None") { return -1; }
    if (a.tag === "Capturing") { return 0; }
    if (a.tag === "AtTarget") { return 1; }
    if (a.tag === "Bubbling") { return 2; }
    $runtime.fail();
  })()),
  Ord0: () => ordEventPhase
};
const boundedEventPhase = {bottom: None, top: Bubbling, Ord0: () => ordEventPhase};
const boundedEnumEventPhase = {cardinality: 4, toEnum: toEnumEventPhase, fromEnum: fromEnumEventPhase, Bounded0: () => boundedEventPhase, Enum1: () => enumEventPhase};
export {
  $EventPhase,
  AtTarget,
  Bubbling,
  Capturing,
  None,
  boundedEnumEventPhase,
  boundedEventPhase,
  enumEventPhase,
  eqEventPhase,
  fromEnumEventPhase,
  ordEventPhase,
  toEnumEventPhase
};
