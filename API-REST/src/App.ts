import express, {Express} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {logErrors, handleError, handleErrorBoom} from "./middlewares/errors.handler";

import routes from './routes/index';

const app:Express = express();

app.use(morgan('dev'));
app.use(express.json())
app.use(cors())

routes(app);
app.use(logErrors);
app.use(handleErrorBoom);
app.use(handleError)
export default app;


