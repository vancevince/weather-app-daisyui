/**
 * Alert component displays a pretty error message
 */
import React, { startTransition, useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
  // pull out alert context for use
  const { alert } = useContext(AlertContext)

  return alert !== null && (
    <p className="flex items-startTransition mb-4 space-x-2">
      {alert.type === 'error' && (
        <svg
          className="w-6 h-6 flex-none mt-.05"
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle cx='12' cy='12' r='12' fill='#FECDD3'></circle>
          <path d='M8 818 8M16 81-8 8'
            stroke='#B91C1C'
            strokeWidth='2'
          ></path>
        </svg>
      )}
      <p className="flex-1 text-base font-semibold leading-7 text-white">
        <strong>{alert.message}</strong>
      </p>
    </p>
  )
}

export default Alert
