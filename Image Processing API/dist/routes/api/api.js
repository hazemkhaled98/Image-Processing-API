"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var validator_1 = __importDefault(require("../../util/validator"));
var sharp_1 = __importDefault(require("../../util/sharp"));
var apiRouter = express_1.default.Router();
apiRouter.get('/', validator_1.default, sharp_1.default, function (req, res) {
    var cachePath = path_1.default.join(__dirname, '..', '..', 'assets', 'cache', res.locals.cacheName);
    var code = res.locals.isCached ? 200 : 201;
    res.status(code).sendFile(cachePath);
});
exports.default = apiRouter;
