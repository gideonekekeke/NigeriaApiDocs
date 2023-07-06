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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateRegions = exports.getSingleState = exports.getAllstates = void 0;
const StateData_json_1 = __importDefault(require("../utils/StateData.json"));
const getAllstates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAll = yield StateData_json_1.default.map((el) => {
            return el;
        });
        return res.status(200).json({
            message: "successfull",
            resultCount: getAll.length,
            cost: 0.0,
            result: getAll,
        });
    }
    catch (err) {
        return res.status(404).json({
            message: "an error occured",
        });
    }
});
exports.getAllstates = getAllstates;
const getSingleState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const regions = StateData_json_1.default.find((state) => state.id === id);
        if (!regions) {
            return res.status(404).json({ error: "State not found" });
        }
        return res.status(200).json({
            message: "successfull",
            cost: 0.0,
            result: regions,
        });
    }
    catch (err) {
        return res.status(404).json({
            message: "an error occured",
        });
    }
});
exports.getSingleState = getSingleState;
const getStateRegions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { region } = req.body;
        const Stateregions = StateData_json_1.default.filter((state) => state.region === region);
        if (!Stateregions) {
            return res.status(404).json({ error: "Region not found" });
        }
        return res.status(200).json({
            message: "successfull",
            resultCount: Stateregions.length,
            cost: 0.0,
            result: Stateregions,
        });
    }
    catch (err) {
        return res.status(404).json({
            message: "an error occured",
        });
    }
});
exports.getStateRegions = getStateRegions;
