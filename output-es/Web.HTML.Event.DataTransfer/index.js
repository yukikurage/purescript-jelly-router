import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Data$dOrdering from "../Data.Ordering/index.js";
import {_dropEffect, _files, _getData, _setData, _setDragImage, _setDropEffect, items, types} from "./foreign.js";
const $DropEffect = tag => ({tag});
const Copy = /* #__PURE__ */ $DropEffect("Copy");
const Link = /* #__PURE__ */ $DropEffect("Link");
const Move = /* #__PURE__ */ $DropEffect("Move");
const None = /* #__PURE__ */ $DropEffect("None");
const setDropEffect = de => _setDropEffect((() => {
  if (de.tag === "Copy") { return "copy"; }
  if (de.tag === "Link") { return "link"; }
  if (de.tag === "Move") { return "move"; }
  if (de.tag === "None") { return "none"; }
  $runtime.fail();
})());
const setDragImage = _setDragImage;
const setData = v => dat => dt => _setData(v)(dat)(dt);
const getData = v => dt => _getData(v)(dt);
const files = x => Data$dNullable.nullable(_files(x), Data$dMaybe.Nothing, Data$dMaybe.Just);
const eqDropEffect = {
  eq: x => y => {
    if (x.tag === "Copy") { return y.tag === "Copy"; }
    if (x.tag === "Link") { return y.tag === "Link"; }
    if (x.tag === "Move") { return y.tag === "Move"; }
    if (x.tag === "None") { return y.tag === "None"; }
    return false;
  }
};
const ordDropEffect = {
  compare: x => y => {
    if (x.tag === "Copy") {
      if (y.tag === "Copy") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Copy") { return Data$dOrdering.GT; }
    if (x.tag === "Link") {
      if (y.tag === "Link") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Link") { return Data$dOrdering.GT; }
    if (x.tag === "Move") {
      if (y.tag === "Move") { return Data$dOrdering.EQ; }
      return Data$dOrdering.LT;
    }
    if (y.tag === "Move") { return Data$dOrdering.GT; }
    if (x.tag === "None") {
      if (y.tag === "None") { return Data$dOrdering.EQ; }
      $runtime.fail();
    }
    $runtime.fail();
  },
  Eq0: () => eqDropEffect
};
const dropEffect = dt => {
  const $1 = _dropEffect(dt);
  return () => {
    const a$p = $1();
    return (() => {
      if (a$p === "copy") { return Copy; }
      if (a$p === "link") { return Link; }
      if (a$p === "move") { return Move; }
      if (a$p === "none") { return None; }
      return None;
    })();
  };
};
export {$DropEffect, Copy, Link, Move, None, dropEffect, eqDropEffect, files, getData, ordDropEffect, setData, setDragImage, setDropEffect};
export * from "./foreign.js";
