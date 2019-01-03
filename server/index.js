const express = require('express');
require('dotenv').config();
const next = require('next');
const bodyParser = require('body-parser');
const port = parseInt(process.env.PORT, 10) || 3000;
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

  // server.post('/api/message', async (req, res) => {
  //   console.log(req.body);
  //   const emailStr = await JSON.stringify(req.body);
  //   const transporter = nodeMailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //       user: 'devcraft6772@gmail.com',
  //       pass: 'Tigerisking69',
  //     },
  //   });

  //   const mailOptions = {
  //     from: 'devcraft6772@gmail.com', // sender address
  //     to: 'devcraft6772@gmail.com', // list of receivers
  //     subject: 'Message from devCraft site!', // Subject line
  //     html: `${emailStr}`, // plain text body
  //   };

  //   transporter.sendMail(mailOptions, function(err, info) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(info);
  //     }
  //   });

  //   if (req.body) {
  //     res.status(200).send({ message: 'Your message was sent successfully' });
  //   }
  // });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
