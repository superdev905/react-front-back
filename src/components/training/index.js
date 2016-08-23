import './index.scss';
import React from 'react';

export default function Training() {
  return (
  	<div className="training">
  		<Tagline />
  		<Workshop1 />
  		<Workshop2 />
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
			<div className="training--workshop1--date">
				<a href="www.reactuniverity.com">Sat, April 23 at 9:00 am, San Francisco</a>
			</div>
			<div className="master--react--redux--1"><span>React 2016:</span></div>
      		<div className="master--react--redux"><span>Master React, Redux,</span></div>
   			<div className="master--react--redux"><span>Immutable.js and</span></div>
     		<div className="master--react--redux"><span>Webpack</span></div>	
     		<p className="training--workshop--authors">With Freddy Rangel & Craig Condon</p>
     		<div className="training--view">
     			<a>View Course <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
     		</div>	
		</div>
	)
}

function Workshop2() {
	return (
		<div className="training--workshop2">
			<div className="training--workshop2--date">
				<a href="www.reactuniverity.com">Sun, May 8 at 9:00 am, San Francisco</a>
			</div>
			<div className="training--workshop2--react"><span>React and D3</span></div>
			<p className="training--workshop2--authors">With Swizec Teller & Freddy Rangel</p>
			<div className="training--workshop2--view">
     			<a>View Course <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
     		</div>	
		</div>
	);
}