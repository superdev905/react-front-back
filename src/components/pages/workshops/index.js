import './index.scss';
import React      from 'react';
import { Link }   from 'react-router';
import Newsletter from 'components/common/newsletter';
import Button     from 'components/common/button';
import Tagline    from 'components/common/tagline';
import D3         from 'components/pages/workshops/assets/d3.png';

export default function Workshops() {
  return (
    <div className="training">
      <Tagline title="Available Workshops"/>
      <Workshop1 />
      <Workshop2 />
      <Corporate />
      <Newsletter />
    </div>
  );
}

function Workshop1() {
	return (
		<div className="training--workshop1 row">
      <div className="training-wrapper medium-10 medium-offset-1 large-10 large-offset-1 columns">
        <div className="training--workshop1--container">
          <div className="training--workshop1--date">
            <Link to="/workshops/react-2016">Sat, April 23 at 9:00 am, San Francisco</Link>
          </div>
          <div className="master--react--redux--1"><span>React 2016:</span></div>
          <div className="master--react--redux"><span>Master React, Redux,</span></div>
          <div className="master--react--redux"><span>Immutable.js and</span></div>
          <div className="master--react--redux"><span>Webpack</span></div>
          <p className="training--workshop--authors">With Freddy Rangel & Craig Condon</p>
          <div className="training--view">
            <Button url="/workshops/react-2016">Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Button>
          </div>
        </div>
      </div>
		</div>
	)
}

function Workshop2() {
  return (
    <div className="training--workshop2 row">
      <div className="training-wrapper medium-10 medium-offset-1 large-10 large-offset-1 columns">
        <div className="training--workshop2--container">
          <img src={ D3 } alt="D3 Logo"/>
          <div className="training--workshop2--date">
            <Link to="/workshops/react-and-d3">Sun, May 8 at 9:00 am, San Francisco</Link>
          </div>
          <div className="training--workshop2--react"><span>React and D3</span></div>
          <p className="training--workshop2--authors">With Swizec Teller & Freddy Rangel</p>
          <div className="training--workshop2--view">
            <Button url="/workshops/react-and-d3">View Course <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Corporate() {
  return (
    <div className="training--corporate row">
      <div className="training-wrapper medium-10 medium-offset-1 large-10 large-offset-1 columns">
        <p>We also offer corporate training. </p>
        <p>Contact <a href="mailto:hello@reactuniversity.com">hello@reactuniversity.com </a></p>
        <p>for more information.</p>
      </div>
    </div>
  );
}
