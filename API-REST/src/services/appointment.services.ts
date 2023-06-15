import {ModelAppointment} from "../Models/medicalAppointment.models";
import {MedicaAppointment} from "../types/type.medicalAppointment";

class ServiceAppointment {
    async createdAppointment(appointment: MedicaAppointment){
        const newAppointment = await new ModelAppointment(appointment);
        return newAppointment.save();
    }
    async getAppointmentDoctor(id:string) {
        return ModelAppointment.find({doctor: id}).populate("doctor").populate("user")
    }
}
export default ServiceAppointment;