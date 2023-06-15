import {model, Schema, Model} from 'mongoose';
import {DocumentDoctor} from "../types/type.doctor";


const doctorSchema:Schema<DocumentDoctor> = new Schema<DocumentDoctor>({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    consultorio: {
        type: Number,
        require: true
    },
    specialty: {
        type: String,
        required: true
    }
})

export const ModelDoctor:Model<DocumentDoctor> = model('Doctor', doctorSchema)