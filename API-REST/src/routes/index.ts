import {Express} from "express";
import doctorRouter from './doctor.routes';
import userRouter from './user.routes';
import appointmentRoutes from "./appointment.routes";
function routes(app:Express):void {
    app.use('/doctor', doctorRouter);
    app.use('/user', userRouter);
    app.use('/appointment', appointmentRoutes);
}

export default routes;