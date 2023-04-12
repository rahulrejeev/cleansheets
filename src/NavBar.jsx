import React from 'react';
import './NavBar.css';
import SearchBar from './SearchBar';
import './SearchBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact</a>
          <SearchBar />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

