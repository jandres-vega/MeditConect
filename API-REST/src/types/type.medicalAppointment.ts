import {Document, Schema} from "mongoose";
interface MedicaAppointment {
    doctor: Schema.Types.ObjectId,
    user: Schema.Types.ObjectId,
    identification_patient: string,
    specialty: string[]
}
interface DocumentMedicalAppointment extends MedicaAppointment, Document {}

export {DocumentMedicalAppointment, MedicaAppointment}