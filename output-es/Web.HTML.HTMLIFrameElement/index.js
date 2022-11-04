import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dNullable from "../Data.Nullable/index.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Web$dInternal$dFFI from "../Web.Internal.FFI/index.js";
import {_contentDocument, _contentWindow, height, name, setHeight, setName, setSrc, setSrcdoc, setWidth, src, srcdoc, width} from "./foreign.js";
const toParentNode = Unsafe$dCoerce.unsafeCoerce;
const toNonDocumentTypeChildNode = Unsafe$dCoerce.unsafeCoerce;
const toNode = Unsafe$dCoerce.unsafeCoerce;
const toHTMLElement = Unsafe$dCoerce.unsafeCoerce;
const toEventTarget = Unsafe$dCoerce.unsafeCoerce;
const toElement = Unsafe$dCoerce.unsafeCoerce;
const toChildNode = Unsafe$dCoerce.unsafeCoerce;
const fromParentNode = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLIFrameElement");
const fromNonDocumentTypeChildNode = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLIFrameElement");
const fromNode = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLIFrameElement");
const fromHTMLElement = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLIFrameElement");
const fromEventTarget = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLIFrameElement");
const fromElement = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLIFrameElement");
const fromChildNode = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLIFrameElement");
const contentWindow = x => {
  const $1 = _contentWindow(x);
  return () => {
    const a$p = $1();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
const contentDocument = x => {
  const $1 = _contentDocument(x);
  return () => {
    const a$p = $1();
    return Data$dNullable.nullable(a$p, Data$dMaybe.Nothing, Data$dMaybe.Just);
  };
};
export {
  contentDocument,
  contentWindow,
  fromChildNode,
  fromElement,
  fromEventTarget,
  fromHTMLElement,
  fromNode,
  fromNonDocumentTypeChildNode,
  fromParentNode,
  toChildNode,
  toElement,
  toEventTarget,
  toHTMLElement,
  toNode,
  toNonDocumentTypeChildNode,
  toParentNode
};
export * from "./foreign.js";
