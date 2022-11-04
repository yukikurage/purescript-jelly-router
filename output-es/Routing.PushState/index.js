import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dMap$dInternal from "../Data.Map.Internal/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Data$dShow from "../Data.Show/index.js";
import * as Data$dUnit from "../Data.Unit/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dRef from "../Effect.Ref/index.js";
import * as Routing from "../Routing/index.js";
import * as Web$dDOM$dDocument from "../Web.DOM.Document/index.js";
import * as Web$dDOM$dMutationObserver from "../Web.DOM.MutationObserver/index.js";
import * as Web$dDOM$dNode from "../Web.DOM.Node/index.js";
import * as Web$dEvent$dEventTarget from "../Web.Event.EventTarget/index.js";
import * as Web$dHTML from "../Web.HTML/index.js";
import * as Web$dHTML$dHistory from "../Web.HTML.History/index.js";
import * as Web$dHTML$dLocation from "../Web.HTML.Location/index.js";
import * as Web$dHTML$dWindow from "../Web.HTML.Window/index.js";
const traverse_ = /* #__PURE__ */ Data$dFoldable.traverse_(Effect.applicativeEffect);
const traverse_1 = /* #__PURE__ */ traverse_(Data$dFoldable.foldableEither);
const traverse_2 = /* #__PURE__ */ traverse_(Data$dMap$dInternal.foldableMap);
const makeImmediate = run => () => {
  const x = Web$dHTML.window();
  const a$p = Web$dHTML$dWindow.document(x)();
  const nextTick = {value: Data$dEither.$Either("Right", 0)};
  const a$p$1 = Web$dDOM$dDocument.createTextNode("")(a$p)();
  const observer = Web$dDOM$dMutationObserver.mutationObserver(v => v1 => () => {
    const $7 = nextTick.value;
    nextTick.value = (() => {
      if ($7.tag === "Left") { return Data$dEither.$Either("Right", 1 + $7._1 | 0); }
      if ($7.tag === "Right") { return Data$dEither.$Either("Right", $7._1); }
      $runtime.fail();
    })();
    return run();
  })();
  Web$dDOM$dMutationObserver._observe(a$p$1)({characterData: true})(observer)();
  return Effect.bindE(() => nextTick.value)(traverse_1(tick => {
    const $8 = Data$dEither.$Either("Left", tick + 1 | 0);
    return () => {
      nextTick.value = $8;
      return Web$dDOM$dNode.setNodeValue(Data$dShow.showIntImpl(tick))(a$p$1)();
    };
  }));
};
const makeInterface = () => {
  const freshRef = {value: 0};
  const listenersRef = {value: Data$dMap$dInternal.Leaf};
  const $2 = Effect.bindE(Web$dHTML.window)(Web$dHTML$dWindow.location);
  const locationState = () => {
    const loc = $2();
    const state = Effect.bindE(Effect.bindE(Web$dHTML.window)(Web$dHTML$dWindow.history))(Web$dHTML$dHistory.state)();
    const pathname = Web$dHTML$dLocation.pathname(loc)();
    const search = Web$dHTML$dLocation.search(loc)();
    const hash = Web$dHTML$dLocation.hash(loc)();
    return {state: state, pathname: pathname, search: search, hash: hash, path: pathname + (search + hash)};
  };
  const schedule = makeImmediate(() => {
    const ev = locationState();
    return Effect.bindE(() => listenersRef.value)(traverse_2(v => v(ev)))();
  })();
  const stateFn = op => state => path => {
    const $8 = Effect.bindE(Effect.bindE(Web$dHTML.window)(Web$dHTML$dWindow.history))(op(state)("")(path));
    return () => {
      $8();
      return schedule();
    };
  };
  const listener = Web$dEvent$dEventTarget.eventListener(v => () => {
    const ev = locationState();
    return Effect.bindE(() => listenersRef.value)(traverse_2(v$1 => v$1(ev)))();
  })();
  Effect.bindE(Web$dHTML.window)(Web$dEvent$dEventTarget.addEventListener("popstate")(listener)(false))();
  return {
    pushState: stateFn(Web$dHTML$dHistory.pushState),
    replaceState: stateFn(Web$dHTML$dHistory.replaceState),
    locationState: locationState,
    listen: k => () => {
      const fresh = freshRef.value;
      freshRef.value = fresh + 1 | 0;
      const $11 = listenersRef.value;
      listenersRef.value = Data$dMap$dInternal.insert(Data$dOrd.ordInt)(fresh)(k)($11);
      return () => {
        const $13 = listenersRef.value;
        listenersRef.value = Data$dMap$dInternal.delete(Data$dOrd.ordInt)(fresh)($13);
        return Data$dUnit.unit;
      };
    }
  };
};
const foldLocations = cb => init => psi => {
  const $3 = Effect.bindE(Effect.bindE(psi.locationState)(init))(Effect$dRef._new);
  return () => {
    const ref = $3();
    return psi.listen(loc => () => {
      const a = ref.value;
      const a$1 = cb(a)(loc)();
      return ref.value = a$1;
    })();
  };
};
const foldPaths = cb => init => foldLocations(a => {
  const $3 = cb(a);
  return x => $3(x.path);
})(x => init(x.path));
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
  return foldPaths($4 => go($4))(go(Data$dMaybe.Nothing));
};
const matches = x => matchesWith(Data$dFoldable.foldableEither)(Routing.match(x));
const paths = /* #__PURE__ */ matchesWith(Data$dFoldable.foldableMaybe)(Data$dMaybe.Just);
const locations = cb => foldLocations(a => b => {
  const $3 = cb(a)(b);
  return () => {
    $3();
    return Data$dMaybe.$Maybe("Just", b);
  };
})(b => {
  const $2 = cb(Data$dMaybe.Nothing)(b);
  return () => {
    $2();
    return Data$dMaybe.$Maybe("Just", b);
  };
});
export {foldLocations, foldPaths, locations, makeImmediate, makeInterface, matches, matchesWith, paths, traverse_, traverse_1, traverse_2};
