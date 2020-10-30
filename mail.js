const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const dotenv = require('dotenv');
dotenv.config();

const api_key = process.env.REACT_APP_API_KEY;
const domain = process.env.REACT_APP_DOMAIN;

const auth = {
  auth: {
    api_key,
    domain
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: 'alisa.poon97@gmail.com',
    subject,
    text
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  })
}

module.exports = sendMail;
