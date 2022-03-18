"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_1 = __importDefault(require("./api/api"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    res.status(200).send('Enter the params in the URL above..');
});
router.use('/api', api_1.default);
exports.default = router;
