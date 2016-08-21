import './index.scss';
import React from 'react';

export default function Home() {
  return (
    <div className="home">
      <Tagline />
      <Cta />
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

function Cta() {
  return (
    <div className="home--cta">
      <div className="home--cta--view-courses">
        <a>View Courses <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
      </div>
      <div className="home--cta--copy">
        <p>Accelerate your career by learning from the experts. Master everything you need to <span className="blue-text">build modern JavaScript applications</span> using React, Redux, Webpack, WebSockets, WebRTC, Node and more.</p>
      </div>
    </div>
  );
}
