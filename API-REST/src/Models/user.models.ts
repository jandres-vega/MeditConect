import {model, Model, Schema} from "mongoose";
import {User, DocumenUser} from "../types/type.user";

const userSchema:Schema<DocumenUser>= new Schema({
    first_name: {
        type: String,
        require: true
    },
    identification: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    cellphone: {
        type: String,
        require: true
    }
})

export const ModelUser:Model<User> = model("Personas", userSchema)