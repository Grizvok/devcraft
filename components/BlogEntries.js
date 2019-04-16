import React from 'react';
import Link from 'next/link';

export default () => (
  <section className="hero is-light is-small">
    <div className="tile is-ancestor">
      <div className="tile is-2 is-vertical is-parent">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">Next.js</p>
            <p className="subtitle">Hello world</p>
            <div className="content">
              <p className="blog-post-synopsis">
                For my first blog post, we'll introduce a quickstart guide to
                getting a Next.js project underway.
                <p>
                  <br />
                  <Link href="/blog/first">
                    <a className="read-post-link has-text-link"> Read post!</a>
                  </Link>
                </p>
              </p>
            </div>
          </article>
        </div>
        {/* <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Twelve</p>
            <p class="subtitle">Subtitle</p>
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
              </p>
            </div>
          </article>
        </div> */}
      </div>
    </div>
  </section>
);
