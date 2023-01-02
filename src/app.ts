import express, { Request, Response } from 'express';

import setupLibrary from "./setupLibrary";

const app: express.Express = express();

setupLibrary(app);

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
});

export default app;