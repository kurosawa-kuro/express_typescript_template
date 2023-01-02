import express, { Request, Response } from 'express';
import logger from "morgan";
import cors from 'cors';

const app = express();

app.use(logger("dev"));

app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000"]
}));

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
});

export default app;