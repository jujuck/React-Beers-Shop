import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpeg';

const Nav = () => {
  return (
    <header className="container">
      <nav className="row">
        <Link to='/' className="col-2">
          <img src={Logo} alt="mon logo" className="w-50" />
        </Link>
        <div className="col-4"></div>
        <Link to='/' className="col-2 m-4 ">
          <p className="text-white btn btn-dark btn-lg">Home</p>
        </Link>
        <Link to='/beers' className="col-2 m-4 ">
          <p className="text-white btn btn-dark btn-lg">Beers</p>
        </Link>
      </nav>
      <h1>Beers Shop and so more</h1>
    </header>
  )
}

export default Nav