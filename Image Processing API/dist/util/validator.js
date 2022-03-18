"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var validator = function (req, res, next) {
    res.locals.name = req.query.name;
    res.locals.width = Number(req.query.width);
    res.locals.height = Number(req.query.height);
    try {
        res.locals.filePath = path_1.default.join(__dirname, '..', 'assets', 'images', res.locals.name); //../assets/images/filename
    }
    catch (error) {
        res.status(400);
        throw 'No filename query...';
    }
    fs_1.default.access(res.locals.filePath, function (err) {
        if (err) {
            res.status(404).send('Image does not exsit!');
        }
        else if (isNaN(res.locals.width) ||
            isNaN(res.locals.height) ||
            res.locals.width <= 0 ||
            res.locals.height <= 0) {
            res.status(400).send("invalid input");
        }
        else {
            next();
        }
    });
};
exports.default = validator;
