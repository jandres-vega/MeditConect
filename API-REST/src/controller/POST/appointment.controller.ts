import {Request, Response, NextFunction} from "express";
import ServiceAppointment from '../../services/appointment.services';
const serviceAppointment = new ServiceAppointment();
const createAppointment = async(req:Request, res:Response, next:NextFunction):Promise<void> => {
    try {
        const body = req.body;
        const newAppointment = await serviceAppointment.createdAppointment(body);
        res.status(200).send(newAppointment);
    }catch (e) {
        next(e)
    }
}

export {createAppointment}