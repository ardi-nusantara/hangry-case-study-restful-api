import { Request, Response } from 'express';
import LocationModel from '../models/location'

const getAllLocations = async (req: Request, res: Response) => {
    try {
        const [data] = await LocationModel.getAllLocations()
    
        res.json({
            message: "GET All Locations success",
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
    getAllLocations
}