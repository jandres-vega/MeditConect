import {model, Schema, Model} from 'mongoose';
import {Doctor, DocumentDoctor} from "../types/type.doctor";


const doctorSchema:Schema<DocumentDoctor> = new Schema<DocumentDoctor>({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    consultorio: {
        type: Number,
        require: true
    },
    specialty: {
        type: String,
        require: true
    }
})


export const ModelDoctor:Model<DocumentDoctor> = model('Doctor', doctorSchema)