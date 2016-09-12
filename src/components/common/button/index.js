import './index.scss';
import React    from 'react';
import { Link } from 'react-router';

export default function Button({ external = false, url, children }) {
  const link = external
    ? <a href={ url } className="cta-button" target="_blank">{ children }</a>
    : <Link to={ url } className="cta-button">{ children }</Link>
    return link;
}
