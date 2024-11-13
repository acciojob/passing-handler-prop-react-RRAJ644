import React, { useState } from 'react'
import '../styles/App.css'
import Selection from './Selection'
import ColourSelector from './ColourSelector'

const colourConfig = [
  {
    key: 'blue',
    label: 'Blue',
    classname: 'btn-blue',
    background: 'rgb(34, 193, 195)',
  },
  {
    key: 'orange',
    label: 'Orange',
    classname: 'btn-orange',
    background: 'rgb(221, 112, 18)',
  },
  {
    key: 'green',
    label: 'Green',
    classname: 'btn-green',
    background: 'rgb(44, 209, 88)',
  },
]

const title = 'Select the gradient and then the Box to change the color'

const App = () => {
  let [nextBackground, selectNextBackground] = useState({ background: '' })
  const [selectionColors, setSelectionColors] = useState([null, null, null]) // State for each selection box's background color

  const updateSelectionStyle = (index, nextBackground) => {
    const updatedSelectionColors = [...selectionColors]
    updatedSelectionColors[index] = nextBackground
    setSelectionColors(updatedSelectionColors)
  }

  const applyColor = (updateSelectionStyle) => {
    updateSelectionStyle(nextBackground)
  }

  return (
    <div id='master'>
      <h5 className='heading'>{title} </h5>

      <div className='row'>
        {colourConfig.map((config, index) => (
          <ColourSelector
            key={config.key}
            config={config}
            selectNextBackground={selectNextBackground}
          />
        ))}
      </div>

      <div className='row' id='children-wrapper'>
        {['selection1', 'selection2', 'selection3'].map((key, index) => (
          <Selection
            key={key}
            applyColor={updateSelectionStyle}
            index={index}
            nextBackground={nextBackground}
            selectionColors={selectionColors}
          />
        ))}
      </div>
    </div>
  )
}

export default App
