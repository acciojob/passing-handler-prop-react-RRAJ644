import React, { useState } from 'react'

const Selection = ({ applyColor }) => {
  const [bg, setBg] = useState({ background: '' })

  const handleClick = () => {
    applyColor((newBg) => setBg({ background: newBg }))
  }

  return (
    <div
      className='fix-box'
      style={{ background: bg?.background }}
      onClick={handleClick}
    >
      <h5>Selection</h5>
    </div>
  )
}

export default Selection
