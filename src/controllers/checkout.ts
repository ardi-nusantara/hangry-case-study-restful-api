import { Request, Response } from 'express';
import CheckoutModel from '../models/checkout'

const getAllCheckouts = async (req: Request, res: Response) => {
    try {
        const [data] = await CheckoutModel.getAllCheckouts()

        res.json({
            message: "GET All Checkouts success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }
}

const addNewCheckout = async (req: Request, res: Response) => {
    const { body } = req;

    if (!body.cart_id || !body.total_price) {
        return res.status(400).json({
            message: 'The data may be wrong or are incomplete',
            data: null,
        })
    }

    try {        
        await CheckoutModel.addNewCheckout(body);
        res.status(201).json({
            message: 'CREATE new checkout success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

export default {
    getAllCheckouts,
    addNewCheckout
}