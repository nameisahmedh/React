import React from 'react'

const Button = ({color, onClick}) => {
    const colorNeeded = `bg-${color}-500`
  return (
    <div className={`rounded-2xl px-5 py-2 flex flex-wrap justify-center ${colorNeeded} text-white`} onClick={onClick}>
      {color}
    </div>
  )
}

export default Button
