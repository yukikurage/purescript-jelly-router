import * as $runtime from "../runtime.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import * as Web$dEvent$dEventPhase from "../Web.Event.EventPhase/index.js";
import {_currentTarget, _target, bubbles, cancelable, defaultPrevented, eventPhaseIndex, preventDefault, stopImmediatePropagation, stopPropagation, timeStamp, type_} from "./foreign.js";
const EventType = x => x;
const target = x => Data$dNullable.nullable(_target(x), Data$dMaybe.Nothing, Data$dMaybe.Just);
const ordEventType = Data$dOrd.ordString;
const newtypeEventType = {Coercible0: () => undefined};
const eventPhase = () => x => {
  const $2 = Web$dEvent$dEventPhase.toEnumEventPhase(eventPhaseIndex(x));
  if ($2.tag === "Just") { return $2._1; }
  $runtime.fail();
};
const eqEventType = Data$dEq.eqString;
const currentTarget = x => Data$dNullable.nullable(_currentTarget(x), Data$dMaybe.Nothing, Data$dMaybe.Just);
export {EventType, currentTarget, eqEventType, eventPhase, newtypeEventType, ordEventType, target};
export * from "./foreign.js";
