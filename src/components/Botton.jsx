import React from 'react'

const button = ({name ,disabled,onClick}) => {
  return (
    <button
          className= {`bg-blue-400 rounded-2xl px-4 py-1 font-bold uppercase active:scale-105 shadow-blue-50 shadow-sm inset-shadow-blue-50 inset-shadow-sm ${disabled ? "opacity-50 cursor-not-allowed": ""}`}
          disabled={disabled}

          onClick={onClick}
        >
          {name}
        </button>
  )
}

export default button