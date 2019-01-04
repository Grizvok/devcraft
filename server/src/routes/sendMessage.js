const nodeMailer = require('nodemailer');
var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
  console.log('hit the new endpoint!');
  const emailStr = await JSON.stringify(req.body);
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.USER_PW,
    },
  });

  const mailOptions = {
    from: 'devcraft6772@gmail.com', // sender address
    to: 'devcraft6772@gmail.com', // list of receivers
    subject: 'Message from devCraft site!', // Subject line
    html: `${emailStr}`, // plain text body
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  if (req.body) {
    res.status(200).send({ message: 'Your message was sent successfully' });
  }
});

module.exports = router;
