import { expecialidades } from '../utils/infoMedicConect'
import '../styles/FormAppoiment.css'

const FormAppoiment = (): JSX.Element => {
  return (
        <section className="container container-form-appoint">
            <form className="row g-3">
                <div>
                    <label className="form-label">Ingrese el documento del pasiente</label>
                    <input type="text" className="form-control" placeholder="documento"/>
                </div>
                <select className="form-select">
                    {
                        expecialidades.map(item => (
                            <option>{item}</option>
                        ))
                    }
                </select>
                <button type="submit" className="btn btn-primary">Agregar cita</button>
            </form>
        </section>
  )
}

export default FormAppoiment
