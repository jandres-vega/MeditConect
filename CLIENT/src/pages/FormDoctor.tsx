import { expecialidades } from '../utils/infoMedicConect'
import { useFormDoctor } from '../hooks/useFormDoctor'
import { validatoFormDoctor } from '../utils/validatorFormDoctor'
import '../styles/FormDoctor.css'

interface form {
    first_name: string
    last_name: string
    email: string
    consultorio: string
    specialty: string
}

const initialForm: form = {
    first_name: '',
    last_name: '',
    email: '',
    consultorio: '',
    specialty: ''
}
const FormDoctor = (): JSX.Element => {
  const { handleChange, addDoctor, handleSelectEspciality, errors } = useFormDoctor(initialForm, validatoFormDoctor)

  return (
        <section className="container container-form-doctor">
            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Ingrese el nombre</label>
                    <input onChange={handleChange}
                           type="text" name="first_name"
                           className="form-control input"
                           placeholder="nombre"/>
                    {
                        (errors.firstName !== '') &&
                        <span id="error-nombre" className="text-danger"> {errors.firstName} </span>
                    }
                </div>
                <div className="col-md-6">
                    <label className="form-label">Ingrese sus apellidos</label>
                    <input onChange={handleChange}
                           type="text" name="last_name" className="form-control input" placeholder="apellido"/>
                    {
                        (errors.lastName !== '') &&
                        <span id="error-nombre" className="text-danger"> {errors.lastName} </span>
                    }
                </div>
                <div className="col-md-6">
                    <label className="form-label">Ingrese un correo</label>
                    <input onChange={handleChange}
                           type="text" name="email" className="form-control input" placeholder="email"/>
                    {
                        (errors.email !== '') &&
                        <span id="error-nombre" className="text-danger"> {errors.email} </span>
                    }
                </div>
                <div className="col-md-6">
                    <label className="form-label">Ingrese el consultorio</label>
                    <input onChange={handleChange}
                           type="text" name="consultorio" className="form-control input" placeholder="consultorio"/>
                    {
                        (errors.consultorio !== '') &&
                        <span id="error-nombre" className="text-danger"> {errors.consultorio} </span>
                    }
                </div>
                <div className="col-md-6">
                    <select onChange={handleSelectEspciality} className="form-select select-esp">
                        {
                            expecialidades.map(item => (
                                <option key={item}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <button onClick={addDoctor} type="button" className="btn btn-primary btn-add">Ingresar datos</button>
            </form>
        </section>
  )
}

export default FormDoctor
