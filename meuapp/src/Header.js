import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="sobre">Sobre</Link> | {<br></br>}
      <NavLink to="/" end>
        Home
      </NavLink>{' '}
      | <NavLink to="sobre">Sobre</NavLink>
    </div>
  );
};

export default Header;
