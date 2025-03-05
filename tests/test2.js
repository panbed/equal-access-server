"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
var path_1 = require("path");
var axios_1 = require("axios");
var htmlDir = './html-files';
var PORT = 3000;
var guidelineIds = ['WCAG_2_2'];
function runTests() {
    return __awaiter(this, void 0, void 0, function () {
        var files, outputDir, _loop_1, i;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promises_1.default.readdir(htmlDir)];
                case 1:
                    files = _a.sent();
                    outputDir = path_1.default.join(__dirname, 'output');
                    return [4 /*yield*/, promises_1.default.mkdir(outputDir, { recursive: true })];
                case 2:
                    _a.sent();
                    _loop_1 = function (i) {
                        var _loop_2, _i, files_1, file;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _loop_2 = function (file) {
                                        var filePath, html, start;
                                        return __generator(this, function (_c) {
                                            switch (_c.label) {
                                                case 0:
                                                    if (path_1.default.extname(file) !== '.html')
                                                        return [2 /*return*/, "continue"];
                                                    filePath = path_1.default.join(htmlDir, file);
                                                    return [4 /*yield*/, promises_1.default.readFile(filePath, 'utf-8')];
                                                case 1:
                                                    html = _c.sent();
                                                    start = Date.now();
                                                    try {
                                                        console.log("starting request ".concat(i, " for ").concat(file));
                                                        axios_1.default.post("http://localhost:".concat(PORT, "/scan"), {
                                                            html: html,
                                                            guidelineIds: guidelineIds
                                                        }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                                                            var outPath;
                                                            return __generator(this, function (_a) {
                                                                switch (_a.label) {
                                                                    case 0:
                                                                        console.log("".concat(file, ": ").concat(Date.now() - start, "ms"));
                                                                        outPath = './output/' + i + file.replace('.html', '.json');
                                                                        return [4 /*yield*/, promises_1.default.writeFile(outPath, JSON.stringify(response.data, null, 2))];
                                                                    case 1:
                                                                        _a.sent();
                                                                        console.log("Output written to ".concat(outPath));
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        }); });
                                                    }
                                                    catch (err) {
                                                        console.error("".concat(file, " error after ").concat(Date.now() - start, "ms:"), err.message);
                                                    }
                                                    return [2 /*return*/];
                                            }
                                        });
                                    };
                                    _i = 0, files_1 = files;
                                    _b.label = 1;
                                case 1:
                                    if (!(_i < files_1.length)) return [3 /*break*/, 4];
                                    file = files_1[_i];
                                    return [5 /*yield**/, _loop_2(file)];
                                case 2:
                                    _b.sent();
                                    _b.label = 3;
                                case 3:
                                    _i++;
                                    return [3 /*break*/, 1];
                                case 4: return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < 100)) return [3 /*break*/, 6];
                    return [5 /*yield**/, _loop_1(i)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/];
            }
        });
    });
}
runTests();
