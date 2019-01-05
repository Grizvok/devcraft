const nodeMailer = require('nodemailer');
var express = require('express');
var cors = require('cors');
var router = express.Router();

router.post('/', cors(), async (req, res) => {
  console.log(req.body);
  const messageStr = JSON.stringify(req.body);
  console.log('hit the newest endpoint!');
  const emailStr = await JSON.stringify(req.body);
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PW,
    },
  });

  const mailOptions = {
    from: 'devcraft6772@gmail.com', // sender address
    to: 'devcraft6772@gmail.com', // list of receivers
    subject: 'Message from devCraft site!', // Subject line
    html: `${messageStr}`, // plain text body
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err);
      res
        .status(400)
        .send({ message: 'Your message was not sent successfully' });
    } else {
      console.log(info);
      res.status(200).send({ message: 'Your message was sent sucessfully' });
    }
  });
});

module.exports = router;
