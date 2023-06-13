import {Request, Response, NextFunction} from "express";
import UserServices from "../../services/user.services";

const userServices = new UserServices();
export const getAllUsers = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const allUsers = await userServices.getAllUsers();
        res.status(200).send(allUsers);
    }catch (e) {
        next(e);
    }
}