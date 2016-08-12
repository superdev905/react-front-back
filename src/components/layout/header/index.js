import React from 'react';
import logo  from './assets/logo.svg';

export default function Header() {
  return (
    <div className="app-header">
      <span>
        <h1><a href="#">REACT University</a></h1>
        <ul>
          <li><a href="./training" className="app-header-link">Training</a></li>
          <li><a href="./books" className="app-header-link">Books</a></li>
          <li><a href="./posts" className="app-header-link">Posts</a></li>
          <li><a href="./about" className="app-header-link">About</a></li>
          <li><a href="./register" className="app-header-register">Register</a></li>
        </ul>
      </span>
    </div>
  );
}
