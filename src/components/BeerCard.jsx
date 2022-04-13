import React from 'react';
import { Link } from 'react-router-dom';

import './BeerCard.css'

const BeerCard = ({ beer }) => {
  return (
    <div className="col-4 mb-2">
      <div className="card rounded shadow m-2 p-2 h-100">
        <h3 className="text-center">{beer.name}</h3>
        <img src={beer.image_url} alt={beer.name} className="img-beer" />
        <h6>{beer.description.substring(0, 50)}...</h6>
        <Link to={`/beers/${beer.id}`} className="text-center">
          <p className="text-white btn btn-dark btn-lg">Beers</p>
        </Link>
      </div>

    </div >
  )
}

export default BeerCard