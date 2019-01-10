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
          <div className="column about-box is-half is-offset-1">
            <div className="box">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>Trevor Hunka</strong> <small>@devcraft1</small> I
                      am a self-taught software developer and web designer
                      interested in finding customers who need web solutions and
                      hosting for both static web pages and dynamic
                      applications. We typically deploy applications and static
                      sites using Next.js, an excellent framework built on top
                      of React and some other powerful tools like webpack.
                    </p>
                    <span>Message me through our site </span>
                    <Link prefetch href="/contact">
                      <span>
                        <a className="contact-link">here.</a>
                      </span>
                    </Link>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a
                        href="https://twitter.com/devcraft1"
                        className="level-item"
                        aria-label="reply"
                      >
                        <span className="icon is-small">
                          <i className="fab contact-link fa-twitter" />
                        </span>
                      </a>

                      <a
                        href="https://github.com/devforging"
                        className="level-item"
                        aria-label="github"
                      >
                        <span className="icon is-small">
                          <i className="fab contact-link fa-github" />
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
          <div className="column beliefs-box is-one-third">
            <div className="box">
              <div className="content">
                <h1 className="belief-title">Sustainable</h1>
                <p>
                  At devCraft we aim to build a powerful internet presence for
                  your business by building sleek responsive websites as well as
                  providing hosting as a service to set us up as a simple but
                  complete solution that is sustainable and extremely easy for
                  you to use. We also build full stack web applications with our
                  specialty being React and NodeJS with PostgreSQL as a
                  database, which when combined is a flexible ecosystem for
                  developing performant web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
