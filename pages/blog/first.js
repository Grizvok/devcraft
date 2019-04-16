import React from 'react';
import Layout from '../../components/Layout';
import BlogHeader from '../../components/BlogHeader';

export default () => (
  <Layout>
    <BlogHeader />
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <figure class="image is-128x128">
                <img src="/static/first.jpg" />
              </figure>
              <h1 className="title">
                Bootstrapping a Next.js + Express project
              </h1>

              <p className="blog-entry">
                Next.js is an extremely popular React framework built on top of
                that and other incredibly powerful open source software such as
                Webpack. Next enables us to painlessly create static sites or
                dynamic web applications with built in server-side rendering. By
                having our initial page load completed on the server, we can
                increase perceived performance and keep our users engaged.
              </p>
              <p className="blog-entry">
                To start, you'll need to have Node and npm installed.
                Instructions on doing so can be found&nbsp;
                <span>
                  <a className="blog-link" href="https://www.npmjs.com/get-npm">
                    here
                  </a>
                  .
                </span>
                &nbsp;Directions and commands from here on out will be written
                to work with Ubuntu 18.04 but should be similar for 16.04 as
                well. After assuring a successful installation of Node and npm,
                we can open a new terminal and create a new directory for our
                project and cd into it by typing:
                <pre className="code-block">
                  <code>mkdir next-project</code>
                  <p>
                    <code>cd next-project</code>
                  </p>
                </pre>
                We should now be inside of the root folder for our project and
                we will use npm to initialize our package.json and then to
                install Next.js and dependencies:
                <pre className="code-block">
                  <p>
                    <code>npm init -y</code>
                  </p>
                  <code>npm install next react react-dom</code>
                </pre>
                Since we will shortly be adding a custom Express server to our
                project we will now go ahead and edit the scripts section of our
                package.json to allow us to start our soon to be created
                server.js file that will effectively serve as the entry point to
                our application. This can be done by opening up our package.json
                and replacing the scripts section with this:
                <pre className="code-block">
                  <code>
                    "scripts": {'{'}
                    &nbsp;&nbsp;"dev": "node ./server/server.js", <br />
                    &nbsp;&nbsp;"build": "next build", <br />
                    &nbsp;&nbsp;"start": "NODE_ENV=production node
                    ./server/server.js" <br />
                    {'},'}
                  </code>
                </pre>
                We will then create a folder in the root of our project called
                pages. This folder is a required piece of the Next.js puzzle and
                is subsequently one of the reasons why I love it so much. Here's
                why: the routing within our application will now be tied to our
                local filesystem and to the structure that we define inside of
                this special pages directory. This means to add a new route to
                our application we simply need to create a JavaScript file
                inside of the pages directory named after the route we want that
                page to be accessible at. For instance, if we wanted to create a
                new route that will live at
                <code> www.ourExampleDomain.com/contact</code> we can simply
                create a file called contact.js within our pages directory and
                just like that the view we define in that file will be
                accessible as our <code>/contact</code> route. Awesome, right?
              </p>
              <p className="blog-entry">
                Before we add any custom routing we will go ahead and create a
                file called
                <code>index.js</code> within our pages directory which will be
                accessible at the root of our domain such as{' '}
                <code> www.ourExampleDomain.com</code>. In this file we will go
                ahead and export a very simple functional React component by
                writing:
                <pre className="code-block">
                  <code>
                    import React from 'react'; <br />
                    <br />
                    export default () => (<br />
                    &nbsp;&nbsp;{'<h1>'}
                    Hello world!{'</h1>'} <br />
                    );
                  </code>
                </pre>
              </p>
              <p className="blog-entry">
                Now we need to get our custom Express server up and running. To
                start we'll install Express:
                <pre className="code-block">
                  <code>npm install express</code>
                </pre>
                We will then create a new folder in the root of our project
                called server. Inside of this folder we'll create a file called
                server.js which will function as the main entrypoint into our
                web app. Update server.js like so:
                <pre className="code-block">
                  <code>
                    <p>const express = require('express');</p>
                    <p>const next = require('next');</p>
                    <p>const port = parseInt(process.env.PORT, 10) || 3001; </p>
                    <p>const dev = process.env.NODE_ENV !== 'production';</p>
                    <p>
                      const app = next(
                      {'{'} dev {'}'});
                    </p>
                    <p>const handle = app.getRequestHandler();</p>
                    <br />
                    app.prepare().then(() => {'{'}
                    <p> &nbsp;const server = express();</p>
                    <br />
                    <p>server.get('/', (req, res) => {'{'}</p>
                    <p> &nbsp;return app.render(req, res, '/');</p>
                    <p>{'}'});</p>
                    <br />
                    <p>server.get('*', (req, res) => {'{'}</p>
                    <p> &nbsp;return handle(req, res);</p>
                    <p>{'}'}); </p>
                    <br />
                    <p>server.listen(port, (err) => {'{'}</p>
                    <p> &nbsp;if (err) throw err;</p>
                    <p>
                      &nbsp; console.log(`> Ready on http://localhost:${'{'}port
                      {'}'}
                      `);
                    </p>
                    <p> &nbsp;{'}'});</p>
                    <p>{'}'});</p>
                  </code>
                </pre>
              </p>
              <p className="blog-entry">
                The line below that you can find in our <code>server.js</code>{' '}
                is essentially all we need for Next.js to enable server-side
                rendering of our home route.
                <pre className="code-block">
                  <code>
                    <p>server.get('/', (req, res) => {'{'}</p>
                    <p> &nbsp;return app.render(req, res, '/');</p>
                    <p>{'}'});</p>
                  </code>
                </pre>
                With all of this completed, we can now go back into our terminal
                and in the root of our project start our development server by
                running the command <code>npm run dev</code>. You should then be
                able to open your browser of choice and navigate to
                <code>localhost:3001</code> showing the iconic phrase of{' '}
                <h1 className="iconic-phrase-text">"Hello world!".</h1>
              </p>
              <p className="blog-entry">
                In the next blog post we will continue fleshing out our Next.js
                application by adding support for SASS by customizing our{' '}
                <code>next.config.js</code>. This will allow us to begin using
                Bulma which is our current CSS framework of choice. We'll then
                transition by diving into the usage of Next's special{' '}
                <code>Link</code> component which will enable client side
                navigation and a few other features such as clean URLS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
