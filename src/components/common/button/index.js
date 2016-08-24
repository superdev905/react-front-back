import './index.scss';
import React    from 'react';
import { Link } from 'react-router';

export default function Button({ url, children }) {
    return (
      <Link to={ url } className="cta-button">{ children }</Link>
    );
}
