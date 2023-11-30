import { Request, Response } from 'express';
import CartModel from '../models/cart'

const getAllCarts = async (req: Request, res: Response) => {
    try {
        const [data] = await CartModel.getAllCarts()

        res.json({
            message: "GET All Carts success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }
}

const addNewCart = async (req: Request, res: Response) => {
    const { body } = req;

    if (!body.menu_id || !body.quantity || !body.total_price) {
        return res.status(400).json({
            message: 'The data is incomplete',
            data: null,
        })
    }

    try {        
        await CartModel.addNewCart(body);
        res.status(201).json({
            message: 'CREATE new cart success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const editCart = async (req: Request, res: Response) => {
    const cartId: number = parseInt(req.params.cartId, 10);
    const { body } = req;

    try {
        await CartModel.editCart(body, cartId);
        res.json({
            message: 'UPDATE cart success',
            data: {
                id: cartId,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const removeCart = async (req: Request, res: Response) => {
    const cartId: number = parseInt(req.params.cartId, 10);
    
    try {
        await CartModel.removeCart(cartId);
        res.json({
            message: 'DELETE cart success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

export default {
    getAllCarts,
    addNewCart,
    editCart,
    removeCart
}