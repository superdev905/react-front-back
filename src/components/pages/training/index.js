import './index.scss';
import React      from 'react';
import { Link }   from 'react-router';
import Newsletter from 'components/common/newsletter';
import Button     from 'components/common/button';

export default function Training() {
  return (
    <div className="training">
      <Tagline />
      <Workshop1 />
      <Workshop2 />
      <Corporate />
      <Newsletter />
    </div>
  );
}

function Tagline() {
  return (
    <div className="training--tagline">
      <h2>Available Workshops</h2>
    </div>
  );
}

function Workshop1() {
	return (
		<div className="training--workshop1">
      <div className="training--workshop1--container">
  			<div className="training--workshop1--date">
          <Link to="/training/react-2016">Sat, April 23 at 9:00 am, San Francisco</Link>
  			</div>
  			<div className="master--react--redux--1"><span>React 2016:</span></div>
        <div className="master--react--redux"><span>Master React, Redux,</span></div>
        <div className="master--react--redux"><span>Immutable.js and</span></div>
        <div className="master--react--redux"><span>Webpack</span></div>
        <p className="training--workshop--authors">With Freddy Rangel & Craig Condon</p>
        <div className="training--view">
          <Button url="/training/react-2016">View Course <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Button>
        </div>
      </div>
		</div>
	)
}

function Workshop2() {
  return (
    <div className="training--workshop2">
      <div className="training--workshop2--container">
        <div className="training--workshop2--date">
          <Link to="/training/react-and-d3">Sun, May 8 at 9:00 am, San Francisco</Link>
        </div>
        <div className="training--workshop2--react"><span>React and D3</span></div>
        <p className="training--workshop2--authors">With Swizec Teller & Freddy Rangel</p>
        <div className="training--workshop2--view">
          <Button url="/training/react-and-d3">View Course <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Button>
        </div>
      </div>    
    </div>
  );
}

function Corporate() {
	return (
		<div className="training--corporate">
			<p>We also offer corporate training.</p>
			<p>Contact <em>hello@reactuniversity.com</em></p>
			<p>for more information.</p>
		</div>
	);
}
