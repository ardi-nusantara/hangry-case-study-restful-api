import express, { Request, Response, NextFunction } from 'express';
import logs from './config/logs';
import locationRoutes from './routes/location'
import menuRoutes from './routes/menu'

const NAMESPACE = 'localhost';
const app = express();
const port = 5000;

/** Log the request */
app.use((req: Request, res: Response, next: NextFunction) => {
    /** Log the req */
    logs.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logs.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })

    next();
});

/** Middleware */
app.use(express.json())

/** App Routes */
app.use('/location', locationRoutes)
app.use('/menu', menuRoutes)


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});