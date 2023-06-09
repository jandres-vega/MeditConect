import dotenv from 'dotenv';
import Config from "../types/type.config";
dotenv.config();
export const config:Config = {
    user_db: process.env.USER_DB as string,
    name_db: process.env.NAME_DB as string,
    password: process.env.PASSWORD as string,
    port_server: process.env.PORT_SERVER as string
}