import './index.scss';
import React from 'react';

export default function Tagline({ title }) {
  return (
    <div className="tagline">
      <h2>{ title }</h2>
    </div>
  );
}

