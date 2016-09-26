import './index.scss';
import React      from 'react';
import Newsletter from 'components/common/newsletter';
import Benefit1   from './assets/benefit_1.svg';
import Benefit2   from './assets/benefit_2.svg';
import Benefit3   from './assets/benefit_3.svg';
import Button     from 'components/common/button';

export default function Home() {
  return (
    <div className="home">
      <Top />
      <Description />
      <Benefits />
      <Newsletter />
    </div>
  );
}

function Top() {
  return (
    <div className="home--top">
      <div className="row">
        <div className="content medium-10 medium-offset-1 columns">
          <Tagline />
          <Cta />
        </div>
      </div>
    </div>
  )
}

function Tagline() {
  return (
    <div className="home--tagline">
      <div className="small">
        <div className="master-react-redux"><span>Master React,</span></div>
        <div className="master-react-redux"><span>Redux,</span></div>
        <div className="webpack-es6"><span>Webpack</span></div>
        <div className="webpack-es6"><span>and ES2016</span></div>
      </div>
      <div className="medium">
        <div className="ready-to-become-expert"><span>Ready to become an expert in React?</span></div>
        <div className="master-react-redux"><span>Master React, Redux,</span></div>
        <div className="webpack-es6"><span>Webpack, and ES7</span></div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="home--cta">
      <div className="home--cta--view-courses">
        <Button url="/workshops">View Workshops <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Button>
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
      <div className="home--description--info-box row">
        <div className="home--description--info-box--content medium-12 columns">
          <div className="row">
            <section className="medium-4 columns"><span>Interested in learning React but don't know where to start?</span></section>
            <section className="medium-4 columns"><span>Not sure how to get React to work with Redux, Webpack, or Babel?</span></section>
            <section className="medium-4 columns"><span>Already know React but want to take your knowledge to the next level?</span></section>
          </div>
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

      <div className="row">
        <div className="benefits-image-human large-4 large-push-6 columns">
          <img src={Benefit1} alt="Benefits Human" />
        </div>
        <div className="home--benefits--paste medium-10 medium-pull-1 large-4 large-pull-6 columns">
          <h3>No more copy-pasting code</h3>
          <p>Learn React the right way from real engineers who work with React on real world business applications. Our instructors are contributors to React, authors of React books and tutorials and creators of popular open source libraries in React's ecosystem.</p>
        </div>
      </div>

      <div className="home--benefits-medal row">
        <div className="benefits-image-medal large-4 large-push-2 columns">
          <img src={Benefit2} alt="Benefits Medal" />
        </div>
        <div className="home--benefits--medal medium-10 medium-pull-1 large-4 large-pull-2 columns">
          <h3>Become a true expert</h3>
          <p>Our teaching philsophy is especially geared to ensure you understand the material front and back. We follow "Crawl, Walk, Run": a mixture of lectures, walk-throughs and practical exercises will help reinforce these lessons. At the end of our training you will be a subject matter expert.</p>
        </div>
      </div>

      <div className="home--benefits--fun row">
        <div className="benefits-image-fun large-4 large-push-6 columns">
          <img src={Benefit3} alt="Benefits Fun" />
        </div>
        <div className="home--benefits--fun--text medium-10 medium-pull-1 large-4 large-pull-6 columns">
          <h3>Fun and engaging projects</h3>
          <p>Our training focuses on being comprehensive but also fun. No trivial "Todo" apps here. Learn to build serious applications as well as fun games such as a Star Trek or Space Invaders video game.</p>
        </div>
      </div>
    </div>
  );
}

