import express from "express";
import CheckoutController from "../controllers/checkout"

const router = express.Router();

router.get('/', CheckoutController.getAllCheckouts);
router.post('/', CheckoutController.addNewCheckout);

export default router;
