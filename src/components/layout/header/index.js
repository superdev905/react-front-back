import './index.scss';
import React             from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link }          from 'react-router';
import Radium            from 'radium';

const RadiumLink = Radium(Link);

export default function Header() {
  return (
    <div className="app-header">
      <div className="row">
        <div className="app-header--logo-container medium-4 columns">
          <img src={require('./assets/react_university_icon_alt_light.svg')} alt="React University Logo" />
          <span className="app-header--name"><Link to="/">React University</Link></span>
        </div>
        <BurgerMenu />
        <DesktopMenu />
      </div>
    </div>
  );
}

function BurgerMenu() {
  const styles = {
    bmMenuWrap: {
      zIndex: '9999'
    },
    bmOverlay: {
      height: 'calc(100% + 35px)'
    },
    bmMenu: {
      height  : 'calc(100% + 35px)',
      padding : '2.5em 1.3em 0'
    }
  };
  return (
    <Menu right={ true } styles={ styles } isOpen={false}>
      <RadiumLink to="/workshops" className="menu-item"><i className="fa fa-code" aria-hidden="true" /> Workshops</RadiumLink>
      <RadiumLink to="/books" className="menu-item"><i className="fa fa-book" aria-hidden="true" /> Books</RadiumLink>
      <RadiumLink to="/about" className="menu-item"><i className="fa fa-info-circle" aria-hidden="true" /> About</RadiumLink>
      <RadiumLink to="/register" className="menu-item"><i className="fa fa-user-plus" aria-hidden="true" /> Register</RadiumLink>
      <RadiumLink to="/" className="menu-item"><i className="fa fa-home" aria-hidden="true" /> Home</RadiumLink>
    </Menu>
  );
}

function DesktopMenu() {
  return (
    <div className="app-header--navigation medium-8 columns">
      <span className="non-register">
        <Link to="/workshops" className="menu-item">Workshops</Link>
        <Link to="/books" className="menu-item">Books</Link>
        <Link to="/about" className="menu-item">About</Link>
      </span>
      <span className="register">
        <Link to="/workshops" className="menu-item">Register</Link>
      </span>
    </div>
  );
}
