import React from "react";

export default () => (
  <div className="columns">
    <div className="column about-box is-three-fifths is-offset-1">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="Image"
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                <small>31m</small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                efficitur sit amet massa fringilla egestas. Nullam condimentum
                luctus turpis.
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item" aria-label="reply">
                  <span className="icon is-small">
                    <i className="fas fa-reply" aria-hidden="true" />
                  </span>
                </a>
                <a className="level-item" aria-label="retweet">
                  <span className="icon is-small">
                    <i className="fas fa-retweet" aria-hidden="true" />
                  </span>
                </a>
                <a className="level-item" aria-label="like">
                  <span className="icon is-small">
                    <i className="fas fa-heart" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  </div>
);
