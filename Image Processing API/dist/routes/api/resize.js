"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizeRouter = express_1.default.Router();
resizeRouter.get('/', function (req, res) {
    res.send('resizing ...');
});
exports.default = resizeRouter;
