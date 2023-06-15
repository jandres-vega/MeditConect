import {Request, Response, NextFunction} from "express";
import DoctorServices from "../../services/doctor.services";

const doctorService = new DoctorServices();
const getDoctors = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const allDoctors = await doctorService.getAllDoctors();
        res.status(200).send(allDoctors);
    }catch (e) {
        next(e);
    }
}

const getDoctorById = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params;
        const doctorFind = await doctorService.getDoctorById(id);
        res.status(200).send(doctorFind);

    }catch (e) {
        next(e);
    }
}


export {
    getDoctors,
    getDoctorById
}