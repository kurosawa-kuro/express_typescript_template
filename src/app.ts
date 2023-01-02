import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000"]
}));

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
});

export default app;