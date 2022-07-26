import './index.scss';
import React from 'react';
import { Link }   from 'react-router';
import Button     from 'components/common/button';
import Newsletter from 'components/common/newsletter';
import Craig 	  from './assets/craig.png';
import Freddy	  from './assets/freddy.png';
import Requirement from './assets/mobile.svg';
import Payment    from './assets/payment.png';


export default function React2016() {
  return (
    <div className="course">
      <Course />
      <div className="row">
        <Overview />
        <Syllabus />
        <Requirements />
        <Newsletter />
      </div>
    </div>
  );
}

function Course() {
  return (
    <div className="course--workshop1">
      <div className="course-wrapper">
        <div className="row">
          <div className="large-6 large-push-1 columns">
            <div className="course--container">
              <div className="course--description">
                <Link to="/workshops/react-2016">Sat, April 23 at 9:00 am, San Francisco</Link>
              </div>
              <div className="master--react--redux--1"><span>React 2016:</span></div>
              <div className="master--react--redux"><span>Master React, Redux,</span></div>
              <div className="master--react--redux"><span>Immutable.js and</span></div>
              <div className="master--react--redux"><span>Webpack</span></div>
              <p className="course--workshop--authors">With Freddy Rangel & Craig Condon</p>
              <div className="course--view">
                <Button url="/workshops/react-2016">Reserve your spot <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Overview() {
  return (
    <div className="overview medium-8 medium-offset-2 large-10 large-offset-1 columns">
      <div className="row">
        <div className="large-9 columns">
          <div className="overview--title">
            <h2>Workshop Overview</h2>
          </div>
          <div className="overview--copy">
            <p>Get on the cutting edge of front-end engineering with this immersive full-day, in-person workshop on React, Redux, React Router, Immutable and Webpack brought to you by the author of "React Under the Hood" and the upcoming book "React: The Good Parts". Learn the important aspects of React's API and real-world lessons for facilitating the interactions of these independent libraries.</p>
            <p>Spending a full day on hands-on instruction is light-years more effective than reading a tutorial or watching a video. Immmediately apply the lessons you learn here in your career. Combining examples, walkthroughs and practical exercises, "React 2016" reinforces valuable lessons to make you the subject matter expert in everything React.</p>
            <p>Instead of creating a standard (and boring!) "Todo" app, we'll nerd out by building a Star Trek game with a near perfect representation of the Alpha Quadrant.</p>
          </div>
        </div>
        <div className="large-3 columns">
          <div className="row">
            <div className="overview--left small-6 large-12 columns">
              <img src={ Freddy } alt="Freddy Rangel" />
              <div className="overview--left--bio">
                <a className="twitter--freddy" href="https://twitter.com/frangel85"><i className="fa fa-twitter"></i></a>
                <h3>Freddy Rangel</h3>
                <p>Contributor to React and author of "React Under the Hood".</p>
              </div>
            </div>
            <div className="overview--right small-6 large-12 columns">
              <img src={ Craig } alt="Craig Condon" />
              <div style={{ paddingTop: 19 }} className="overview--right--bio">
                <a className="twitter--craig" href="https://twitter.com/craigjcondon"><i className="fa fa-twitter"></i></a>
                <h3>Craig Condon</h3>
                <p>Creator of Mesh.js, Paperclip.js, & Mojo.js.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Syllabus() {
  return (
    <div className="syllabus medium-8 medium-offset-2 large-10 large-offset-1 columns">
      <div className="syllabus--container">
        <div className="syllabus--title">
          <h2>Syllabus</h2>
        </div>
        <div className="syllabus--list">
          <p>- React</p>
          <ul>
            <li>What is React?</li>
            <li>How is React Different?</li>
            <li>Write Components, Not Templates</li>
            <li>The Virtual DOM</li>
            <li>Data in React</li>
            <li>The Diff Algorithm</li>
            <li>Event Delegation</li>
            <li>3 Flavors of React Components</li>
            <li>JSX Gotchas</li>
          </ul>
          <p className="list--redux">- Redux</p>
          <ul>
            <li>What is Redux?</li>
            <li>Redux Principles</li>
            <li>Actions and Reduces and Stores, Oh My!</li>
            <li>Async and Middleware</li>
          </ul>
          <p className="list--immutable">- ImmutableJS</p>
          <ul>
            <li>The Case for Immutability</li>
            <li>Map, List, fromJS(), is()</li>
          </ul>
          <p className="list--webpack">- Webpack</p>
          <ul>
            <li>What is Webpack?</li>
            <li>How is Webpack different?</li>
            <li>What does an effective Webpack config look like?</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Requirements() {
  return (
    <div className="requirements medium-8 medium-offset-2 large-10 large-offset-1 columns">
      <div className="row">
        <div className="requirements--photo large-6 large-push-6 columns">
          <img src={ Requirement } alt="Phone and Screen"/>
        </div>
        <div className="requirements--info large-6 large-pull-6 columns">
          <h2>Requirements</h2>
          <ol>
            <li>Intermediate JavaScript including ES2016</li>
            <li>No previous knowledge of any of these libraries</li>
            <li>Git and latest version of Node and NPM</li>
          </ol>
        </div>
        <div className="requirements--payment">
          <img src={ Payment } alt="Payment box"/>
        </div>
      </div>
    </div>
  )
}
