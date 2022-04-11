import React from 'react';
import { Link } from 'react-router-dom';

import './Hero.css';

const Hero = ({ hero }) => {
  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url('./assets/herobeers.jpeg')` }}>
      <div className="container">
        <div className='offset-6 col-6 text-center'>
          <h1>{hero.title}</h1>
          <h2>{hero.description}</h2>
          <Link to={hero.link.to} className="col-2 m-4 ">
            <p className="text-white btn btn-dark btn-lg">{hero.link.label}</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero