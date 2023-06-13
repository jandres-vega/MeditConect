import {Request, Response, NextFunction} from "express";
import {Doctor} from "../../types/type.doctor";
import DoctorServices from "../../services/doctor.services";

const doctorService = new DoctorServices();
const addDoctor = async(req:Request, res:Response, next:NextFunction):Promise<void> => {
    try {
        const body:Doctor = req.body;
        const newDoctor:Doctor = await doctorService.addDoctor(body);
        res.status(200).send(newDoctor)
    }catch (e) {
        next(e)
    }
}

export {addDoctor}