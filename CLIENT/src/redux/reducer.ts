interface myInitialState {
  doctores: any
}

const initialState: myInitialState = {
  doctores: []
}
type Action =
    | { type: 'ADD_DOCTORS', payload: string }
    | { type: 'GET_DOCTORS', payload: number }

export const medicConnect = (state: myInitialState = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_DOCTORS':
      return {
        ...state,
        doctores: [...state.doctores, action.payload]
      }
    default:
      return state
  }
}
