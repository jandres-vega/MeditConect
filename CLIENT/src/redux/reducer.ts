interface myInitialState {
  doctores: [],
  users: []
}

const initialState:myInitialState = {
  doctores: [],
  users: []
}
type Action =
    | { type: 'ADD_DOCTORS', payload: string }
    | { type: 'ADD_USER', payload: String }
    | { type: 'GET_ALL_DOCTORS'}
    | { type: 'GET_ALL_USERS'}

export const medicConnect = (state:myInitialState = initialState, action: Action) => {
  switch (action.type) {
    case 'GET_ALL_DOCTORS':
      return {
        ...state,
        doctores: action.payload
      }
    case 'GET_ALL_USERS':
      return {
        ...state,
        users: action.payload
      }

    case 'ADD_USER':
      return {
        ...state
      }
    case 'ADD_DOCTORS':
      return {
        ...state,
      }
      default:
        return state
  }
}
