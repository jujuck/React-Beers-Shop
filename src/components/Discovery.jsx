import React from 'react';

import Malt from './Malt';

const Discovery = ({ malt }) => {
  return (
    <section id="hops" className="container">
      <h2 className="text-center m-4">{malt.title}</h2>
      <div className='row'>
        {malt.imems.map((discover, index) => <Malt discover={discover} index={index} key={discover.title} />)}
      </div>
    </section>
  )
}

export default Discovery