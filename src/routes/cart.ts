import express from "express";
import CartController from "../controllers/cart"

const router = express.Router();

router.get('/', CartController.getAllCarts);
router.post('/', CartController.addNewCart);
router.patch('/:cartId', CartController.editCart);
router.delete('/:cartId', CartController.removeCart);

export default router;
