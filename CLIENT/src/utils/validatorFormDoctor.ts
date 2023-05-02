interface formDoctor {
  firstName: string
  lastName: string
  email: string
  consultorio: string
  especialidad: string
}

interface errors {
  firstName: string
  lastName: string
  email: string
  consultorio: string
  especialidad: string
}

export const validatoFormDoctor = (form: formDoctor): errors => {
  const errores: errors = {
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
