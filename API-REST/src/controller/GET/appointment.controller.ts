import {Request, Response, NextFunction} from "express";
import ServiceAppointment from "../../services/appointment.services";

const serviceAppointments = new ServiceAppointment();

const getAppointmentsDoctor = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const appointments = await serviceAppointments.getAppointmentDoctor(id);
        res.status(200).send(appointments);
    }catch (e) {
        next(e)
    }
}

export {getAppointmentsDoctor}