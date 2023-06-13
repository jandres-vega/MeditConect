import axios, {AxiosResponse} from 'axios'
import { Dispatch } from 'redux';
import {alertMessage} from "../utils/alertMessages.ts";
import {PayloadDoctor} from "../types/types.doctor.ts";
import {User} from "../types/types.user.ts";

export const addDoctors = (payload: PayloadDoctor) => {
  return async (dispatch: Dispatch) => {
    try {
      const response:AxiosResponse = await axios.post('http://localhost:3005/doctor', payload);
      dispatch({ type: 'ADD_DOCTORS', payload: response.data });
      await alertMessage("Registro exitoso", 'success')
    } catch (error) {
      console.error(error)
      await alertMessage(error.response.data.message, 'error')
    }
  }
}

export const addUser = (payload:User) => {
  return async (dispatch:Dispatch) => {
    try {
      const response:AxiosResponse = await axios.post('http://localhost:3005/user', payload);
      dispatch({type: 'ADD_USER', payload: response.data})
      await alertMessage("Registro exitoso", 'success')
    }catch (error) {
      await alertMessage(error.response.data.message, 'error')
    }
  }
}
