import React from 'react';
import AddUser from './AddUser';
import './nav.css';

const Nav = () => {
  return (
    <div className="menu">
      <h1>Our contact app</h1>
      <AddUser />
    </div>
  );
};

export default Nav;
