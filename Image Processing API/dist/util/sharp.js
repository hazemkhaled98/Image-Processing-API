"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var sharp_1 = __importDefault(require("sharp"));
var processor = function (req, res, next) {
    res.locals.cacheName = "".concat(res.locals.name.split('.')[0], "_").concat(res.locals.width, "_").concat(res.locals.height, ".jpg");
    var cachePath = path_1.default.join(__dirname, '..', 'assets', 'cache', res.locals.cacheName);
    fs_1.default.access(cachePath, function (err) {
        if (err) {
            res.locals.isCached = false;
            (0, sharp_1.default)(res.locals.filePath)
                .resize(res.locals.width, res.locals.height)
                .toFile(cachePath)
                .then(function () { return next(); })
                .catch(function (e) {
                return res
                    .status(501)
                    .send('Something went wrong while processsing!');
            });
        }
        else {
            res.locals.isCached = true;
            next();
        }
    });
};
exports.default = processor;
