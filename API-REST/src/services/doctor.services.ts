import {ModelDoctor} from "../Models/doctor.models";
import {Doctor} from "../types/type.doctor";

class DoctorServices {

    async addDoctor(doctor:Doctor) {
        const newDoctor = await new ModelDoctor(doctor);
        return newDoctor.save();
    }
}

export default DoctorServices;