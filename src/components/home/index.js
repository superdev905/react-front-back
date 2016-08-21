import './index.scss';
import React from 'react';

export default function Home() {
  return (
    <div className="home">
      <Tagline />
      <Cta />
      <Description />
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

function Description() {
  return (
    <div className="home--description">

      <div className="home--description--title">
        <p>Stop yawning,</p>
        <p>start building</p>
      </div>

      <div className="home--description--info-box">
        <div className="home--description--info-box--content">
          <section><span>Interested in learning React but don't know where to start?</span></section>
          <section><span>Not sure how to get React to work with Redux, Webpack, or Babel?</span></section>
          <section><span>Already know React but want to take your knowledge to the next level?</span></section>
        </div>
      </div>
    </div>
  );
}
