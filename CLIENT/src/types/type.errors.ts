interface ErrorsFormDoctor {
    firstName: string
    lastName: string
    email: string
    consultorio: string
    especialidad: string
}
interface ErrorsFormUser {
    first_name: string,
    identification: string,
    last_name: string,
    age: number,
    cellphone: string
}

export {
    ErrorsFormDoctor,
    ErrorsFormUser
}