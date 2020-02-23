import React from 'react';
import style from './Nav.module.css';


const Nav = () => {
  return (
      <nav className={style.AppNav}>
        <ul>
          <li><a href="#s">Головна</a></li>
          <li><a href="#s">Про курси</a></li>
          <li><a href="#s">Контакти</a></li>
        </ul>
      </nav>
  );
}

export default Nav;
