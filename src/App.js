import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
