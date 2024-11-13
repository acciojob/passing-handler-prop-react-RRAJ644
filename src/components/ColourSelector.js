import React from 'react'

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background, label, classname } = config

  return (
    <button
      className={classname}
      style={{ background: background }}
      onClick={() => selectNextBackground(background)}
    >
      {label}
    </button>
  )
}
export default ColourSelector
