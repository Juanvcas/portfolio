const sgmail = require('@sendgrid/mail');

const useSendEmail = async (
	subject,
	text,
	setAlert,
	setAlertState,
	setAlertMsg
) => {
	sgmail.setApiKey(process.env.NEXT_PUBLIC_SG_KEY);
	const message = {
		to: process.env.NEXT_PUBLIC_EMAIL2,
		from: process.env.NEXT_PUBLIC_EMAIL2,
		subject: subject,
		text: text,
	};

	sgmail
		.send(message)
		.then((res) => {
			setAlertMsg('El mensaje se ha enviado correctamente.');
			setAlertState(true);
			setAlert(true);
		})
		.catch((err) => {
			console.error(err);
			setAlertMsg(
				'Hubo un error al intentar enviar el mensaje, intentalo de nuevo mas tarde.'
			);
			setAlertState(false);
			setAlert(true);
		});
};

export default useSendEmail;
