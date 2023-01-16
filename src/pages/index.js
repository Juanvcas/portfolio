import Head from 'next/head';
import Image from 'next/image';
import {
	SiNextdotjs,
	SiReact,
	SiNodedotjs,
	SiMysql,
	SiWordpress,
	SiBlender,
	SiAdobephotoshop,
	SiJavascript,
	SiTypescript,
} from 'react-icons/si';
import { LinkButton } from '@common/Buttons';
import { imagesStyles } from '@styles/passingCSS/imagesStyles';
import s from '@styles/pages/home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Juan Vasquez</title>
			</Head>
			<main className={s.main}>
				<section className={`${s.main_cont} ${s.main_hero}`}>
					<div className={`content-limit ${s['main_hero-cont']}`}>
						<figure>
							<img
								src='https://i.postimg.cc/c4xN5vvv/Juan.jpg'
								alt='Juan Vasquez'
								title='Juan Vasquez'
								loading='lazy'
							/>
						</figure>
						<h1>
							Hola!, soy
							<br /> <strong>Juan Vasquez</strong>
						</h1>
						<h2>DESARROLLADOR WEB</h2>
						<LinkButton link={'/contact'} text={'Contáctame'} />
					</div>
				</section>
				<section className={`${s.main_cont} ${s.main_desc}`}>
					<div className={'content-limit'}>
						<h2>Soluciones en aplicaciones web</h2>
						<div className={s['cont-flex']}>
							<figure>
								<Image
									src='/assets/design.svg'
									alt='design'
									width={0}
									height={0}
									style={imagesStyles}
								/>
							</figure>
							<h3>
								Especializado en aplicaciones web con{' '}
								<strong>JavaScript</strong> utilizando los frameworks{' '}
								<strong>ReactJS</strong> y <strong>NextJS</strong>.<br />
								Te ayudo a crear tu <strong>página web</strong>, ya sea que
								quieras crear un e-commerce, portafolio, galería o una página
								para tu marca personal.
							</h3>
						</div>
					</div>
				</section>
				<section className={`${s.main_cont} ${s.main_desc}`}>
					<div className={'content-limit'}>
						<h2>Aplicaciones web y páginas estáticas</h2>
						<div className={`${s['cont-flex']} ${s['cont-flex-r']}`}>
							<figure>
								<Image
									src='/assets/progressive.svg'
									alt='progressive'
									width={0}
									height={0}
									style={imagesStyles}
								/>
							</figure>
							<p>
								Con la ayuda de diferentes tecnologías enfocadas en mejorar la
								usabilidad en la web y la{' '}
								<strong>experiencia de usuario</strong>, te puedo ayudar a
								encontrar <strong>la mejor solución</strong> que necesites para
								tu página web.
							</p>
						</div>
					</div>
				</section>
				<section className={`${s.main_cont} ${s.main_skills}`}>
					<div className={'content-limit'}>
						<h2>Tecnologías</h2>
						<p>
							Utilizando las <strong>herramientas top</strong> en la industria
							se asegura la mejor experiencia en la navegación y total{' '}
							<strong>flexibilidad en el diseño</strong> sin depender de
							plantillas y limitaciones.
						</p>
						<div className={s.skills_gloss}>
							<h3>SOLUCIONES EN EL FRONTEND</h3>
							<div className={s['gloss-skl']}>
								<SiJavascript title='JavaScript' />
								<SiTypescript title='TypeScript' />
								<SiNextdotjs title='Next.js' />
								<SiReact title='React.js' />
								<SiWordpress title='WordPress' />
							</div>
							<h3>SOLUCIONES EN EL BACKEND</h3>
							<div className={s['gloss-skl']}>
								<SiNodedotjs title='Node.js' />
								<SiMysql title='MySQL' />
							</div>
						</div>
						{/* <Link href={'/'} className={s['py-link']}>
							Proyectos
						</Link> */}
					</div>
				</section>
				<div className='content-limit separator'></div>
				<section className={`${s.main_cont} ${s.main_skills}`}>
					<div className={'content-limit'}>
						<h2>¡Hay mas!</h2>
						<h3>
							Te ofrezco una solución en{' '}
							<strong>renderización de producto</strong>, espacios e imagen de
							marca y mostrar la mejor faceta de tu presentación de negocio o
							marca personal. <br />
							Generando imágenes por computadora, se{' '}
							<strong>resalta tu producto</strong> para mostrar lo mejor en
							cualquier ámbito y luzca genial en <strong>tu página web</strong>.
						</h3>
						<div className={s.skills_gloss}>
							<h3>RENDERIZAIÓN</h3>
							<div className={s['gloss-skl']}>
								<SiBlender title='Blender' />
								<img
									src='https://img.icons8.com/nolan/96/autodesk-3ds-max.png'
									alt='3Ds max'
									title='3Ds Max'
									loading='lazy'
								/>
							</div>
							<h3>EDICIÓN</h3>
							<div className={s['gloss-skl']}>
								<SiAdobephotoshop title='Photoshop' />
								<img
									className={s['skl-img']}
									src='https://img.icons8.com/ios-filled/100/null/davinci-resolve.png'
									alt='Davinci Resolve'
									title='Davinci Resolve'
									loading='lazy'
								/>
							</div>
						</div>
						<LinkButton link={'/galery'} text={'Galería 3D'} />
					</div>
				</section>
			</main>
		</>
	);
}
