import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpeg';

const Nav = () => {
  return (
    <div>
      <Link to='/'>
        <img src={Logo} alt="mon logo" />
      </Link>
      <Link to='/'>
        <p>Home</p>
      </Link>
      <Link to='/beers'>
        <p>Beers</p>
      </Link>
    </div>
  )
}

export default Nav