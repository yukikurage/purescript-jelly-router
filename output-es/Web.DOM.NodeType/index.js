import * as $runtime from "../runtime.js";
import * as Data$dMaybe from "../Data.Maybe/index.js";
import * as Data$dOrd from "../Data.Ord/index.js";
const $NodeType = tag => ({tag});
const ElementNode = /* #__PURE__ */ $NodeType("ElementNode");
const AttributeNode = /* #__PURE__ */ $NodeType("AttributeNode");
const TextNode = /* #__PURE__ */ $NodeType("TextNode");
const CDATASectionNode = /* #__PURE__ */ $NodeType("CDATASectionNode");
const EntityReferenceNode = /* #__PURE__ */ $NodeType("EntityReferenceNode");
const EntityNode = /* #__PURE__ */ $NodeType("EntityNode");
const ProcessingInstructionNode = /* #__PURE__ */ $NodeType("ProcessingInstructionNode");
const CommentNode = /* #__PURE__ */ $NodeType("CommentNode");
const DocumentNode = /* #__PURE__ */ $NodeType("DocumentNode");
const DocumentTypeNode = /* #__PURE__ */ $NodeType("DocumentTypeNode");
const DocumentFragmentNode = /* #__PURE__ */ $NodeType("DocumentFragmentNode");
const NotationNode = /* #__PURE__ */ $NodeType("NotationNode");
const toEnumNodeType = v => {
  if (v === 1) { return Data$dMaybe.$Maybe("Just", ElementNode); }
  if (v === 2) { return Data$dMaybe.$Maybe("Just", AttributeNode); }
  if (v === 3) { return Data$dMaybe.$Maybe("Just", TextNode); }
  if (v === 4) { return Data$dMaybe.$Maybe("Just", CDATASectionNode); }
  if (v === 5) { return Data$dMaybe.$Maybe("Just", EntityReferenceNode); }
  if (v === 6) { return Data$dMaybe.$Maybe("Just", EntityNode); }
  if (v === 7) { return Data$dMaybe.$Maybe("Just", ProcessingInstructionNode); }
  if (v === 8) { return Data$dMaybe.$Maybe("Just", CommentNode); }
  if (v === 9) { return Data$dMaybe.$Maybe("Just", DocumentNode); }
  if (v === 10) { return Data$dMaybe.$Maybe("Just", DocumentTypeNode); }
  if (v === 11) { return Data$dMaybe.$Maybe("Just", DocumentFragmentNode); }
  if (v === 12) { return Data$dMaybe.$Maybe("Just", NotationNode); }
  return Data$dMaybe.Nothing;
};
const showNodeType = {
  show: v => {
    if (v.tag === "ElementNode") { return "ElementNode"; }
    if (v.tag === "AttributeNode") { return "AttributeNode"; }
    if (v.tag === "TextNode") { return "TextNode"; }
    if (v.tag === "CDATASectionNode") { return "CDATASectionNode"; }
    if (v.tag === "EntityReferenceNode") { return "EntityReferenceNode"; }
    if (v.tag === "EntityNode") { return "EntityNode"; }
    if (v.tag === "ProcessingInstructionNode") { return "ProcessingInstructionNode"; }
    if (v.tag === "CommentNode") { return "CommentNode"; }
    if (v.tag === "DocumentNode") { return "DocumentNode"; }
    if (v.tag === "DocumentTypeNode") { return "DocumentTypeNode"; }
    if (v.tag === "DocumentFragmentNode") { return "DocumentFragmentNode"; }
    if (v.tag === "NotationNode") { return "NotationNode"; }
    $runtime.fail();
  }
};
const fromEnumNodeType = v => {
  if (v.tag === "ElementNode") { return 1; }
  if (v.tag === "AttributeNode") { return 2; }
  if (v.tag === "TextNode") { return 3; }
  if (v.tag === "CDATASectionNode") { return 4; }
  if (v.tag === "EntityReferenceNode") { return 5; }
  if (v.tag === "EntityNode") { return 6; }
  if (v.tag === "ProcessingInstructionNode") { return 7; }
  if (v.tag === "CommentNode") { return 8; }
  if (v.tag === "DocumentNode") { return 9; }
  if (v.tag === "DocumentTypeNode") { return 10; }
  if (v.tag === "DocumentFragmentNode") { return 11; }
  if (v.tag === "NotationNode") { return 12; }
  $runtime.fail();
};
const eqNodeType = {
  eq: x => y => {
    if (x.tag === "ElementNode") { return y.tag === "ElementNode"; }
    if (x.tag === "AttributeNode") { return y.tag === "AttributeNode"; }
    if (x.tag === "TextNode") { return y.tag === "TextNode"; }
    if (x.tag === "CDATASectionNode") { return y.tag === "CDATASectionNode"; }
    if (x.tag === "EntityReferenceNode") { return y.tag === "EntityReferenceNode"; }
    if (x.tag === "EntityNode") { return y.tag === "EntityNode"; }
    if (x.tag === "ProcessingInstructionNode") { return y.tag === "ProcessingInstructionNode"; }
    if (x.tag === "CommentNode") { return y.tag === "CommentNode"; }
    if (x.tag === "DocumentNode") { return y.tag === "DocumentNode"; }
    if (x.tag === "DocumentTypeNode") { return y.tag === "DocumentTypeNode"; }
    if (x.tag === "DocumentFragmentNode") { return y.tag === "DocumentFragmentNode"; }
    if (x.tag === "NotationNode") { return y.tag === "NotationNode"; }
    return false;
  }
};
const ordNodeType = {
  compare: x => y => Data$dOrd.ordInt.compare((() => {
    if (x.tag === "ElementNode") { return 1; }
    if (x.tag === "AttributeNode") { return 2; }
    if (x.tag === "TextNode") { return 3; }
    if (x.tag === "CDATASectionNode") { return 4; }
    if (x.tag === "EntityReferenceNode") { return 5; }
    if (x.tag === "EntityNode") { return 6; }
    if (x.tag === "ProcessingInstructionNode") { return 7; }
    if (x.tag === "CommentNode") { return 8; }
    if (x.tag === "DocumentNode") { return 9; }
    if (x.tag === "DocumentTypeNode") { return 10; }
    if (x.tag === "DocumentFragmentNode") { return 11; }
    if (x.tag === "NotationNode") { return 12; }
    $runtime.fail();
  })())((() => {
    if (y.tag === "ElementNode") { return 1; }
    if (y.tag === "AttributeNode") { return 2; }
    if (y.tag === "TextNode") { return 3; }
    if (y.tag === "CDATASectionNode") { return 4; }
    if (y.tag === "EntityReferenceNode") { return 5; }
    if (y.tag === "EntityNode") { return 6; }
    if (y.tag === "ProcessingInstructionNode") { return 7; }
    if (y.tag === "CommentNode") { return 8; }
    if (y.tag === "DocumentNode") { return 9; }
    if (y.tag === "DocumentTypeNode") { return 10; }
    if (y.tag === "DocumentFragmentNode") { return 11; }
    if (y.tag === "NotationNode") { return 12; }
    $runtime.fail();
  })()),
  Eq0: () => eqNodeType
};
const enumNodeType = {
  succ: a => toEnumNodeType((() => {
    if (a.tag === "ElementNode") { return 2; }
    if (a.tag === "AttributeNode") { return 3; }
    if (a.tag === "TextNode") { return 4; }
    if (a.tag === "CDATASectionNode") { return 5; }
    if (a.tag === "EntityReferenceNode") { return 6; }
    if (a.tag === "EntityNode") { return 7; }
    if (a.tag === "ProcessingInstructionNode") { return 8; }
    if (a.tag === "CommentNode") { return 9; }
    if (a.tag === "DocumentNode") { return 10; }
    if (a.tag === "DocumentTypeNode") { return 11; }
    if (a.tag === "DocumentFragmentNode") { return 12; }
    if (a.tag === "NotationNode") { return 13; }
    $runtime.fail();
  })()),
  pred: a => toEnumNodeType((() => {
    if (a.tag === "ElementNode") { return 0; }
    if (a.tag === "AttributeNode") { return 1; }
    if (a.tag === "TextNode") { return 2; }
    if (a.tag === "CDATASectionNode") { return 3; }
    if (a.tag === "EntityReferenceNode") { return 4; }
    if (a.tag === "EntityNode") { return 5; }
    if (a.tag === "ProcessingInstructionNode") { return 6; }
    if (a.tag === "CommentNode") { return 7; }
    if (a.tag === "DocumentNode") { return 8; }
    if (a.tag === "DocumentTypeNode") { return 9; }
    if (a.tag === "DocumentFragmentNode") { return 10; }
    if (a.tag === "NotationNode") { return 11; }
    $runtime.fail();
  })()),
  Ord0: () => ordNodeType
};
const boundedNodeType = {bottom: ElementNode, top: NotationNode, Ord0: () => ordNodeType};
const boundedEnumNodeType = {cardinality: 12, toEnum: toEnumNodeType, fromEnum: fromEnumNodeType, Bounded0: () => boundedNodeType, Enum1: () => enumNodeType};
export {
  $NodeType,
  AttributeNode,
  CDATASectionNode,
  CommentNode,
  DocumentFragmentNode,
  DocumentNode,
  DocumentTypeNode,
  ElementNode,
  EntityNode,
  EntityReferenceNode,
  NotationNode,
  ProcessingInstructionNode,
  TextNode,
  boundedEnumNodeType,
  boundedNodeType,
  enumNodeType,
  eqNodeType,
  fromEnumNodeType,
  ordNodeType,
  showNodeType,
  toEnumNodeType
};
