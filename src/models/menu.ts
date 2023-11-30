import pool from "../config/database"

const getAllMenus = () => {
    const query = 'select * from menu';

    return pool.execute(query)
}

const getMenuById = (menuId: number) => {
    const query = `select * from menu where id=${menuId}`;

    return pool.execute(query)
}

export default {
    getAllMenus,
    getMenuById,
}