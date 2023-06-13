import Boom from "@hapi/boom";
import {ModelDoctor} from "../Models/doctor.models";
import {Doctor} from "../types/type.doctor";

class DoctorServices {
    async getAllDoctors(){
        return ModelDoctor.find()
    }
    async addDoctor(doctor:Doctor):Promise<Doctor> {
        const newDoctor = await new ModelDoctor(doctor);
        const allDoctors = await this.getAllDoctors();
        const findDoctor = allDoctors.find(doc => {
            if (doc.email === doctor.email){
                return doc
            }
        })
        if (findDoctor){
            throw Boom.conflict("Ya se encuentra Registrado")
        }else {
            return newDoctor.save();
        }
    }
}

export default DoctorServices;