const express = require('express');
require('dotenv').config();
const next = require('next');
const bodyParser = require('body-parser');
const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const nodeMailer = require('nodemailer');
const setupRoutes = require('./src/routes/index');

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  //setup API routes
  setupRoutes(server);

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query);
  });

  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query);
  });

  server.get('/contact', (req, res) => {
    return app.render(req, res, '/contact');
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
