import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
const $CORSMode = tag => ({tag});
const Anonymous = /* #__PURE__ */ $CORSMode("Anonymous");
const UseCredentials = /* #__PURE__ */ $CORSMode("UseCredentials");
const showDecodingHint = {
  show: v => {
    if (v.tag === "Anonymous") { return "Anonymous"; }
    if (v.tag === "UseCredentials") { return "UseCredentials"; }
    $runtime.fail();
  }
};
const print = v => {
  if (v.tag === "Anonymous") { return "anonymous"; }
  if (v.tag === "UseCredentials") { return "use-credentials"; }
  $runtime.fail();
};
const parse = v => {
  if (v === "") { return Data$dMaybe.$Maybe("Just", Anonymous); }
  if (v === "anonymous") { return Data$dMaybe.$Maybe("Just", Anonymous); }
  if (v === "use-credentials") { return Data$dMaybe.$Maybe("Just", UseCredentials); }
  return Data$dMaybe.Nothing;
};
const eqCORSMode = {
  eq: x => y => {
    if (x.tag === "Anonymous") { return y.tag === "Anonymous"; }
    if (x.tag === "UseCredentials") { return y.tag === "UseCredentials"; }
    return false;
  }
};
const ordCORSMode = {
  compare: x => y => {
    if (x.tag === "Anonymous") {
      if (y.tag === "Anonymous") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Anonymous") { return Data$dOrdering.GT; }
    if (x.tag === "UseCredentials") {
      if (y.tag === "UseCredentials") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqCORSMode
};
export {$CORSMode, Anonymous, UseCredentials, eqCORSMode, ordCORSMode, parse, print, showDecodingHint};
