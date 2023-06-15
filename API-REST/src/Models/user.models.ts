import {model, Model, Schema} from "mongoose";
import {DocumenUser} from "../types/type.user";

const userSchema:Schema<DocumenUser>= new Schema({
    first_name: {
        type: String,
        required: true
    },
    identification: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    cellphone: {
        type: String,
        required: true
    }
})

export const ModelUser:Model<DocumenUser> = model("Personas", userSchema)