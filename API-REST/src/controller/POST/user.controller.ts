import {Request, Response, NextFunction} from "express";
import UserServices from "../../services/user.services";
import {User} from "../../types/type.user";
const userService = new UserServices();
export const addUser = async(req:Request, res:Response, next:NextFunction):Promise<void> => {
    try {
        const body:User = req.body;
        const userNew = await userService.createUser(body);
        res.send(userNew);
    }catch (e) {
        next(e);
    }
}