import * as $runtime from "../runtime.js";
import * as Data$dEq from "../Data.Eq/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
import {_firstElementChild, _lastElementChild, _querySelector, childElementCount, children, querySelectorAll} from "./foreign.js";
const QuerySelector = x => x;
const querySelector = qs => {
  const $1 = _querySelector(qs);
  return x => {
    const $3 = $1(x);
    return () => {
      const a$p = $3();
      return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    };
  };
};
const ordQuerySelector = Data$dOrd.ordString;
const newtypeQuerySelector = {Coercible0: () => undefined};
const lastElementChild = x => {
  const $1 = _lastElementChild(x);
  return () => {
    const a$p = $1();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const firstElementChild = x => {
  const $1 = _firstElementChild(x);
  return () => {
    const a$p = $1();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const eqQuerySelector = Data$dEq.eqString;
export {QuerySelector, eqQuerySelector, firstElementChild, lastElementChild, newtypeQuerySelector, ordQuerySelector, querySelector};
export * from "./foreign.js";
