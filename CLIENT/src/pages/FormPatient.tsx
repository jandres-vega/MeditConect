import '../styles/FormPatient.css'
import {useFormUser} from "../hooks/useFormUser.ts";
import {validationFormUser} from "../utils/validatorFormUser.ts";
import {User} from "../types/types.user.ts";

const initialForm:User = {
    first_name: '',
    identification: '',
    last_name: '',
    age: '',
    cellphone: ''
}

const FormPatient = (): JSX.Element => {
    const {handleChange, addNewUser} = useFormUser(initialForm, validationFormUser)
  return (
        <section className="container container-form-persons">
            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Ingrese el nombre</label>
                    <input
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                        className="form-control"
                        id="inputEmail4"
                        placeholder="nombre"
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Ingrese sus apellidos</label>
                    <input onChange={handleChange}
                           type="text"
                           name="last_name"
                           className="form-control"
                           id="inputEmail4"
                           placeholder="apellido"
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">ingrese su cedula</label>
                    <input
                        type="text"
                        name="identification"
                        onChange={handleChange}
                        className="form-control"
                        id="inputEmail4"
                        placeholder="cedula"
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Ingrese su edad</label>
                    <input
                        type="text"
                        className="form-control"
                        name="age"
                        id="inputEmail4"
                        onChange={handleChange}
                        placeholder="edad"
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Ingrese su numero de telefono</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="cellphone"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="telefono"
                    />
                </div>
                <button onClick={addNewUser} className="btn btn-primary col-md-12">Ingresar datos</button>
            </form>
        </section>
  )
}

export default FormPatient
