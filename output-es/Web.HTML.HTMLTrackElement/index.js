import * as $runtime from "../runtime.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Web$dHTML$dHTMLTrackElement$dReadyState from "../Web.HTML.HTMLTrackElement.ReadyState/index.js";
import * as Web$dInternal$dFFI from "../Web.Internal.FFI/index.js";
import {_readyState, default as $$default, kind, label, setDefault, setKind, setLabel, setSrc, setSrclang, src, srclang} from "./foreign.js";
const toParentNode = Unsafe$dCoerce.unsafeCoerce;
const toNonDocumentTypeChildNode = Unsafe$dCoerce.unsafeCoerce;
const toNode = Unsafe$dCoerce.unsafeCoerce;
const toHTMLElement = Unsafe$dCoerce.unsafeCoerce;
const toEventTarget = Unsafe$dCoerce.unsafeCoerce;
const toElement = Unsafe$dCoerce.unsafeCoerce;
const toChildNode = Unsafe$dCoerce.unsafeCoerce;
const readyState = el => () => {
  const a$p = _readyState(el);
  return (() => {
    const $2 = Web$dHTML$dHTMLTrackElement$dReadyState.toEnumReadyState(a$p);
    if ($2.tag === "Nothing") { return Web$dHTML$dHTMLTrackElement$dReadyState.None; }
    if ($2.tag === "Just") { return $2._1; }
    $runtime.fail();
  })();
};
const fromParentNode = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLTrackElement");
const fromNonDocumentTypeChildNode = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLTrackElement");
const fromNode = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLTrackElement");
const fromHTMLElement = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLTrackElement");
const fromEventTarget = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLTrackElement");
const fromElement = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLTrackElement");
const fromChildNode = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLTrackElement");
export {
  fromChildNode,
  fromElement,
  fromEventTarget,
  fromHTMLElement,
  fromNode,
  fromNonDocumentTypeChildNode,
  fromParentNode,
  readyState,
  toChildNode,
  toElement,
  toEventTarget,
  toHTMLElement,
  toNode,
  toNonDocumentTypeChildNode,
  toParentNode
};
export * from "./foreign.js";
