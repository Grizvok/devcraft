const nodeMailer = require('nodemailer');
const cors = require('cors');
const express = require('express');
const router = express.Router();

const corsOptions = {
  origin: 'https://www.trevorhunka.xyz',
  OptionsSuccessStatus: 200,
};

router.options('/', cors());

router.post('/', cors(corsOptions), async (req, res) => {
  console.log('this runs!');
  const messageStr = await JSON.stringify(req.body);
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
