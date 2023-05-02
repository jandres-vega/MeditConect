import React from 'react'
import { useDispatch } from 'react-redux';
import {addDoctors} from "../redux/actions";
interface form {
  first_name: string
  last_name: string
  email: string
  consultorio: string
  specialty: string
}

interface miReturnFunc {
  form: form
  errors: form
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  addDoctor: () => void
  handleSelectEspciality: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const errores: form = {
  first_name: '',
  last_name: '',
  email: '',
  consultorio: '',
  specialty: ''
}

export const useFormDoctor = (initialForm: form, validation: (form: form) => form): miReturnFunc => {
  const [form, setForm] = React.useState(initialForm)
  const [errors, setErrors] = React.useState(errores)
  const dispatch = useDispatch()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    setErrors(validation(form))
  }
  const handleSelectEspciality = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setForm({
      ...form,
      specialty: e.target.value
    })
  }
  const addDoctor = (): void => {
    if (Object.values(errors).every((val) => val.trim() === '')){
      dispatch(addDoctors(form))
    }else {
      console.log("otro hola")
    }
  }
  return {
    errors,
    form,
    handleChange,
    addDoctor,
    handleSelectEspciality
  }
}
