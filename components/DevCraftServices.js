import React from 'react';
import Link from 'next/link';

export default () => (
  <div className="tile is-ancestor">
    <div className="tile is-4 is-vertical is-parent">
      <div className="tile is-child box">
        <h1 className="main-text">Services</h1>
        <div>
          <i className="fas fa-chevron-circle-right">
            {' '}
            Full Stack Web Application Development
          </i>
        </div>
        <div>
          <i className="fas fa-chevron-circle-right">
            {' '}
            Web Design and Branding
          </i>
        </div>
        <div>
          <i className="fas fa-chevron-circle-right">
            {' '}
            Search Engine Optimization
          </i>
        </div>
        <div>
          <i className="fas fa-chevron-circle-right">
            {' '}
            Beginner Web Development Education
          </i>
        </div>
      </div>
      <div className="tile is-child box">
        <h1 className="main-text">My stack && tools</h1>
        <div>
          <i className="fas fa-check"> React</i>
        </div>
        <div>
          {' '}
          <i className="fas fa-check"> Node</i>
        </div>
        <div>
          {' '}
          <i className="fas fa-check"> Express</i>
        </div>
        <div>
          <i className="fas fa-check"> PostgreSQL</i>
        </div>
        <div>
          <i className="fas fa-check"> Bulma</i>
        </div>
      </div>
    </div>
    <div className="tile is-parent">
      <div className="tile is-child box">
        <h1 className="main-text">Weekly Javascript && Web Education:</h1>
        <div className="attribution">
          <h2>
            (All of these educational links have been cultivated by{' '}
            <Link href="https://www.youtube.com/c/TimErmilov">
              <a>Tim Ermilov </a>
            </Link>
            creator of BxJS)
          </h2>
        </div>
        <br />
        <ul className="education-list">
          <li className="education-link">
            <Link href="https://dev.to/agathacco/how-to-create-pure-css-illustrations-and-animate-them---part-1-1j1k">
              <a>How to create pure CSS illustrations and animate them</a>
            </Link>
          </li>
          <li className="education-link">
            <Link href="https://medium.com/@ctrlplusb/easy-peasy-global-state-in-react-w-hooks-421f5bf827cf">
              <a>Easy Peasy global state in React w/ Hooks</a>
            </Link>
          </li>
          <li className="education-link">
            <Link href="https://medium.com/javascript-scene/transducers-efficient-data-processing-pipelines-in-javascript-7985330fe73d">
              <a>
                Transducers: Efficient Data Processing Pipelines in JavaScript
              </a>
            </Link>
          </li>
          <li className="education-link">
            <Link href="https://medium.com/@pomber/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d">
              <a>Lazy loading (and preloading) components in React 16.6</a>
            </Link>
          </li>
          <li className="education-link">
            <Link href="https://overreacted.io/why-do-we-write-super-props/">
              <a>Why Do We Write super(props)?</a>
            </Link>
          </li>
          <li className="education-link">
            <Link href="https://www.ably.io/concepts/websockets">
              <a>WebSockets - A Conceptual Deep-Dive</a>
            </Link>
          </li>
          <li className="education-link">
            <Link href="https://blog.bitsrc.io/understanding-memoization-in-javascript-to-improve-performance-2763ab107092">
              <a>
                Understanding Memoization in JavaScript to Improve Performance
              </a>
            </Link>
          </li>
          <li className="education-link">
            <Link href="https://dev.to/brightdevs/using-webassembly-with-react-1led">
              <a>Using WebAssembly with React</a>
            </Link>
          </li>
          <li className="education-link">
            <Link href="https://bitsofco.de/what-exactly-is-the-dom/">
              <a>What, exactly, is the DOM?</a>
            </Link>
          </li>
          <li className="education-link">
            <Link href="https://medium.com/@devdevcharlie/experimenting-with-brain-computer-interfaces-in-javascript-8d6cb891fda8">
              <a>Experimenting with brain-computer interfaces in JavaScript.</a>
            </Link>
          </li>

          <li className="education-link">
            <Link href="https://nystudio107.com/blog/an-annotated-webpack-4-config-for-frontend-web-development">
              <a>An Annotated webpack 4 Config for Frontend Web Development</a>
            </Link>
          </li>
          <li className="education-link">
            <Link href="https://levelup.gitconnected.com/the-definite-guide-to-handling-errors-gracefully-in-javascript-58424d9c60e6">
              <a>Handling Errors in JavaScript: The Definitive Guide</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
