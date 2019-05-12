import React from 'react';
import Link from 'next/link';

// TODO: CHANGE THIS TO BE BASED ON COLUMNS INSTEAD OF TILES.

export default () => (
  <section className="hero is-light is-small">
    <div className="hero-body">
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-3 is-parent">
            <article className="tile is-child box">
              <p className="specific-blog-title">Next.js, Hello world</p>
              <div className="content">
                <p className="blog-post-synopsis">
                  For my first blog post, we'll introduce a quickstart guide to
                  getting a Next.js project underway.
                  <p>
                    <br />
                    <Link href="/blog/first">
                      <a className="read-post-link has-text-link">
                        {' '}
                        Read post!
                      </a>
                    </Link>
                  </p>
                </p>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Foo</p>
              <p class="subtitle">Bar</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Foo</p>
              <p class="subtitle">Bar</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
);
