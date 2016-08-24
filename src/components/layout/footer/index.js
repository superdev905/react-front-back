import './index.scss';
import React from 'react';

export default function Footer () {
  return (
    <div className="footer">
      <div className="home--footer--social">
        <a href="https://twitter.com/thereactu" target="_blank"><i className="fa fa-twitter"></i></a>
        <a href="https://www.facebook.com/reactuniversity" target="_blank"><i className="fa fa-facebook-f"></i></a>
      </div>
      <p>Copyright { '\u00A9' } 2016 React University</p>
    </div>
  );
}
