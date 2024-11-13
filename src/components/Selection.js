import React from 'react'

const Selection = ({
  applyColor,
  updateSelectionStyle,
  nextBackground,
  selectionColors,
  index,
}) => {
  const handleClick = () => {
    applyColor(index, nextBackground)
  }

  return (
    <div
      className='fix-box'
      style={{ backgroundColor: selectionColors[index] || 'transparent' }}
      onClick={handleClick}
    >
      <h5>Selection</h5>
    </div>
  )
}

export default Selection
