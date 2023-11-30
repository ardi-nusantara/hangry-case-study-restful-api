import pool from "../config/database"

interface Checkout {
    cart_id: number;
    total_price: number;
    created_at: Date;
}

const getAllCheckouts = () => {
    const query = 'select * from checkout';

    return pool.execute(query)
}

const addNewCheckout = (body: Checkout) => {
    const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const query = ` INSERT INTO checkout (cart_id, total_price, created_at) 
                    VALUES ('${body.cart_id}', '${body.total_price}', '${created_at}')`;

    return pool.execute(query);
}

export default {
    getAllCheckouts,
    addNewCheckout,
}