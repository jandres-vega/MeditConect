import {Document} from 'mongoose';
import {Schema} from "mongoose";
interface Doctor {
    _id: Schema.Types.ObjectId;
    first_name: string,
    last_name: string,
    email: string,
    consultorio: number,
    specialty: string,
}

interface DocumentDoctor extends Document, Doctor{}
export {DocumentDoctor, Doctor}