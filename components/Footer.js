import React from "react";
import Link from 'next/link';

export default () => (
  <div className="columns">
    <div className="column is-centered is-three-fifths is-offset-one-fifth">
        <footer className="footer is-paddingless">
          <div className="content footer-border has-text-centered">
          <Link prefetch href="/">
              <a>devCraft</a>
            </Link>
          </div>
        </footer>
    </div>
  </div>
);
