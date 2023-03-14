import React from 'react';
import './style.css'
import logo from '../assets/logo.png'


const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h2 className="header__logo--text text">ExerciseNote</h2>
        <img className="header__logo--img logo" src={ logo } alt="logo-img"></img>
      </div>
    </header>
  )
}

export default Header