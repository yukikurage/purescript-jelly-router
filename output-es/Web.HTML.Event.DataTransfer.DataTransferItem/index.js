import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import {_dataTransferItem, _kind, _length, type_} from "./foreign.js";
const $DataTransferItemKind = tag => ({tag});
const Text = /* #__PURE__ */ $DataTransferItemKind("Text");
const File = /* #__PURE__ */ $DataTransferItemKind("File");
const showDataTransferItemKind = {
  show: v => {
    if (v.tag === "Text") { return "Text"; }
    if (v.tag === "File") { return "File"; }
    $runtime.fail();
  }
};
const length = _length;
const kind = $0 => _kind(Data$dMaybe.Nothing, Data$dMaybe.Just, Text, File, $0);
const eqDataTransferItemKind = {
  eq: x => y => {
    if (x.tag === "Text") { return y.tag === "Text"; }
    if (x.tag === "File") { return y.tag === "File"; }
    return false;
  }
};
const ordDataTransferItemKind = {
  compare: x => y => {
    if (x.tag === "Text") {
      if (y.tag === "Text") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Text") { return Data$dOrdering.GT; }
    if (x.tag === "File") {
      if (y.tag === "File") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqDataTransferItemKind
};
const dataTransferItem = x => {
  const $1 = _dataTransferItem(x);
  return x$1 => Data$dNullable.nullable($1(x$1), Data$dMaybe.Nothing, Data$dMaybe.Just);
};
export {$DataTransferItemKind, File, Text, dataTransferItem, eqDataTransferItemKind, kind, length, ordDataTransferItemKind, showDataTransferItemKind};
export * from "./foreign.js";
