import React from 'react';

/**Import de données */
import home from '../data/home';

/** Import des composants */
import Hero from '../components/Hero';
import Phylosophie from '../components/Phylosophie';

const Home = () => {
  return (
    <main>
      {console.log(home)}
      <Hero hero={home.hero} />
      <Phylosophie phylosophy={home.phylosophy} />
    </main>
  )
}

export default Home;