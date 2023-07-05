import { Request, Response } from "express";
import stateData from "../utils/StateData.json";

export const getAllstates = async (req: Request, res: Response) => {
	try {
		const getAll = await stateData.map((el) => {
			return el;
		});

		return res.status(200).json({
			message: "successfull",
			resultCount: getAll.length,
			cost: 0.0,
			result: getAll,
		});
	} catch (err) {
		return res.status(404).json({
			message: "an error occured",
		});
	}
};

export const getSingleState = async (req: Request, res: Response) => {
	try {
		const { id } = req.body;

		const regions = stateData.find((state) => state.id === id);
		if (!regions) {
			return res.status(404).json({ error: "State not found" });
		}

		return res.status(200).json({
			message: "successfull",
			cost: 0.0,
			result: regions,
		});
	} catch (err) {
		return res.status(404).json({
			message: "an error occured",
		});
	}
};

export const getStateRegions = async (req: Request, res: Response) => {
	try {
		const { region } = req.body;

		const Stateregions = stateData.filter((state) => state.region === region);
		if (!Stateregions) {
			return res.status(404).json({ error: "Region not found" });
		}

		return res.status(200).json({
			message: "successfull",
			resultCount: Stateregions.length,
			cost: 0.0,
			result: Stateregions,
		});
	} catch (err) {
		return res.status(404).json({
			message: "an error occured",
		});
	}
};
