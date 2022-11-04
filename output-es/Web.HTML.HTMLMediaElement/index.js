import * as $runtime from "../runtime.js";
import * as Unsafe$dCoerce from "../Unsafe.Coerce/index.js";
import * as Web$dHTML$dHTMLMediaElement$dCanPlayType from "../Web.HTML.HTMLMediaElement.CanPlayType/index.js";
import * as Web$dHTML$dHTMLMediaElement$dNetworkState from "../Web.HTML.HTMLMediaElement.NetworkState/index.js";
import * as Web$dHTML$dHTMLMediaElement$dReadyState from "../Web.HTML.HTMLMediaElement.ReadyState/index.js";
import * as Web$dInternal$dFFI from "../Web.Internal.FFI/index.js";
import {
  _canPlayType,
  _networkState,
  _readyState,
  autoplay,
  controls,
  crossOrigin,
  currentSrc,
  currentTime,
  defaultMuted,
  defaultPlaybackRate,
  duration,
  ended,
  getStartDate,
  load,
  loop,
  mediaGroup,
  muted,
  pause,
  paused,
  play,
  playbackRate,
  preload,
  seeking,
  setAutoplay,
  setControls,
  setCrossOrigin,
  setCurrentTime,
  setDefaultMuted,
  setDefaultPlaybackRate,
  setLoop,
  setMediaGroup,
  setMuted,
  setPlaybackRate,
  setPreload,
  setSrc,
  setVolume,
  src,
  volume
} from "./foreign.js";
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
    const $2 = Web$dHTML$dHTMLMediaElement$dReadyState.toEnumReadyState(a$p);
    if ($2.tag === "Nothing") { return Web$dHTML$dHTMLMediaElement$dReadyState.HaveNothing; }
    if ($2.tag === "Just") { return $2._1; }
    $runtime.fail();
  })();
};
const networkState = el => () => {
  const a$p = _networkState(el);
  return (() => {
    const $2 = Web$dHTML$dHTMLMediaElement$dNetworkState.toEnumNetworkState(a$p);
    if ($2.tag === "Nothing") { return Web$dHTML$dHTMLMediaElement$dNetworkState.Empty; }
    if ($2.tag === "Just") { return $2._1; }
    $runtime.fail();
  })();
};
const fromParentNode = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLMediaElement");
const fromNonDocumentTypeChildNode = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLMediaElement");
const fromNode = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLMediaElement");
const fromHTMLElement = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLMediaElement");
const fromEventTarget = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLMediaElement");
const fromElement = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLMediaElement");
const fromChildNode = /* #__PURE__ */ Web$dInternal$dFFI.unsafeReadProtoTagged("HTMLMediaElement");
const canPlayType = ty => el => () => {
  const a$p = _canPlayType(ty, el);
  return (() => {
    const $3 = Web$dHTML$dHTMLMediaElement$dCanPlayType.parse(a$p);
    if ($3.tag === "Nothing") { return Web$dHTML$dHTMLMediaElement$dCanPlayType.Unspecified; }
    if ($3.tag === "Just") { return $3._1; }
    $runtime.fail();
  })();
};
export {
  canPlayType,
  fromChildNode,
  fromElement,
  fromEventTarget,
  fromHTMLElement,
  fromNode,
  fromNonDocumentTypeChildNode,
  fromParentNode,
  networkState,
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
