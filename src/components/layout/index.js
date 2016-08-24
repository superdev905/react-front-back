import './index.css';
import React  from 'react';
import Header from './header';
import Footer from './footer';

export default function App({children}) {
  return (
    <div className="app">
      <Header />
      { children }
      <Footer />
    </div>
  );
}
