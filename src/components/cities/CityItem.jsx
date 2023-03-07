import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/** NOTES
 * Before moving forward need to figure out how to get the latitutde and longitude via
 * second api call to the forecast url. Have a handwritten example in notebook,
 * also can refer to this link, which handwritten note is based on:
 * 
 */

function CityItem({ city }) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className="flex-row items-center space-x-4 card-body">
        <div className='avatar'>
          <div className='rouned-full shadow w-14 h-14'>
            <img src="" alt="" />
          </div>
        </div>

        <div>
          <h2 className='card-title'>{city.name}</h2>
          <Link className='text-base-content text-opacity-40' to={`/forecast`}>
            Go to City's Five-Day Forecast
          </Link>
        </div>
      </div>
    </div>
  )
}

CityItem.propTypes = {
  city: PropTypes.object.isRequired,
}

export default CityItem
