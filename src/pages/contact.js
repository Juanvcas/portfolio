import Head from 'next/head';
import { useState } from 'react';
import AlertMessage from '@common/AlertMessage';
import s from '@styles/pages/contact.module.css';

const contact = () => {
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [alert, setAlert] = useState(false);
	const [alertState, setAlertState] = useState();
	const [alertMsg, setAlertMsg] = useState('Mensaje enviado correctamente.');

	const sendMessage = async (e) => {
		e.preventDefault();

		const formName = document.querySelector(`#form_name`);
		const formEmail = document.querySelector(`#form_email`);
		const formSubject = document.querySelector(`#form_subject`);
		const formBody = document.querySelector(`#form_body`);

		setInputs({
			name: formName,
			email: formEmail,
			subject: formSubject,
			message: formBody,
		});

		const res = await fetch('./api/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(inputs),
		});
		const text = await res.text();

		if (res.status === 200) {
			setAlertMsg('El mensaje se ha enviado correctamente.');
			setAlertState(true);
			setAlert(true);
		} else {
			setAlertMsg(
				'Hubo un error al intentar enviar el mensaje, intentalo de nuevo mas tarde.'
			);
			setAlertState(false);
			setAlert(true);
		}
	};
	return (
		<>
			<Head>
				<title>Contacto</title>
			</Head>
			<main className={s.main}>
				<section className={s.main_title}>
					<div className={`content-limit`}>
						<h1>Contacto</h1>
						<h2>
							Si quieres contactárme para cotizar algun proyecto que tengas en
							mente, puedes escribirme a travez de este formulario.
						</h2>
					</div>
				</section>
				<section className={s.main_form}>
					<div className={`content-limit`}>
						<form onSubmit={sendMessage} className={s.form}>
							<label htmlFor={'name'}>
								<span>Nombre *</span>
								<input
									type={'text'}
									name={'name'}
									autoComplete={'name'}
									id={'form_name'}
									required
								/>
							</label>
							<label htmlFor={'email'}>
								<span>Email *</span>
								<input
									type={'email'}
									name={'email'}
									autoComplete={'email'}
									id={'form_email'}
									required
								/>
							</label>
							<label htmlFor={'subject'}>
								<span>Asunto *</span>
								<input
									type={'subject'}
									name={'subject'}
									autoComplete={'subject'}
									id={'form_subject'}
									required
								/>
							</label>
							<label htmlFor={'message'}>
								<span>Mensaje *</span>
								<textarea
									name={'message'}
									placeholder={'Cuentame que es lo que tienes en mente...'}
									id={'form_body'}
									required
								/>
							</label>
							<input
								type={'submit'}
								name={'submit'}
								value={'Enviar'}
								id={'form_submit'}
							/>
						</form>
						{alert && <AlertMessage message={alertMsg} state={alertState} />}
					</div>
				</section>
			</main>
		</>
	);
};

export default contact;
