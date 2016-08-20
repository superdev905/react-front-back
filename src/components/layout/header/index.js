import './index.scss';
import React from 'react';
import RULogo from './assets/react_university_icon_alt_light.svg';

export default function Header() {
  return (
    <div className="app-header">
      <img src={RULogo} alt="React University Logo" />
      <span className="app-header--name"><a href="/">React University</a></span>
    </div>
  );
}
        //<ul>
          //<li><a href="./training" className="app-header-link">Training</a></li>
          //<li><a href="./books" className="app-header-link">Books</a></li>
          //<li><a href="./posts" className="app-header-link">Posts</a></li>
          //<li><a href="./about" className="app-header-link">About</a></li>
          //<li><a href="./register" className="app-header-register">Register</a></li>
        //</ul>
