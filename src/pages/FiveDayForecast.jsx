import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GeographicContext, { FORECAST_URL, OPEN_WEATHER_TOKEN } from '../context/geographic/GeographicContext'

/**NOTES
 * - Cities data is being passed into the componenet
 * - think about moing getForecast function to this component
 *    or change it in GeographicContext to take in the cities object, 
 *    then make calls to cities[0].lat and cities[0].lon
 */

function FiveDayForecast() {
  const { getForecast, cities } = useContext(GeographicContext)

  const [forecast, setForecast] = useState(null)

  const lat = cities[0].lat
  const lon = cities[0].lon

  console.log(lat)
  console.log(lon)

  // test getting the forecast
  // structure it like the get cities request in context
  const fetchForecast = async () => {
    const response = await fetch(
      `${FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_TOKEN}`
    )

    const data = await response.json()
    console.log(data)
    return data
  }

  const params = useParams()

  useEffect(() => {
    getForecast(params.city)
  }, [])

  return (
    <div>
      FiveDayForecast for: {cities[0].name}
      <br />
      <br />
      {cities[0].lat}
      <br />
      {cities[0].lon}
    </div>
  )
}

export default FiveDayForecast
