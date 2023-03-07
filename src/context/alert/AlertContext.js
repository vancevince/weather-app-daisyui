import { createContext, useReducer } from "react"
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  // set state
  const initialState = null

  // setup hooks
  const [state, dispatch] = useReducer(alertReducer, initialState)

  // Set an alert
  const setAlert = (message, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { message, type }
    })

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000)
  }

  return <AlertContext.Provider value={{ alert: state, setAlert }}>
    {children}
  </AlertContext.Provider>
}

export default AlertContext
