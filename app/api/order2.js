const db = require('../libs/db');
const nodemailer = require('nodemailer');
let smtpTransport;
 try {
	 smtpTransport = nodemailer.createTransport({
		 host: 'smtp.yandex.ru',
		 port: 465,
		 secure: true, // true for 465, false for other ports 587
		 auth: {
			 user: "pingvin166@yandex.ru",
			 pass: "showJacka2019"
		 }
	 });
 } catch (e) {
	 return console.log('Error: ' + e.name + ":" + e.message);
 }

exports.send = (arg = {}) => {
	const mailOptions = {
		from: 'pingvin166@yandex.ru', // sender address
		to: 'popytaev166@gmail.com', // list of receivers
		subject: 'Заказ', // Subject line
    preview: 'http://prokat-mgn.ru/',
		text: arg.body.msg, // plain text body
	};
	return smtpTransport.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		} else {
			console.log('Message sent: %s', info.messageId);
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		}
	});
  return { status: 'ok' };
}
