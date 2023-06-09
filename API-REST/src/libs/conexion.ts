import mongoose from "mongoose";
import {config} from "../config";

const URL:string = `mongodb+srv://${config.user_db}:${config.password}@demo.libza8m.mongodb.net/${config.name_db}`;
const connect = async ():Promise<void> => {
    await mongoose.connect(URL)
}

export default connect;