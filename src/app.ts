import express, { Request, Response } from 'express';
import logger from "morgan";
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();

const options = {
    swaggerDefinition: {
        info: {
            title: "Express TypeScript",
            version: "1.0.0"
        }
    },
    apis: ["routes/*"]
};
app.use("/spec", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.use(logger("dev"));

app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000"]
}));

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
});

export default app;