const sgmail = require('@sendgrid/mail');

export const sendEmail = async (req, res) => {
	sgmail.setApiKey(process.env.NEXT_PUBLIC_SG_KEY);

	const { email, subject, message } = req.body;

	const content = {
		to: process.env.NEXT_PUBLIC_EMAIL1,
		from: process.env.NEXT_PUBLIC_EMAIL2,
		subject: subject,
		text: message,
		html: `<p>${message}</p>`,
	};

	try {
		await sgmail.send(content);
		res.status(200).send('Mensaje enviado');
		// console.log('mensaje enviado');
	} catch (err) {
		res.status(400).send('El mensaje no ha sido enviado');
		console.error(err);
	}
};

export default sendEmail;
