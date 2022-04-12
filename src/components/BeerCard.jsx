import React from 'react'

const BeerCard = ({ beer }) => {
  return (
    <div className="col-4 mb-2">
      <div className="card rounded shadow m-2 p-2 h-100">
        <h3 className="text-center">{beer.name}</h3>
        <h6>{beer.description.substring(0, 50)}...</h6>
      </div>

    </div>
  )
}

export default BeerCard