import React from 'react'
import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import CityItem from './CityItem'
import GeographicContext from '../../context/geographic/GeographicContext'

/** NOTES
 * GEO Code information for Open Weather: https://openweathermap.org/api/geocoding-api
 * Read up how to use this api to get a city name. Will need to feed this to another
 * call to get the lat and lon for the city
 * 
 */

function CityResults() {
  const { cities, loading } = useContext(GeographicContext)

  // quick check that data has been fetched
  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {cities.map((city) => (
          <CityItem key={city.id} city={city} />
        ))}
      </div>
    )
  } else {
    return (<Spinner />)
  }
}

export default CityResults
