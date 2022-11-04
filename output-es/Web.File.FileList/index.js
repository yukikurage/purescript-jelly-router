import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dTuple from "../Data.Tuple/index.js";
import {_item, length} from "./foreign.js";
const item = i => {
  const $1 = _item(i);
  return x => Data$dNullable.nullable($1(x), Data$dMaybe.Nothing, Data$dMaybe.Just);
};
const items = dictUnfoldable => fl => dictUnfoldable.unfoldr(i => {
  const $3 = i + 1 | 0;
  const $4 = Data$dNullable.nullable(_item(i)(fl), Data$dMaybe.Nothing, Data$dMaybe.Just);
  if ($4.tag === "Just") { return Data$dMaybe.$Maybe("Just", Data$dTuple.$Tuple($4._1, $3)); }
  return Data$dMaybe.Nothing;
})(0);
export {item, items};
export * from "./foreign.js";
