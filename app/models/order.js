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
		subject: 'Обращение с сайта baedeker.club', // Subject line
		text: 'Обращение с сайта baedeker.club', // plain text body
	};
	smtpTransport.sendMail(mailOptions, (error, info) => {
		if (error) {
			// return console.log(error);
			return console.log('Error');
		} else {
			console.log('Message sent: %s', info.messageId);
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		}
	});
	return 'asdasd';
}
