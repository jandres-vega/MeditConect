import {Document} from 'mongoose';
interface Doctor {
    first_name: string,
    last_name: string,
    email: string,
    consultorio: number,
    specialty: string,
}

interface DocumentDoctor extends Document, Doctor{}
export {DocumentDoctor, Doctor}