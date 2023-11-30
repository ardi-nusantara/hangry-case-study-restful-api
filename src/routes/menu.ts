import express from "express";
import MenuController from "../controllers/menu"

const router = express.Router();

router.get('/', MenuController.getAllMenus);

export default router;