import express from 'express';
import mainRouter from "../api/main.router";
import { errorHandler } from './error.handler';

let app = express();

app.use(express.json());

app.use(mainRouter);

//manejador de errores
app.use(errorHandler);

export default app;