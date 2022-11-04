import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import {_item, _namedItem, length, toArray} from "./foreign.js";
const namedItem = id => {
  const $1 = _namedItem(id);
  return x => {
    const $3 = $1(x);
    return () => {
      const a$p = $3();
      return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    };
  };
};
const item = i => {
  const $1 = _item(i);
  return x => {
    const $3 = $1(x);
    return () => {
      const a$p = $3();
      return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    };
  };
};
export {item, namedItem};
export * from "./foreign.js";
