import './index.scss';
import React from 'react';
import { Link }   from 'react-router';
import Button     from 'components/common/button';
import Newsletter from 'components/common/newsletter';


export default function React2016() {
  return (
  	<div className="course">
  	<Course />
  	<Overview />
  	<Newsletter />
  	</div>
  );
}

function Course() {
	return (
		<div className="course--workshop1 row">
      		<div className="course-wrapper medium-10 medium-offset-1 large-8 large-offset-2 columns">
				<div className="course--container">
					<div className="course--description">
		            	<Link to="/training/react-2016">Sat, April 23 at 9:00 am, San Francisco</Link>
		          	</div>
		          	<div className="master--react--redux--1"><span>React 2016:</span></div>
		         	 <div className="master--react--redux"><span>Master React, Redux,</span></div>
		         	 <div className="master--react--redux"><span>Immutable.js and</span></div>
		          	<div className="master--react--redux"><span>Webpack</span></div>
		          	<p className="course--workshop--authors">With Freddy Rangel & Craig Condon</p>
		         	<div className="course--view">
		           		<Button url="/training/react-2016">Reserve your spot <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Button>
		          	</div>
				</div>
			</div>
		</div>
	)
}

function Overview() {
	return (
		<div className="overview">
			<div className="overview--title">
				<h2>Workshop Overview</h2>
			</div>
			<div className="overview--copy">
				<p>Get on the cutting edge of front-end engineering with this immersive full-day, in-person workshop on React, Redux, React Router, Immutable and Webpack brought to you by the author of "React Under the Hood" and the upcoming book "React: The Good Parts". Learn the important aspects of React's API and real-world lessons for facilitating the interactions of these independent libraries.</p>
				<p>Spending a full day on hands-on instruction is light-years more effective than reading a tutorial or watching a video. Immmediately apply the lessons you learn here in your career. Combining examples, walkthroughs and practical exercises, "React 2016" reinforces valuable lessons to make you the subject matter expert in everything React.</p>
				<p>Instead of creating a standard (and boring!) "Todo" app, we'll nerd out by building a Star Trek game with a near perfect representation of the Alpha Quadrant.</p>
			</div>
		</div>
	)
}
