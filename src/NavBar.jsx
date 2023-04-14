import React from 'react';
import logo from './logo.png';
import './NavBar.css';

function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        <ul className = "center"> 
          <h1>
            Quick Sheets
          </h1>
        </ul>  
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;




// import React from 'react';
// import './NavBar.css';
// import SearchBar from './SearchBar';

// function NavBar() {
//   return (
//     <nav className="navbar">
//       <ul className="nav-links">
//         <li className="nav-item">
//           <a href="/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a href="/about">About</a>
//           </li>
//         <li className="nav-item">
//           <a href="/contact">Contact</a>
//           </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;
