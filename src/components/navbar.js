import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1 id="logo">Math Magicians</h1>
    <nav>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/calculator" className="nav-link">Calculator</Link>
      <Link to="/quote" className="nav-link">Quote</Link>
    </nav>
  </header>
);

export default Navbar;
