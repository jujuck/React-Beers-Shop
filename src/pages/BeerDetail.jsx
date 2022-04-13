import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import './BeerDetail.css';

const BeerDetail = () => {
  const { id } = useParams()
  const [beer, setBeer] = useState({})

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then(res => res.json())
      .then(data => setBeer(data[0]))
      .catch(err => console.error(err))
  }, [id]);

  return (
    <div className="container">
      {console.log(beer)}
      <div className="row">
        <div className="card text-center">
          <h2 className="text-center m-2">{beer.name}</h2>
          <div className='m-3'>
            <img className="img-beerdetail float-start m-5 rounded shadow p-4" src={beer.image_url} alt={beer.name} />
            <h5>{beer.description}</h5>
            <p>{beer.brewers_tips}</p>
            <p>Food Pairing</p>
            <ul className="list-group list-group-flush">
              {beer.food_pairing && beer.food_pairing.map(food => <li key={food} className="list-group-item">{food}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeerDetail