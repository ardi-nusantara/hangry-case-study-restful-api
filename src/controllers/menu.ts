import { Request, Response } from 'express';
import MenuModel from '../models/menu'

const getAllMenus = async (req: Request, res: Response) => {
    try {
        const [data] = await MenuModel.getAllMenus()
    
        res.json({
            message: "GET All Menus success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }
}

export default {
    getAllMenus
}