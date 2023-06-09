import {Request, Response, NextFunction} from "express";
import Boom from '@hapi/boom'
import Errors from "../types/type.errors";
const logErrors = (error:any, req:Request, res:Response, next:NextFunction):void => {
    console.error(error);
    next(error);
}
const handleError = (error:any, req:Request, res:Response, next:NextFunction):void => {
    const formatError:Errors = {
        message: error.message,
        stack: error.stack
    }
    res.status(500).send(formatError)
}

const handleErrorBoom = (error:any, req:Request, res:Response, next:NextFunction):void => {
    if (Boom.isBoom(error)){
        const { output } = error;
        res.status(output.statusCode).json(output.payload);
    }
    next(error)
}

export {
    logErrors,
    handleError,
    handleErrorBoom
}