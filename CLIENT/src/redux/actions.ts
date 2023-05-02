import axios from 'axios'
import { Dispatch } from 'redux';
interface payloadDoctor {
  firstName: string
  lastName: string
  email: string
  consultorio: string
  especialidad: string
}

export const addDoctors = (payload: payloadDoctor) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post('http://localhost:3005/doctor', payload);
      dispatch({ type: 'ADD_DOCTORS', payload: response.data });
    } catch (error) {
      console.error(error)
    }
  }
}
