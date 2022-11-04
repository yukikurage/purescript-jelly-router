import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import {_getElementById} from "./foreign.js";
const getElementById = eid => {
  const $1 = _getElementById(eid);
  return x => {
    const $3 = $1(x);
    return () => {
      const a$p = $3();
      return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    };
  };
};
export {getElementById};
export * from "./foreign.js";
