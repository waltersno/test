import React from 'react';
import classes from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
};

export default Navbar;
