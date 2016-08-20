import './index.scss';
import React             from 'react';
import RULogo            from './assets/react_university_icon_alt_light.svg';
import { slide as Menu } from 'react-burger-menu'

export default function Header() {
  return (
    <div className="app-header">
      <img src={RULogo} alt="React University Logo" />
      <span className="app-header--name"><a href="/">React University</a></span>
      <Menu right={true} >
        <a href="./training" className="menu-item">Training</a>
        <a href="./books" className="menu-item">Books</a>
        <a href="./posts" className="menu-item">Posts</a>
        <a href="./about" className="menu-item">About</a>
        <a href="./register" className="menu-item">Register</a>
      </Menu>
    </div>
  );
}
