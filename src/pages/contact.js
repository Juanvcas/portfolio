import Head from 'next/head';
import { useState } from 'react';
import AlertMessage from '@common/AlertMessage';
import useSendEmail from '@hooks/useSendEmail';
import s from '@styles/pages/contact.module.css';

const contact = () => {
	const [alert, setAlert] = useState(false);
	const [alertState, setAlertState] = useState();
	const [alertMsg, setAlertMsg] = useState('Mensaje enviado correctamente.');

	const sendMessage = (e) => {
		e.preventDefault();

		const name = document.querySelector(`#form_name`);
		const email = document.querySelector(`#form_email`);
		const subject = document.querySelector(`#form_subject`);
		const body = document.querySelector(`#form_body`);

		console.log(name, email, subject, body);

		useSendEmail(
			subject.value,
			body.value,
			setAlert,
			setAlertState,
			setAlertMsg
		);
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
