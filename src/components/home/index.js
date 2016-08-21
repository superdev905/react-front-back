import './index.scss';
import React      from 'react';
import Benefit1   from './assets/benefit_1.svg';
import Benefit2   from './assets/benefit_2.svg';


export default function Home() {
  return (
    <div className="home">
      <Tagline />
      <Cta />
      <Description />
      <Benefits />
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
          <section><span>Interested in learning React but dont know where to start?</span></section>
          <section><span>Not sure how to get React to work with Redux, Webpack, or Babel?</span></section>
          <section><span>Already know React but want to take your knowledge to the next level?</span></section>
        </div>
      </div>
    </div>
  );
}

function Benefits() {
  return (
    <div className="home--benefits">
      <div className="home--benefits--title">
        <p>BENEFITS</p>
      </div>
      <img src={Benefit1} alt="Benefits Human" />
      <div className="home--benefits--paste">
        <h3>No more copy-pasting code.</h3>
        <p>Learn React the right way from real engineers who work with React on real world business applications. Our instructors are contributors to React, authors of React books and tutorials and creators of popular open source libraries in Reacts ,ecosystem.</p>
      </div>
      <div className="home--benefits--medal">
        <img src={Benefit2} alt="Benefits Medal" />
        <h3>Become a true expert.</h3>
        <p>Our teaching philsophy is especially geared to ensure you understand the material front and back. We follow "Crawl, Walk, Run": a mixture of lectures, walk-throughs and practical exercises will help reinforce these lessons. At the end of our training you will be a subject matter expert.</p>
      </div>
    </div>
  );
}
