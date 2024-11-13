import React, { useState } from 'react'
import '../styles/Child.css'

const Selection = ({ applyColor }) => {
  const [backgroundColor, setBackgroundColor] = useState('transparent')

  const handleClick = () => {
    applyColor((color) => {
      setBackgroundColor(color.background)
    })
  }

  return (
    <div
      className='fix-box'
      style={{ backgroundColor: backgroundColor }}
      onClick={handleClick}
    />
  )
}

export default Selection
