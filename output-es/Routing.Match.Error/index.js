import * as $runtime from "../runtime.js";
const $MatchError = (tag, _1) => ({tag, _1});
const UnexpectedPath = value0 => $MatchError("UnexpectedPath", value0);
const ExpectedBoolean = /* #__PURE__ */ $MatchError("ExpectedBoolean");
const ExpectedEnd = /* #__PURE__ */ $MatchError("ExpectedEnd");
const ExpectedNumber = /* #__PURE__ */ $MatchError("ExpectedNumber");
const ExpectedInt = /* #__PURE__ */ $MatchError("ExpectedInt");
const ExpectedString = /* #__PURE__ */ $MatchError("ExpectedString");
const ExpectedQuery = /* #__PURE__ */ $MatchError("ExpectedQuery");
const ExpectedPathPart = /* #__PURE__ */ $MatchError("ExpectedPathPart");
const KeyNotFound = value0 => $MatchError("KeyNotFound", value0);
const Fail = value0 => $MatchError("Fail", value0);
const showMatchError = err => {
  if (err.tag === "UnexpectedPath") { return "expected path part: " + err._1; }
  if (err.tag === "KeyNotFound") { return "key: " + (err._1 + " has not found in query part"); }
  if (err.tag === "ExpectedQuery") { return "expected query - found path"; }
  if (err.tag === "ExpectedNumber") { return "expected number"; }
  if (err.tag === "ExpectedInt") { return "expected int"; }
  if (err.tag === "ExpectedBoolean") { return "expected boolean"; }
  if (err.tag === "ExpectedEnd") { return "expected end"; }
  if (err.tag === "ExpectedString") { return "expected string var"; }
  if (err.tag === "ExpectedPathPart") { return "expected path part, found query"; }
  if (err.tag === "Fail") { return "match error: " + err._1; }
  $runtime.fail();
};
export {$MatchError, ExpectedBoolean, ExpectedEnd, ExpectedInt, ExpectedNumber, ExpectedPathPart, ExpectedQuery, ExpectedString, Fail, KeyNotFound, UnexpectedPath, showMatchError};
