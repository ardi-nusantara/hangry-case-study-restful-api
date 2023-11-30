import express, { Request, Response, NextFunction } from 'express';
import logs from './config/logs';

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

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});