import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import logs from './middleware/logs';

const NAMESPACE = 'localhost';
const app = express();
const port = 5000;

/** Log the request */
app.use((req, res, next) => {
    /** Log the req */
    logs.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logs.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })
    
    next();
});

app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});