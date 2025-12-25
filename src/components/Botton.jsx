import React from 'react'

const button = ({name ,disabled =false,onClick}) => {
  return (
    <button
          className= {`bg-blue-400 rounded-2xl px-4 py-1 font-bold uppercase shadow-blue-50 shadow-sm inset-shadow-blue-50 inset-shadow-sm ${disabled ? "opacity-50 cursor-not-allowed": "active:scale-105 "}`} 
          disabled={disabled}
          onClick={onClick}
        >
          {name}
        </button>
  )
}

export default button