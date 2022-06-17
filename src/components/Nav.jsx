import React from 'react';
import Logo from '../logoHenry.png'
import './Nav.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <Link to='/'>
      <span className="navbar-brand">
        <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
      Weather App
      </span>
    </Link>
    <Link to='/about'>
      <span>About me</span>
    </Link>
    <SearchBar
          onSearch={onSearch}
        />
  </nav>
  );
};

export default Nav;
