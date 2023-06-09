import {model, Model, Schema} from "mongoose";
import {MedicaAppointment, DocumentMedicalAppointment} from "../types/type.medicalAppointment";

const medicalAppointmentSchema:Schema<DocumentMedicalAppointment>= new Schema({
    identification_patient: {
        type: String,
        require: true
    },
    specialty: {
        type: [String],
        require: true
    },

})

export const ModelUser:Model<MedicaAppointment> = model("medicalAppointment", medicalAppointmentSchema);