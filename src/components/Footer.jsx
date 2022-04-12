import React from 'react'

const Footer = () => {
  return (
    <footer className="container mt-5 mb-5 bg-dark rounded">
      <h4 className='text-white text-center pt-4'>Contactez nous !!!</h4>
      <form action="submit">
        <div className='m-3'>
          <label htmlFor="mail" className="form-label text-white">Votre email de contact</label>
          <input type="email" name="mail" id="mail" className="form-control" />
        </div>
        <div className='m-3'>
          <label htmlFor="message" className="form-label text-white">Votre message</label>
          <textarea name="message" id="message" className="form-control"></textarea>
        </div>
        <button className='btn btn-lg btn-light m-3'>Envoyer</button>
      </form>
    </footer>
  )
}

export default Footer