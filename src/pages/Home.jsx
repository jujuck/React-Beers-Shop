import React from 'react';

/**Import de données */
import home from '../data/home';

/** Import des composants */
import Hero from '../components/Hero';

const Home = () => {
  return (
    <main>
      {console.log(home)}
      <Hero hero={home.hero} />
    </main>
  )
}

export default Home;