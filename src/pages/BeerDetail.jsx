import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


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
    <div>BeerDetail</div>
  )
}

export default BeerDetail