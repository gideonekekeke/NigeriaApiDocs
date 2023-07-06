"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MainController_1 = require("../controllers/MainController");
const router = express_1.default.Router();
router.route("/states").get(MainController_1.getAllstates);
router.route("/state").post(MainController_1.getSingleState);
router.route("/states/region").post(MainController_1.getStateRegions);
exports.default = router;
