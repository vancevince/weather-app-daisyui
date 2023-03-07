/**
 * Reducers for the geographic state. 
 * 
 * NOTES: 
 *  - think about changing GET_CITY to GET_FORECAST, more accurate description of action type
 */

const geographicReducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CITIES':
      return {
        ...state,
        cities: [],
      }
    case 'GET_CITIES':
      return {
        ...state,
        cities: action.payload,
        loading: false,
      }
    case 'GET_CITY':
      return {
        ...state,
        city: action.payload,
        loading: false,
      }
    case 'GET_FORECAST':
      return {
        ...state,
        forecast: action.payload,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default geographicReducer