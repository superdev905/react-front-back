import React from 'react';
import logo  from './assets/logo.svg';

export default function Header() {
  return (
    <div id="my-component" className="app-header">
      <span className="app-header--title">React University</span>
      <ul className="app-header--nav">
        <li>Training</li>
        <li>Books</li>
        <li>Posts</li>
        <li>About</li>
      </ul>
    </div>
  );
}
