import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { medicConnect } from './reducer'

export const store = createStore(
  medicConnect,
  composeWithDevTools(applyMiddleware(thunk))
)
