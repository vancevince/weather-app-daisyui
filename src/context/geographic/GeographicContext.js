/**
 * Geographic Context controls the state related to city selection.
 * 
 * API call goes to the open weather geo direct url which is used to grab the
 * latitude and longitude of a city. These coordinates then get plugged into
 * the API call to the open weather forecast url.
 */

import { createContext, useReducer } from "react"
import geographicReducer from "./GeographicReducer"

const GeographicContext = createContext()

export const GEOGRAPHIC_URL = process.env.REACT_APP_OPEN_WEATHER_GEO_URL
export const FORECAST_URL = process.env.REACT_APP_FORECAST_URL
export const OPEN_WEATHER_TOKEN = process.env.REACT_APP_FORECAST_TOKEN

export const GeographicProvder = ({ children }) => {
  // set up initial object. replaces cities, setCities and loading, setLoading hooks with useState
  const initialState = {
    cities: [],
    city: {},
    forecast: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(geographicReducer, initialState)

  // get cities. used for testing purposes
  // Two-part call
  // first call get the city, second call get the lat and lon
  const searchCities = async (text) => {
    setLoading()

    const params = new URLSearchParams({
      q: text,
    })

    const response = await fetch(`${GEOGRAPHIC_URL}?${params}&limit=5&appid=${OPEN_WEATHER_TOKEN}`)

    // pull state from returned object
    const data = await response.json()

    // dispatch takes in a type and then the payload, data
    dispatch({
      type: 'GET_CITIES',
      payload: data
    })

    console.log(data)

    // TESTING: captured lat and lon
    const lat = data[0].lat
    const lon = data[0].lon
    console.log(lat)
    console.log(lon)
  }

  // Clear cities from state
  const clearCities = () => {
    dispatch({ type: 'CLEAR_CITIES' })
  }

  // NOT WORKING: figure out how to get data from searchCitis and pass it into forecast api
  // think about moving to FiveDayForecast component and dealing with api call and state there
  const getForecast = async (cities) => {
    const response = await fetch(
      `${FORECAST_URL}?lat=${cities[0].lat}&lon=${cities[0].lon}&appid=${OPEN_WEATHER_TOKEN}&units=imperial`
    )

    const data = await response.json()

    dispatch({
      type: 'GET_FORECAST',
      payload: data,
    })

    console.log(data)
  }


  // const getForecast = async (city) => {
  //   setLoading()
  //   // add call to searchCities here? need to get geographic data from search
  //   // then pass the lat and long to the fetch function

  //   const response = await fetch(`${FORECAST_URL}?lat=${city.lat}&lon=${city.lon}&appid=${OPEN_WEATHER_TOKEN}`)
  //   if (response.status === 404) {
  //     window.location = '/notfound'
  //   } else {
  //     const data = await response.json()

  //     dispatch({
  //       type: 'GET_CITY',
  //       payload: data,
  //     })
  //   }
  // }

  // Set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  // values listed here are avaialbe to underlying components
  return <GeographicContext.Provider value={{
    cities: state.cities,
    city: state.city,
    loading: state.loading,
    searchCities,
    clearCities,
    getForecast,
  }}>
    {children}
  </GeographicContext.Provider>
}

export default GeographicContext