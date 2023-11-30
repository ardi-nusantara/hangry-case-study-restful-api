import express from "express";
import MenuController from "../controllers/menu"

const router = express.Router();

router.get('/', MenuController.getAllMenus);
router.get('/:menuId', MenuController.getMenuById);

export default router;