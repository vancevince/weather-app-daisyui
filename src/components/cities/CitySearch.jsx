import React, { useState, useContext } from 'react'
import GeographicContext from '../../context/geographic/GeographicContext'
import AlertContext from '../../context/alert/AlertContext'

function CitySearch() {
  // search text
  const [text, setText] = useState('')

  // use the geo context from geo provider
  const { cities, searchCities, clearCities } = useContext(GeographicContext)

  // pull out alert context for use
  const { setAlert } = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text === '') {
      setAlert('Please enter a city', 'error')
    } else {
      searchCities(text)
      setText('')
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder='Enter a City'
                value={text}
                onChange={handleChange}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type='submit'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {cities.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg"
            onClick={clearCities}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default CitySearch
