import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">nanoTIA</NavLink>
      </nav>
  );
};

export default Navbar;
