import './index.scss';
import React             from 'react';
import RULogo            from './assets/react_university_icon_alt_light.svg';
import { slide as Menu } from 'react-burger-menu'

export default function Header() {
  return (
    <div className="app-header">
      <div className="row">
        <div className="app-header--logo-container medium-4 columns">
          <img src={RULogo} alt="React University Logo" />
          <span className="app-header--name"><a href="/">React University</a></span>
        </div>
        <BurgerMenu />
        <DesktopMenu />
      </div>
    </div>
  );
}

function BurgerMenu() {
  return (
    <Menu right={true} >
      <a href="/training" className="menu-item"><i className="fa fa-code" aria-hidden="true"></i> Training</a>
      <a href="/books" className="menu-item"><i className="fa fa-book" aria-hidden="true"></i> Books</a>
      <a href="/posts" className="menu-item"><i className="fa fa-commenting" aria-hidden="true"></i> Posts</a>
      <a href="/about" className="menu-item"><i className="fa fa-info-circle" aria-hidden="true"></i> About</a>
      <a href="/register" className="menu-item"><i className="fa fa-user-plus" aria-hidden="true"></i> Register</a>
      <a href="/" className="menu-item"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
    </Menu>
  );
}

function DesktopMenu() {
  return (
    <div className="app-header--navigation medium-8 columns">
      <span className="non-register">
        <a href="/training" className="menu-item">Training</a>
        <a href="/books" className="menu-item">Books</a>
        <a href="/posts" className="menu-item">Posts</a>
        <a href="/about" className="menu-item">About</a>
      </span>
      <span className="register">
        <a href="/register" className="menu-item">Register</a>
      </span>
    </div>
  );
}
