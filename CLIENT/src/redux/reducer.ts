interface myInitialState {
  doctores: any
}

const initialState: myInitialState = {
  doctores: []
}
type Action =
    | { type: 'ADD_DOCTORS', payload: string }
    | { type: 'ADD_USER', payload: String }





export const medicConnect = (state: myInitialState = initialState, action: Action) => {
  switch (action.type) {
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
