import Boom from "@hapi/boom";
import {Types} from 'mongoose';
import {ModelDoctor} from "../Models/doctor.models";
import {Doctor} from "../types/type.doctor";

class DoctorServices {
    async getAllDoctors(){
        return ModelDoctor.find()
    }
    async getDoctorById(id:string){
        if (!Types.ObjectId.isValid(id)) {
            throw Boom.badRequest("El id del doctor es incorrecto");
        }
        const doctorFind = await ModelDoctor.findById(id);
        if (!doctorFind){
            throw Boom.notFound("El Doctor no existe en la base de datos");
        }
        return doctorFind;
    }
    async getAppointmentDoctor(id:string) {
        return ModelDoctor.find({_id: id})
    }
    async addDoctor(doctor:Doctor) {
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