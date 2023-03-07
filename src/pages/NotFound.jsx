import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-6xl">
            Ooops, dude, this is not where you parked your app!
          </h1>
          <br />
          <p className='text-5xl mb-8'>404 - Page not found</p>
          <Link className='btn btn-primary btn-lg' to='/'>
            <FaHome className='mr-2' />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
