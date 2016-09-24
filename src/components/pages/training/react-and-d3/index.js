import './index.scss';
import React from 'react';
import { Link }   from 'react-router';
import Button     from 'components/common/button';
import Newsletter from 'components/common/newsletter';
import Swizec 	  from './assets/swizec.png';
import Freddy	  from './assets/freddy.png';
import Requirement from './assets/mobile.svg';
import Payment    from './assets/payment.png';
import D3 		  from './assets/d3.png';


export default function ReactAndD3() {
  return (
  	<div className="course">
  	<Course />
  	<Overview />
  	<Requirements />
  	<Newsletter />
  	</div>
  );
}

function Course() {
  return (
    <div className="course--workshop2 row">
      <div className="course-wrapper medium-12 medium-offset-0 large-12 large-offset-0 columns">
        <div className="course--container medium-10 offset-2 large-10 offset-2">
          <img src={ D3 } alt="D3 Logo"/>
          <div className="course--date">
            <Link to="/training/react-and-d3">Sun, May 8 at 9:00 am, San Francisco</Link>
          </div>
          <div className="course--react"><span>React and D3</span></div>
          <p className="course--authors">With Swizec Teller & Freddy Rangel</p>
          <div className="course--view">
            <Button url="/training/react-and-d3">View Course <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Overview() {
	return (
		<div className="overview medium-8 medium-offset-2 large-10 large-offset-1 columns">
			<div className="overview--title">
				<h2>Workshop Overview</h2>
			</div>
			<div className="overview--copy">
				<p>Get on the cutting edge of front-end engineering with this immersive full-day, in-person workshop on React, Redux, React Router, Immutable and Webpack brought to you by the author of "React Under the Hood" and the upcoming book "React: The Good Parts". Learn the important aspects of React's API and real-world lessons for facilitating the interactions of these independent libraries.</p>
				<p>Spending a full day on hands-on instruction is light-years more effective than reading a tutorial or watching a video. Immmediately apply the lessons you learn here in your career. Combining examples, walkthroughs and practical exercises, "React 2016" reinforces valuable lessons to make you the subject matter expert in everything React.</p>
				<p>Instead of creating a standard (and boring!) "Todo" app, we'll nerd out by building a Star Trek game with a near perfect representation of the Alpha Quadrant.</p>
			</div>
			<div className="overview--photo--left">
				<img src={ Swizec } alt="Craig Condon" />
			</div>
			<div className="overview--photo--right">
				<img src={ Freddy } alt="Freddy Rangel" />
			</div>
			<div className="overview--bio--left--wrapper">
				<div className="overview--bio--left">
					<a className="twitter--craig" href="https://twitter.com/craigjcondon">
  					<i className="fa fa-twitter"></i></a><h3>Craig Condon</h3>
					<p>Creator of Mesh.js, Paperclip.js, & Mojo.js.</p>
				</div>
			</div>
			<div className="overview--bio--right--wrapper">
				<div className="overview--bio--right">
					<a className="twitter--freddy" href="https://twitter.com/frangel85">
  					<i className="fa fa-twitter"></i></a><h3>Freddy Rangel</h3>
					<p>Contributor to React and author of "React Under the Hood" & "React 2016".</p>
				</div>
			</div>
		</div>
	)
}

function Requirements() {
	return (
		<div className="requirements medium-8 medium-offset-2 large-10 large-offset-1 columns">
			<div className="requirements--photo">
			<img src={ Requirement } alt="Phone and Screen"/>
			</div>
			<div className="requirements--info">
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
	)
}

