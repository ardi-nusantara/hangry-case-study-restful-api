import pool from "../config/database"

interface Cart {
    menu_id: number;
    quantity: number;
    total_price: number;
}

const getAllCarts = () => {
    const query = 'select * from cart';

    return pool.execute(query)
}

const addNewCart = (body: Cart) => {
    const query = ` INSERT INTO cart (menu_id, quantity, total_price) 
                    VALUES ('${body.menu_id}', '${body.quantity}', '${body.total_price}')`;

    return pool.execute(query);
}

const editCart = (body: Cart, cartId: number) => {
    const query = `  UPDATE cart 
                        SET quantity='${body.quantity}', total_price='${body.total_price}' 
                        WHERE id=${cartId}`;

    return pool.execute(query);
}

const removeCart = (cartId: number) => {
    const query = `DELETE FROM cart WHERE id=${cartId}`;

    return pool.execute(query);
}


export default {
    getAllCarts,
    addNewCart,
    editCart,
    removeCart
}