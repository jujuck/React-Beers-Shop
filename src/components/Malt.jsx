import React from 'react'

const Malt = ({ discover, index }) => {
  return (
    <div className={`m-2 text-center p-4 shadow col-5 card ${index % 2 === 0 ? "" : "ms-auto"}`}>
      <h4>{discover.title}</h4>
      <h6>{discover.description}</h6>
    </div>
  )
}

export default Malt