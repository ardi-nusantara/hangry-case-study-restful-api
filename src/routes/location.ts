import express from "express";
import LocationController from "../controllers/location"

const router = express.Router();

router.get('/', LocationController.getAllLocations);

export default router;