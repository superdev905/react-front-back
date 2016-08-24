import './index.scss';
import React from 'react';

export default function Books() {
  return (
  	<div className="books">
  		<Tagline />
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