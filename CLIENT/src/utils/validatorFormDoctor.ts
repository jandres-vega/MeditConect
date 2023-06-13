import {ErrorsFormDoctor} from "../types/type.errors.ts";
import {PayloadDoctor} from "../types/types.doctor.ts";
export const validatoFormDoctor = (form: PayloadDoctor): ErrorsFormDoctor => {
  const errores: ErrorsFormDoctor = {
    firstName: '',
    lastName: '',
    email: '',
    consultorio: '',
    especialidad: ''
  }
  if (form.firstName === '') {
    errores.firstName = 'El nombre es requerido'
  }
  if (form.lastName === '') {
    errores.lastName = 'El apellido es requerido'
  }
  if (form.email === '') {
    errores.email = 'Debes Ingresar un correo'
  }
  if (form.consultorio === '') {
    errores.consultorio = 'Ingresa un consultorio'
  }
  // if (form.especialidad === '') {
  //   errores.especialidad = 'Ingresa como minimo una especialidad'
  // }
  return errores
}
