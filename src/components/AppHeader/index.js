import React from 'react';

import './style.scss';
import LoginForm from 'src/containers/LoginForm';

import logo from '../../assets/logo.png';

const AppHeader = () => (
  <header className="header">
    <img src={logo} className="header-logo" alt="Logo oRecipes" />
    <LoginForm />
  </header>
);

export default AppHeader;
