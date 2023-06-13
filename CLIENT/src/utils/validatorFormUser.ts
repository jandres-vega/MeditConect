import {ErrorsFormUser} from "../types/type.errors.ts";
import {User} from "../types/types.user.ts";

export const validationFormUser = (formUser:User):ErrorsFormUser => {
    const errores: ErrorsFormUser = {
        first_name: "",
        identification: "",
        last_name: "",
        age: "",
        cellphone: ""
    }

    if (formUser.first_name === '') {
        errores.first_name = 'El nombre es requerido'
    }
    if (formUser.identification === '') {
        errores.identification = 'Ingresa un numero de identificacion'
    }
    if (formUser.last_name === '') {
        errores.last_name = 'El apellido es requerido'
    }
    if (formUser.age === '') {
        errores.age = 'Debes Ingresar la edad'
    }
    if (formUser.cellphone === '') {
        errores.cellphone = 'Debes Ingresar u numero telefonico'
    }
    return errores

}