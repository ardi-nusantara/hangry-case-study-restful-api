import express, { Request, Response } from 'express';
import locationRoutes from './routes/location'
import menuRoutes from './routes/menu'
import cartRoutes from './routes/cart'
import checkoutRoutes from './routes/checkout'

const NAMESPACE = 'localhost';
const app = express();
const port = 5000;

/** Middleware */
app.use(express.json())

/** App Routes */
app.use('/location', locationRoutes)
app.use('/menu', menuRoutes)
app.use('/cart', cartRoutes)
app.use('/checkout', checkoutRoutes)


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});