import React from 'react';
import logo from './../../logo.png';

import style from  './Header.module.css';

const Header = () => {
  return (
      <header className={style.AppHeader}>
        <div className={style.AppHeaderImage}><img src={logo} alt="logo" /></div>
        <div className={style.AppHeaderName}><h1>КУРСИ ПОЛЬСЬКОЇ</h1></div>
      </header>
  );
}

export default Header;
