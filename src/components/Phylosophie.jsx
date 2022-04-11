import React from 'react';

const Phylosophie = ({ phylosophy }) => {
  return (
    <section id="phylosophy" className="container">
      <div>
        <h2 className="text-center m-4">{phylosophy.title}</h2>
        <img src={phylosophy.image.src} alt={phylosophy.image.alt} className='float-start w-25' />
        <p>{phylosophy.description}</p>
      </div>
    </section>
  )
}

export default Phylosophie