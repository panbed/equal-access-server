"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const aceChecker_1 = require("./aceChecker");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
app.get('/', (_req, res) => {
    res.send('Hello, World!');
});
app.post("/scan", asyncHandler(async (req, res) => {
    const html = req.body.html;
    const guidelineIds = req.body.guidelineIds;
    const report = await (0, aceChecker_1.aceCheck)(html, guidelineIds);
    res.json(report);
}));
app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
