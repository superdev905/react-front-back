import './index.scss';
import React      from 'react';
import { Link }   from 'react-router';
import Newsletter from 'components/common/newsletter';
import Button     from 'components/common/button';

export default function Register() {
  return (
  	<div className="register">
  		<Workshop1 />
  		<Newsletter />
  	</div>
  );
}

function Workshop1() {
	return (
		<div className="register--workshop1">
			<div className="register--workshop1--date">
        <Link to="/training/react-2016">Sat, April 23 at 9:00 am, San Francisco</Link>
			</div>
			<div className="master--react--redux--1"><span>React 2016:</span></div>
      <div className="master--react--redux"><span>Master React, Redux,</span></div>
      <div className="master--react--redux"><span>Immutable.js and</span></div>
      <div className="master--react--redux"><span>Webpack</span></div>
      <p className="register--workshop--authors">With Freddy Rangel & Craig Condon</p>
      <div className="register--view">
        <Button url="/training/react-2016">Reserve your spot <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Button>
      </div>
		</div>
	)
}