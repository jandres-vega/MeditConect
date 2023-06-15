import Boom from "@hapi/boom";
import {ModelUser} from "../Models/user.models";
import {User} from "../types/type.user";

class UserServices {
    async getAllUsers(){
        return ModelUser.find();
    }
    async createUser(user:User){
        const newUser = await new ModelUser(user);
        const allUsers = await this.getAllUsers();
        const findUser = allUsers.find(usr => {
            if (usr.identification === user.identification){
                return usr
            }
        })
        if (findUser){
            throw Boom.conflict("El usuario ya se encuentra registrado")
        }
        return newUser.save();
    }
}

export default UserServices;