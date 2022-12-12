import Head from 'next/head';
import { useEffect, useState } from 'react';
import AlertMessage from '@common/AlertMessage';
import s from '@styles/pages/contact.module.css';

const contact = () => {
	const [alert, setAlert] = useState(false);
	const [alertState, setAlertState] = useState();
	const [alertMsg, setAlertMsg] = useState(
		'El mensaje se ha enviado correctamente.'
	);

	const submitted = () => {};

	useEffect(() => {
		const next = document.querySelector('#_next');
		next.value = window.location.href;
	});
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
							action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_EMAIL1}`}
							method='POST'
							className={s.form}
						>
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
							<input type='hidden' name='_captcha' value='false'></input>
							<input
								type='hidden'
								name='_autoresponse'
								value='El mensaje ha sido enviado correctamente'
							></input>
							<input id='_next' type='hidden' name='_next' value=''></input>
						</form>
						{alert && <AlertMessage message={alertMsg} state={alertState} />}
					</div>
				</section>
			</main>
		</>
	);
};

export default contact;
