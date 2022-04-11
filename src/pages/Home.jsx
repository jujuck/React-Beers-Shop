import React from 'react';

/**Import de données */
import home from '../data/home';

/** Import des composants */
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      {console.log(home)}
      Home
      <Hero hero={home.hero} />
    </div>
  )
}

export default Home;