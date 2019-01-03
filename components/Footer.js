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
              <Link href="https://github.com/devforging">
                <a>
                  <span>@github</span>
                </a>
              </Link>
              <Link href="https://twitter.com/devcraft1">
                <a>
                  <span> @twitter</span>
                </a>
              </Link>
            </p>
            <p className="footer-info">Web Development && Design</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
);
