import {Request, Response, NextFunction} from "express";
import DoctorServices from "../../services/doctor.services";

const doctorService = new DoctorServices();
export const getDoctors = async(req:Request, res:Response, next:NextFunction):Promise<void> => {
    try {
        const allDoctors = await doctorService.getAllDoctors();
        res.status(200).send(allDoctors);
    }catch (e) {
        next(e);
    }
}