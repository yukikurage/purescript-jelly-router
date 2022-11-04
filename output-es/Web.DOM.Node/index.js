import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Web$dDOM$dNodeType from "../Web.DOM.NodeType/index.js";
import * as Web$dInternal$dFFI from "../Web.Internal.FFI/index.js";
import {
  _firstChild,
  _lastChild,
  _lookupNamespaceURI,
  _lookupPrefix,
  _nextSibling,
  _nodeValue,
  _ownerDocument,
  _parentElement,
  _parentNode,
  _previousSibling,
  appendChild,
  baseURI,
  childNodes,
  clone,
  compareDocumentPositionBits,
  contains,
  deepClone,
  hasChildNodes,
  insertBefore,
  isDefaultNamespace,
  isEqualNode,
  nodeName,
  nodeTypeIndex,
  normalize,
  removeChild,
  replaceChild,
  setNodeValue,
  setTextContent,
  textContent
} from "./foreign.js";
const toEventTarget = Unsafe$dCoerce.unsafeCoerce;
const previousSibling = x => {
  const $1 = _previousSibling(x);
  return () => {
    const a$p = $1();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const parentNode = x => {
  const $1 = _parentNode(x);
  return () => {
    const a$p = $1();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const parentElement = x => {
  const $1 = _parentElement(x);
  return () => {
    const a$p = $1();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const ownerDocument = x => {
  const $1 = _ownerDocument(x);
  return () => {
    const a$p = $1();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const nodeValue = x => {
  const $1 = _nodeValue(x);
  return () => {
    const a$p = $1();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const nodeType = () => x => {
  const $2 = Web$dDOM$dNodeType.toEnumNodeType(nodeTypeIndex(x));
  if ($2.tag === "Just") { return $2._1; }
  $runtime.fail();
};
const nextSibling = x => {
  const $1 = _nextSibling(x);
  return () => {
    const a$p = $1();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const lookupPrefix = p => {
  const $1 = _lookupPrefix(p);
  return x => {
    const $3 = $1(x);
    return () => {
      const a$p = $3();
      return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    };
  };
};
const lookupNamespaceURI = ns => {
  const $1 = _lookupNamespaceURI(ns);
  return x => {
    const $3 = $1(x);
    return () => {
      const a$p = $3();
      return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
    };
  };
};
const lastChild = x => {
  const $1 = _lastChild(x);
  return () => {
    const a$p = $1();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const fromEventTarget = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("Node");
const firstChild = x => {
  const $1 = _firstChild(x);
  return () => {
    const a$p = $1();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
export {
  firstChild,
  fromEventTarget,
  lastChild,
  lookupNamespaceURI,
  lookupPrefix,
  nextSibling,
  nodeType,
  nodeValue,
  ownerDocument,
  parentElement,
  parentNode,
  previousSibling,
  toEventTarget
};
export * from "./foreign.js";
