import {Document} from "mongoose";
interface MedicaAppointment {
    identification_patient: string,
    specialty: string[]
}
interface DocumentMedicalAppointment extends MedicaAppointment, Document {}

export {DocumentMedicalAppointment, MedicaAppointment}