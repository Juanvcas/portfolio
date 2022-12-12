import Head from 'next/head';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AlertMessage from '@common/AlertMessage';
import s from '@styles/pages/contact.module.css';

const contact = () => {
	const [alert, setAlert] = useState(false);
	const [alertState, setAlertState] = useState();
	const [alertMsg, setAlertMsg] = useState(
		'El mensaje se ha enviado correctamente.'
	);

	const form = useRef();

	const submitted = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				`${process.env.NEXT_PUBLIC_EJS_SERVICE}`,
				`${process.env.NEXT_PUBLIC_EJS_TEMPLATE}`,
				form.current,
				`${process.env.NEXT_PUBLIC_EJS_KEY}`
			)
			.then(() => {
				setAlertMsg('El mensaje se ha enviado correctamente.');
				setAlertState(true);
				setAlert(true);
			})
			.catch((err) => {
				setAlertMsg(
					'El mensaje no se pudo enviar, intentalo de nuevo mas tarde.'
				);
				setAlertState(false);
				setAlert(true);
				console.error(err);
			});
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
						<form
							ref={form}
							id='contact_form'
							className={s.form}
							onSubmit={submitted}
						>
							<label htmlFor={'name'}>
								<span>Nombre *</span>
								<input
									type={'text'}
									name={'user_name'}
									autoComplete={'name'}
									id={'form_name'}
									required
								/>
							</label>
							<label htmlFor={'email'}>
								<span>Email *</span>
								<input
									type={'email'}
									name={'user_email'}
									autoComplete={'email'}
									id={'form_email'}
									required
								/>
							</label>
							{/* <label htmlFor={'subject'}>
								<span>Asunto *</span>
								<input
									type={'subject'}
									name={'user_subject'}
									autoComplete={'subject'}
									id={'form_subject'}
									required
								/>
							</label> */}
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
