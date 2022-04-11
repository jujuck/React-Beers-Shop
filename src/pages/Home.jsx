import React from 'react';

/**Import de données */
import home from '../data/home';

/** Import des composants */
import Hero from '../components/Hero';
import Phylosophie from '../components/Phylosophie';
import Discovery from '../components/Discovery';
import Customers from '../components/Customers';

const Home = () => {
  return (
    <main>
      {console.log(home)}
      <Hero hero={home.hero} />
      <Phylosophie phylosophy={home.phylosophy} />
      <Discovery malt={home.malt} />
      <Customers customer={home.customer} />
    </main>
  )
}

export default Home;