import React from "react";
import {ErrorsFormUser} from "../types/type.errors.ts";
import {useDispatch} from "react-redux";
import {addUser} from "../redux/actions.ts";
const errores:ErrorsFormUser  = {
    first_name: '',
    identification: '',
    last_name: '',
    age: '',
    cellphone: ''
}
export const useFormUser = (initialForm, validationForm) => {
    const [form, setForm] = React.useState(initialForm)
    const [errors, setErrors] = React.useState(errores)
    const dispatch = useDispatch()

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        setErrors(validationForm(form))
    }

    const addNewUser = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(errors)
        if (Object.values(errors).every((val) => val.trim() === '')){
            console.log("hola")
            dispatch(addUser(form));
        }
    }

    return {
        handleChange,
        addNewUser
    }

}