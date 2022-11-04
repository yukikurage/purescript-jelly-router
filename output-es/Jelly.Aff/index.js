import * as $runtime from "../runtime.js";
import * as Data$dEither from "../Data.Either/index.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dUnit from "../Data.Unit/index.js";
import * as Effect from "../Effect/index.js";
import * as Effect$dAff from "../Effect.Aff/index.js";
import * as Web$dDOM$dParentNode from "../Web.DOM.ParentNode/index.js";
import * as Web$dEvent$dEventTarget from "../Web.Event.EventTarget/index.js";
import * as Web$dHTML from "../Web.HTML/index.js";
import * as Web$dHTML$dHTMLDocument from "../Web.HTML.HTMLDocument/index.js";
import * as Web$dHTML$dWindow from "../Web.HTML.Window/index.js";
const awaitDomContentLoaded = /* #__PURE__ */ Effect$dAff.makeAff(callback => () => {
  const w = Web$dHTML.window();
  const rs = Effect.bindE(Effect.bindE(Web$dHTML.window)(Web$dHTML$dWindow.document))(Web$dHTML$dHTMLDocument.readyState)();
  if (rs.tag === "Loading") {
    const listener = Web$dEvent$dEventTarget.eventListener((() => {
      const $3 = callback(Data$dEither.$Either("Right", Data$dUnit.unit));
      return v => $3;
    })())();
    Web$dEvent$dEventTarget.addEventListener("DOMContentLoaded")(listener)(false)(w)();
    const $5 = Effect$dAff._liftEffect(Web$dEvent$dEventTarget.removeEventListener("DOMContentLoaded")(listener)(false)(w));
    return v => $5;
  }
  callback(Data$dEither.$Either("Right", Data$dUnit.unit))();
  return Effect$dAff.nonCanceler;
});
const awaitQuerySelector = qs => Effect$dAff._bind(awaitDomContentLoaded)(() => Effect$dAff._bind(Effect$dAff._liftEffect((() => {
  const $2 = Web$dDOM$dParentNode.querySelector(qs);
  const $3 = Effect.bindE(Web$dHTML.window)(Web$dHTML$dWindow.document);
  return () => {
    const x = $3();
    return $2(x)();
  };
})()))(el => Effect$dAff._pure((() => {
  if (el.tag === "Just") { return Data$dMaybe.$Maybe("Just", el._1); }
  return Data$dMaybe.Nothing;
})())));
const awaitDocument = /* #__PURE__ */ Effect$dAff._bind(awaitDomContentLoaded)(() => Effect$dAff._bind(Effect$dAff._liftEffect(Effect.bindE(Web$dHTML.window)(Web$dHTML$dWindow.document)))(htmlDoc => Effect$dAff._pure(htmlDoc)));
const awaitBody = /* #__PURE__ */ Effect$dAff._bind(awaitDomContentLoaded)(() => Effect$dAff._bind(Effect$dAff._liftEffect(Effect.bindE(Effect.bindE(Web$dHTML.window)(Web$dHTML$dWindow.document))(Web$dHTML$dHTMLDocument.body)))(htmlEl => Effect$dAff._pure((() => {
  if (htmlEl.tag === "Just") { return Data$dMaybe.$Maybe("Just", htmlEl._1); }
  return Data$dMaybe.Nothing;
})())));
export {awaitBody, awaitDocument, awaitDomContentLoaded, awaitQuerySelector};
