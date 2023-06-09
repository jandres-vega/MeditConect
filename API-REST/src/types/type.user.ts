import {Document} from "mongoose";

interface User {
    first_name: string
    identification: string,
    last_name: string,
    age: number,
    cellphone: string
}

interface DocumenUser extends Document ,User {}

export {User, DocumenUser}