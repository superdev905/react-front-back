import './index.scss';
import React    from 'react';
import Ebook    from './assets/ebook.svg';
import HoodBook from './assets/hood.svg';

export default function Books() {
  return (
  	<div className="books">
  		<Tagline />
  		<Ipad />
  		<Hood />
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
		</div>
	);
}