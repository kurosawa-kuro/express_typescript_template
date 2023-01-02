import express, { Request, Response } from 'express';

import setupLibrary from "./setupLibrary";
import asyncHandler from './utils/asyncHandler';

const app: express.Express = express();

setupLibrary(app);

app.get('/', asyncHandler(async (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
}));

export default app;