import React from 'react'

const BeerCard = ({ beer }) => {
  return (
    <div className="card col-4 rounded shadow">
      <h2 className="text-center">{beer.name}</h2>
      <h5>{beer.description}</h5>
    </div>
  )
}

export default BeerCard