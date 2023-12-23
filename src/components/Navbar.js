import React from 'react';
import './componentsCss/Navbar.css'

function Navbar() {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
        </ul>
      </nav>
    );
  }
  
  
  export default Navbar;