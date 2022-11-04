import * as $runtime from "../runtime.js";
import * as Data$dFoldable from "../Data.Foldable/index.js";
import * as Data$dFunctor from "../Data.Functor/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dMonoid from "../Data.Monoid/index.js";
const $Prop = (tag, _1, _2) => ({tag, _1, _2});
const fold = /* #__PURE__ */ (() => Data$dFoldable.foldableArray.foldMap((() => {
  const semigroupEffect1 = {
    append: a => b => () => {
      const a$p = a();
      const a$p$1 = b();
      return a$p + a$p$1;
    }
  };
  return {mempty: () => "", Semigroup0: () => semigroupEffect1};
})())(Data$dFoldable.identity))();
const PropAttribute = value0 => value1 => $Prop("PropAttribute", value0, value1);
const PropHandler = value0 => value1 => $Prop("PropHandler", value0, value1);
const PropMountEffect = value0 => $Prop("PropMountEffect", value0);
const attrValueString = {toAttrValue: Data$dMaybe.Just};
const attrValueMaybeString = {toAttrValue: x => x};
const attrValueBoolean = {
  toAttrValue: v => {
    if (v) { return Data$dMaybe.$Maybe("Just", ""); }
    return Data$dMaybe.Nothing;
  }
};
const attrValueArrayString = {
  toAttrValue: /* #__PURE__ */ (() => {
    const $0 = Data$dFoldable.foldableArray.foldMap(Data$dMonoid.monoidString)(Data$dFoldable.identity);
    const $1 = Data$dFunctor.arrayMap(s => s + " ");
    return x => Data$dMaybe.$Maybe("Just", $0($1(x)));
  })()
};
const toAttrValue = dict => dict.toAttrValue;
const attrValueMaybeArrayString = {
  toAttrValue: v => {
    if (v.tag === "Just") { return attrValueArrayString.toAttrValue(v._1); }
    if (v.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  }
};
const attrValueMaybeBoolean = {
  toAttrValue: v => {
    if (v.tag === "Just") {
      if (v._1) { return Data$dMaybe.$Maybe("Just", ""); }
      return Data$dMaybe.Nothing;
    }
    if (v.tag === "Nothing") { return Data$dMaybe.Nothing; }
    $runtime.fail();
  }
};
const renderProp = v => {
  if (v.tag === "PropAttribute") {
    return () => {
      const value = v._2.get();
      return (() => {
        if (value.tag === "Nothing") { return ""; }
        if (value.tag === "Just") { return " " + (v._1 + ("=\"" + (value._1 + "\""))); }
        $runtime.fail();
      })();
    };
  }
  if (v.tag === "PropHandler") { return () => ""; }
  if (v.tag === "PropMountEffect") { return () => ""; }
  $runtime.fail();
};
const renderProps = props => fold(Data$dFunctor.arrayMap(renderProp)(props));
const onMount = PropMountEffect;
const on = PropHandler;
const hoistProp = f => v => {
  if (v.tag === "PropAttribute") { return $Prop("PropAttribute", v._1, v._2); }
  if (v.tag === "PropHandler") { return $Prop("PropHandler", v._1, x => f(v._2(x))); }
  if (v.tag === "PropMountEffect") { return $Prop("PropMountEffect", x => f(v._1(x))); }
  $runtime.fail();
};
const attrSig = dictAttrValue => name => value => $Prop(
  "PropAttribute",
  name,
  {
    run: cb => value.run(x => cb(dictAttrValue.toAttrValue(x))),
    get: () => {
      const a$p = value.get();
      return dictAttrValue.toAttrValue(a$p);
    }
  }
);
const attr = dictAttrValue => name => value => $Prop(
  "PropAttribute",
  name,
  (() => {
    const $3 = dictAttrValue.toAttrValue(value);
    return {run: cb => cb($3), get: () => $3};
  })()
);
export {
  $Prop,
  PropAttribute,
  PropHandler,
  PropMountEffect,
  attr,
  attrSig,
  attrValueArrayString,
  attrValueBoolean,
  attrValueMaybeArrayString,
  attrValueMaybeBoolean,
  attrValueMaybeString,
  attrValueString,
  fold,
  hoistProp,
  on,
  onMount,
  renderProp,
  renderProps,
  toAttrValue
};
