"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aceCheck = aceCheck;
const jsdom_1 = require("jsdom");
const ace_node_js_1 = __importDefault(require("../../ace-engine/dist/ace-node.js"));
async function aceCheck(html, guidelineIds) {
    const dom = new jsdom_1.JSDOM(html);
    const document = dom.window.document;
    const checker = new ace_node_js_1.default.Checker();
    const report = await checker.check(document, guidelineIds);
    return report;
}
