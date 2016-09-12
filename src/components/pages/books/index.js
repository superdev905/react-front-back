import './index.scss';
import React      from 'react';
import Newsletter from 'components/common/newsletter';
import Button     from 'components/common/button';
import Tagline    from 'components/common/tagline';
import Ebook      from './assets/ebook.svg';
import Cover      from './assets/d3.svg';
import HoodBook   from './assets/hood.svg';

export default function Books() {
  return (
  	<div className="books">
  		<Tagline title="Books"/>
      <div className="site-content">
        <Ipad />
        <Hood />
        <D3 />
        <Newsletter />
      </div>
  	</div>
  ); 
}

function Ipad() {
	return (
		<div className="books--ipad">
			<img src={Ebook} alt="Ebook" />
			<div className="books--ipad--desc">
				<p>These books are great additions to our in-person training. Some are available for free to attendees of our workshops.</p>
				<hr></hr>
			</div>
		</div>
	);
}

function Hood() {
	return (
		<div className="books--hood">
			<img src={HoodBook} alt="React Under the Hood Book" />
			<div className="books--hood--title">
				<h2>React Under the Hood:</h2>
				<h2>A Beginner's Guide</h2>
				<p>Freddy Rangel</p>
			</div>
			<div className="books--hood--button">
				<Button url="/training">Purchase Book <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Button>
			</div>
			<p>React is becoming the preferred JavaScript library for building web and native applications but few understand how it works under the hood. The book covers its architectural philosophy, useful React patterns and working with third-party libraries. It guides you through React by building a simple Star Trek video game</p>
			<hr></hr>
		</div>
	);
}

function D3() {
	return (
		<div className="books--d3">
			<img src={Cover} alt="D3 Book Cover" />
			<div className="books--d3--title">
				<h2>React + d3js ES6:</h2>
				<h2>Reusable dataviz &</h2>
				<h2>games using modern</h2>
				<h2>Javascript</h2>
				<p>Swizec Teller</p>
			</div>
			<div className="books--d3--button">
				<Button url="/training">Purchase Book <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Button>
			</div>
			<p>React with d3.js was the most fun I've had in years. Creating dynamic data and visualizations on the web is a pain in the ass. With React + d3.js ES6 you'll learn how to build re-usable visualization components using modern JavaScript standards in about an hour.</p>
		</div>
	);
}
