import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import {_item, add, contains, remove, toggle, toggleForce} from "./foreign.js";
const item = index => {
  const $1 = _item(index);
  return x => {
    const $3 = $1(x);
    return () => {
      const a$p = $3();
      return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    };
  };
};
export {item};
export * from "./foreign.js";
