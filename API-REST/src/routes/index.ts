import {Express} from "express";
import doctorRouter from './doctor.routes';

function routes(app:Express):void {
    app.use('/doctor', doctorRouter);
}

export default routes;