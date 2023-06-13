import {Express} from "express";
import doctorRouter from './doctor.routes';
import userRouter from './user.routes';
function routes(app:Express):void {
    app.use('/doctor', doctorRouter);
    app.use('/user', userRouter)
}

export default routes;