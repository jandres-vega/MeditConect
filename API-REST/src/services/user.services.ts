import {ModelUser} from "../Models/user.models";
import {User} from "../types/type.user";

class UserServices {
    async createUser(user:User){
        const newUser = await new ModelUser(user);
        return newUser.save();
    }
}

export default UserServices;