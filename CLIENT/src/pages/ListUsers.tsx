import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from '../redux/actions.ts'

const ListUsers = () => {
    const dispatch = useDispatch();
    const allUsers = useSelector(state => state.users);

    React.useEffect(() => {
        dispatch(getAllUsers());
    }, [])
    return (
        <div className="m-5">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Identificacion</th>
                    <th>Cellphone</th>
                </tr>
                </thead>
                <tbody>
                {
                    allUsers?.map( doc => (
                        <tr key={doc._id}>
                            <td>{doc._id.slice(0,5)}</td>
                            <td>{doc.first_name}</td>
                            <td>{doc.last_name}</td>
                            <td>{doc.identification}</td>
                            <td>{doc.cellphone}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default ListUsers;