import './index.scss';
import Header from './header';
import React  from 'react';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      { children }
      <Footer />
    </div>
  );
}
