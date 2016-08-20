import './index.scss';
import React from 'react';

export default function Home() {
  return (
    <div className="home">
      <Tagline />
    </div>
  );
}

function Tagline() {
  return (
    <div className="home--tagline">
      <div className="master-react-redux"><span>Master React,</span></div>
      <div className="master-react-redux"><span>Redux,</span></div>
      <div className="webpack-es6"><span>Webpack</span></div>
      <div className="webpack-es6"><span>and ES2016</span></div>
    </div>
  );
}
