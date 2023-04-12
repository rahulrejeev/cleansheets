import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button><i className="fa fa-search"></i></button>
    </div>
  );
}

export default SearchBar;