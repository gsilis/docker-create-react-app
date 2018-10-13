import React, { Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';

const SubMenu = {
  About: function() {
    return (
      <ul>
        <li><NavLink to={ '/about/history' }>History</NavLink></li>
        <li><NavLink to={ '/about/offices' }>Offices</NavLink></li>
      </ul>
    );
  },
};

const Menu = (props) => {
  return (
    <Fragment>
      <ul>
        <li><NavLink to={ '/services' }>Services</NavLink></li>
        <li><NavLink to={ '/about' }>About</NavLink></li>
        <li><NavLink to={ '/contact' }>Contact</NavLink></li>
      </ul>
      <Route path="/about*" render={ SubMenu.About } />
    </Fragment>
  );
};

export default Menu;
