import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { expecialidades } from '../utils/infoMedicConect';
import {getAllDoctors} from '../redux/actions.ts'
import '../styles/FormAppoiment.css'

const FormAppoiment = (): JSX.Element => {
    const dispatch = useDispatch();
    const doctors = useSelector(state => state.doctores);

    React.useEffect(() => {
        dispatch(getAllDoctors())
    },[]);

  return (
        <section className="container container-form-appoint">
            <form className="row g-3">
                <div className="col-md-6">
                    <label>Doctor:</label>
                    <select className="form-select select-esp">
                        {
                            doctors.map(doc => (
                                <option key={doc._id} value={doc._id}>{`${doc.first_name} ${doc.last_name}`}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label className="form-label">Ingrese el documento del pasiente</label>
                    <input type="text" className="form-control" placeholder="documento"/>
                </div>
                <select className="form-select">
                    {
                        expecialidades.map(item => (
                            <option key={item}>{item}</option>
                        ))
                    }
                </select>
                <button type="submit" className="btn btn-primary">Agregar cita</button>
            </form>
        </section>
  )
}

export default FormAppoiment
