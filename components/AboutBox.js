import React from 'react';
import Link from 'next/link';
import chalk from 'chalk';

export default class AboutBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="hero is-light is-small">
        <div className="columns">
          <div className="column about-box is-three-fifths is-offset-1">
            <div className="box">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>Trevor Hunka</strong> <small>@devcraft1</small> I
                      am a completely self-taught software developer and web
                      designer interested in finding customers who need web
                      solutions and hosting for both static web pages and
                      dynamic applications of ALL sizes. If we need to call in
                      another developer or two for a bigger project we can and
                      will. We typically deploy applications and static sites
                      using Next.js, an excellent framework built on top of
                      React and some other powerful tools like webpack. Self
                      taught using amazing free resources such as freeCodeCamp
                      and BxJS, a podcast and livestream series about Building
                      Products with Javascript.
                    </p>
                    <span>Message me through this site </span>
                    <Link prefetch href="/contact">
                      <span>
                        <a className="contact-link">here.</a>
                      </span>
                    </Link>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <Link prefetch href="https://twitter.com/devcraft1">
                        <a className="level-item" aria-label="reply">
                          <span className="icon is-small">
                            <a className="contact-link">
                              <i className="fab fa-twitter" />
                            </a>
                          </span>
                        </a>
                      </Link>
                      <Link prefetch href="https://github.com/devforging">
                        <a className="level-item" aria-label="github">
                          <span className="icon is-small">
                            <a className="contact-link">
                              <i className="fab fa-github" />
                            </a>
                          </span>
                        </a>
                      </Link>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
