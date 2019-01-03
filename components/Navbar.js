//npm packages
import React from 'react';
import Link from 'next/link';

//our packages

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    //this.closeNavbar = this.closeNavbar.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleNavigation() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('#' + burger.dataset.target);

    burger.classList.remove('is-active');
    nav.classList.remove('is-active');
  }

  handleClick() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('#' + burger.dataset.target);

    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  }

  render() {
    return (
      <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link prefetch href="/">
              <a className="navbar-item">
                <i className="fas fa-2x fa-home" />
              </a>
            </Link>
            <span
              onClick={this.handleClick}
              className="navbar-burger burger"
              data-target="navMenu"
            >
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div onClick={this.handleNavigation} className="navbar-end">
              <Link prefetch href="/about">
                <a className="navbar-item">About</a>
              </Link>
              <a href="/contact" className="navbar-item">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
