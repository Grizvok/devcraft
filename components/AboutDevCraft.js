import React from "react";
import Link from "next/link";

export default () => (
  <div className="tile is-ancestor">
    <div className="tile is-4 is-vertical is-parent">
      <div className="tile is-child box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Trevor Hunka</strong> <small>@devcraft1</small> I am a
                self-taught software developer and web designer interested in
                finding customers who need web solutions and hosting for both
                static web pages and dynamic applications. We typically deploy
                applications and static sites using Next.js, an excellent
                framework built on top of React and other powerful tools like
                webpack.
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
      <div className="tile is-child box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <span className="mission-statement">
                  <strong>Our mission</strong>
                </span>
                <br />
                Here at devCraft, we believe in an increasing importance of
                interfacing with computers. As technology progresses and becomes
                more intertwined in our day to day life, the opportunities for
                software to create a positive impact in all facets increases
                exponentially. devCraft exists to bring your software vision to
                life!
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <div className="tile is-child box">
        <div className="content">
          <h1 className="belief-title"> Easy && Renewable</h1>
          <ul>
            <li className="belief-list-item">
              <span className="belief-topic">Flexibility:</span> Whether it is a
              static page or a full stack application, devCraft is ready to meet
              your needs.
            </li>
            <li className="belief-list-item">
              <span className="belief-topic">Options:</span> Just want the
              source code for your project? Or do you want us to take care of
              hosting and deployment? Either way, devCraft will customize a
              solution.
            </li>
            <li className="belief-list-item">
              <span className="belief-topic">Transparent:</span> We strive to be
              as transparent as possible when it comes to the cost of your
              project and with our business in general.
            </li>
            <li className="belief-list-item">
              <span className="belief-topic">Free estimates:</span> No problem!
              Describe your project needs and devCraft will provide an estimate
              of the cost.
            </li>
            <li className="belief-list-item">
              <span className="belief-topic">Involved:</span> As your project
              evolves and grows, it is our core belief that we must stay fully
              engaged and keep open any and all lines of communication. Keeping
              the client involved to achieve your vision is important.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

{
  /* <div className="columns about-columns">
    <div className="column about-box is-three-fourths">
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Trevor Hunka</strong> <small>@devcraft1</small> I am a
                self-taught software developer and web designer interested in
                finding customers who need web solutions and hosting for both
                static web pages and dynamic applications. We typically deploy
                applications and static sites using Next.js, an excellent
                framework built on top of React and some other powerful tools
                like webpack.
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
            At devCraft we aim to build a powerful internet presence for your
            business by building sleek responsive websites as well as providing
            hosting as a service to set us up as a simple but complete solution
            that is sustainable and extremely easy for you to use. We also build
            full stack web applications with our specialty being React and
            NodeJS with PostgreSQL as a database, which when combined is a
            flexible ecosystem for developing performant web applications.
          </p>
        </div>
      </div>
    </div>
  </div> */
}
