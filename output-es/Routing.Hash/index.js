import * as $runtime from "../runtime.js";
import * as Control$dBind from "../Control.Bind/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dString$dCodeUnits from "../Data.String.CodeUnits/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dRef from "../Effect.Ref/index.js";
import * as Routing from "../Routing/index.js";
import * as Web$dEvent$dEventTarget from "../Web.Event.EventTarget/index.js";
import * as Web$dHTML from "../Web.HTML/index.js";
import * as Web$dHTML$dLocation from "../Web.HTML.Location/index.js";
import * as Web$dHTML$dWindow from "../Web.HTML.Window/index.js";
const setHash = h => Effect.bindE(Effect.bindE(Web$dHTML.window)(Web$dHTML$dWindow.location))(Web$dHTML$dLocation.setHash(h));
const getHash = /* #__PURE__ */ (() => {
  const $0 = Effect.bindE(Web$dHTML.window)(Web$dHTML$dWindow.location);
  return () => {
    const x = $0();
    const a$p = Web$dHTML$dLocation.hash(x)();
    return (() => {
      const $3 = Data$dString$dCodeUnits.stripPrefix("#")(a$p);
      if ($3.tag === "Nothing") { return ""; }
      if ($3.tag === "Just") { return $3._1; }
      $runtime.fail();
    })();
  };
})();
const modifyHash = fn => Effect.bindE(() => {
  const a$p = getHash();
  return fn(a$p);
})(setHash);
const foldHashes = cb => init => {
  const $2 = Effect.bindE(Effect.bindE(getHash)(init))(Effect$dRef._new);
  return () => {
    const ref = $2();
    const a$p = Web$dHTML.window();
    const listener = Web$dEvent$dEventTarget.eventListener(v => () => {
      const a = Effect.bindE(() => {
        const a$p$1 = ref.value;
        const a$p$2 = getHash();
        return cb(a$p$1)(a$p$2);
      })(Control$dBind.identity)();
      return ref.value = a;
    })();
    Web$dEvent$dEventTarget.addEventListener("hashchange")(listener)(false)(a$p)();
    return Web$dEvent$dEventTarget.removeEventListener("hashchange")(listener)(false)(a$p);
  };
};
const matchesWith = dictFoldable => parser => cb => {
  const go = a => {
    const $4 = Data$dFoldable.indexl(dictFoldable)(0);
    return x => {
      const $6 = $4(parser(x));
      if ($6.tag === "Nothing") { return () => a; }
      if ($6.tag === "Just") {
        const $7 = cb(a)($6._1);
        return () => {
          $7();
          return Data$dMaybe.$Maybe("Just", $6._1);
        };
      }
      $runtime.fail();
    };
  };
  return foldHashes($4 => go($4))(go(Data$dMaybe.Nothing));
};
const hashes = /* #__PURE__ */ matchesWith(Data$dFoldable.foldableMaybe)(Data$dMaybe.Just);
const matches = x => matchesWith(Data$dFoldable.foldableEither)(Routing.match(x));
export {foldHashes, getHash, hashes, matches, matchesWith, modifyHash, setHash};
