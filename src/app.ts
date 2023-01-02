import express, { Request, Response } from 'express';

import setupLibrary from "./setupLibrary";
import topRoute from './routes/topRoute';

const app: express.Express = express();

setupLibrary(app);

app.use('/', topRoute);

export default app;