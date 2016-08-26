import './index.css';
import Header from './header';
import Footer from './footer';
import React, {
  Children,
  cloneElement
}  from 'react';

export default function Layout({ children }) {

  const isMobile = checkForMobile();

  const newChildren = Children.map(children, (child) => {
    const childProps = Object.assign({}, child.props, { isMobile });
    return cloneElement(child, childProps)
  });

  return (
    <div className="app">
      <Header isMobile={ isMobile }/>
      { newChildren }
      <Footer isMobile={ isMobile }/>
    </div>
  );
}

const checkForMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|Playbook|IEMobile|Opera Mini|NokiaBrowser|Silk/gi.test(navigator.userAgent);
