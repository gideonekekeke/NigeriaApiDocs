import express from "express";
import {
	getAllstates,
	getSingleState,
	getStateRegions,
} from "../controllers/MainController";
const router = express.Router();

router.route("/states").get(getAllstates);
router.route("/state").post(getSingleState);
router.route("/states/region").post(getStateRegions);

export default router;
