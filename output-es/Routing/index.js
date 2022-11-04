import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as JSURI from "../JSURI/index.js";
import * as Routing$dMatch from "../Routing.Match/index.js";
import * as Routing$dParser from "../Routing.Parser/index.js";
const matchWith = decoder => matcher => x => Routing$dMatch.runMatch(matcher)(Routing$dParser.parse(decoder)(x));
const match = /* #__PURE__ */ matchWith(x => {
  const $1 = JSURI._decodeURIComponent(v => Data$dMaybe.Nothing, Data$dMaybe.Just, x);
  if ($1.tag === "Just") { return $1._1; }
  $runtime.fail();
});
export {match, matchWith};
