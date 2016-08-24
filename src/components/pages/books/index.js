import './index.scss';
import React      from 'react';
import Newsletter from 'components/common/newsletter';
import Button     from 'components/common/button';
import Ebook      from './assets/ebook.svg';
import HoodBook   from './assets/hood.svg';

export default function Books() {
  return (
  	<div className="books">
  		<Tagline />
  		<Ipad />
  		<Hood />
  		<Newsletter />
  	</div>
  ); 
}

function Tagline() {
  return (
    <div className="books--tagline">
      <h2>Books</h2>
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