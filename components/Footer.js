import React from 'react';
import Link from 'next/link';

export default () => (
  <div className="columns is-centered">
    <div className="column">
      <footer className="footer is-paddingless">
        <div className="content footer-border">
          <div className="container footer-text has-text-centered">
            <p className="footer-info has-text-centered">devCraft</p>
            <p className="footer-info">Pittsburgh, Pennsylvania</p>
            <p className="footer-info">
              <a href="https://github.com/devforging">
                <span>@github</span>
              </a>

              <a href="https://twitter.com/devcraft1">
                <span> @twitter</span>
              </a>
            </p>
            <p className="footer-info">Web Development && Design</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
);
