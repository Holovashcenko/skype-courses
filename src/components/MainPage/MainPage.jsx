import React from 'react';
import mainPageLogo from './../../mainPageLogo.jpg';
import style from './MainPage.module.css';

const MainPage = () => {
  return (
      <div className={style.AppMainPage}>
        <div>
          <img src={mainPageLogo} alt="Main Page Logo" />
        </div>
        <p>content</p>
      </div>
  );
}

export default MainPage;
