import pool from "../config/database"

const getAllLocations = () => {
    const query = 'select * from location';

    return pool.execute(query)
}

export default {
    getAllLocations
}