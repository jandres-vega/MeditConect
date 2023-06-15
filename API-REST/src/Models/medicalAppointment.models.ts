import { model, Model, Schema } from "mongoose";
import { DocumentMedicalAppointment } from "../types/type.medicalAppointment";

const medicalAppointmentSchema: Schema<DocumentMedicalAppointment> = new Schema<DocumentMedicalAppointment>({
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Personas"
    },
    identification_patient: {
        type: String,
        required: true
    },
    specialty: {
        type: [String],
        required: true
    },
});

export const ModelAppointment: Model<DocumentMedicalAppointment> = model<DocumentMedicalAppointment>("MedicalAppointment", medicalAppointmentSchema);