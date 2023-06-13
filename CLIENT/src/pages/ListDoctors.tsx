import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllDoctors} from '../redux/actions.ts'
import {Dispatch} from "redux";

const ListDoctors = () => {
    const dispatch:Dispatch = useDispatch();
    const doctors = useSelector(state  => state.doctores)
    React.useEffect(() => {
        dispatch(getAllDoctors());
    },[]);

    return (
        <div className="m-5">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Consultorio</th>
                    <th>Especialiadad</th>
                </tr>
                </thead>
                <tbody>
                {
                    doctors?.map( doc => (
                        <tr key={doc._id}>
                            <td>{doc._id.slice(0,5)}</td>
                            <td>{doc.first_name}</td>
                            <td>{doc.last_name}</td>
                            <td>{doc.email}</td>
                            <td>{doc.consultorio}</td>
                            <td>{doc.specialty}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default ListDoctors;