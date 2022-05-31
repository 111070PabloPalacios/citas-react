import React, {useState} from 'react'

export const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-white text-center normal-case font-bold mb-3 rounded">
    <p>{mensaje}</p>
    </div>
  )
}
