import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
	SiNextdotjs,
	SiReact,
	SiNodedotjs,
	SiMysql,
	SiWordpress,
	SiBlender,
	SiAdobephotoshop,
	SiJavascript,
} from 'react-icons/si';
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
								src='https://bnz06pap001files.storage.live.com/y4msIb9xjk92u8YR9qD9MJtC5lLtsp4106z_NnAHJkNBOlD58F0pXvrLVLRhp9E4jXCWdSpNXebwHKVyn--fN3IPJuFqT97IPxw4pzYwKsFKQoZsMQ3oBaOhgWcyF9eyb2MRCCfoySh4K6NniuC371GtwaK9HvUXsBFh3ThW-yvD0zVUP8lJ_h7q2j1dDo8bBpR?width=244&height=854&cropmode=none'
								alt='Juan Vasquez'
								title='Juan Vasquez'
							/>
						</figure>
						<h1>
							Hola!, soy
							<br /> <strong>Juan Vasquez</strong>
						</h1>
						<h2>DESARROLLADOR WEB</h2>
						<Link href={'/contact'} className={s['ct-link']}>
							Contáctame
						</Link>
					</div>
				</section>
				<section className={`${s.main_cont} ${s.main_desc}`}>
					<div className={'content-limit'}>
						<h2>Soluciones en aplicaciones web</h2>
						<div className={s['cont-flex']}>
							<figure>
								<Image
									src='/assets/hacker.svg'
									alt='hacker'
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
								quieras crear un portafolio, galería, e-commerce o una simple
								página presentación te la puedo construir.
							</h3>
						</div>
					</div>
				</section>
				<section className={`${s.main_cont} ${s.main_desc}`}>
					<div className={'content-limit'}>
						<h2>Aplicaciones y páginas estáticas</h2>
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
								Con la ayuda de diferentes tecnologias enfocadas en mejorar la
								experiencia de usuario y la usabilidad de la página web, te
								puedo ayudar a encontrar la mejor solución que necesites para tu
								negocio o imagen de marca personal.
							</p>
						</div>
					</div>
				</section>
				<section className={`${s.main_cont} ${s.main_skills}`}>
					<div className={'content-limit'}>
						<h2>Tecnologías</h2>
						<p>
							Estas son algunas de las tecnologias con las que te puedo ayudar a
							contruir lo que estes necesitando.
						</p>
						<div className={s.skills_gloss}>
							<h3>SOLUCIONES EN EL FRONTEND</h3>
							<div className={s['gloss-skl']}>
								<SiJavascript title='JavaScript' />
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
				<section className={`${s.main_cont} ${s.main_skills}`}>
					<div className={'content-limit'}>
						<h2>Hay algo mas</h2>
						<h3>
							Te ofresco varias soluciones en renderización de producto,
							espacios e imagen de marca, con el fin de mostrar la mejor faceta
							de tu presentación de nogocio o marca, te puedo ayudar a generar
							imagenes generadas por computadora para crear imágenes y videos
							que resalten tu producto y luzcan geniales en tu página web.
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
						<Link href={'/galery'} className={s['ga-link']}>
							Galería 3D
						</Link>
					</div>
				</section>
			</main>
		</>
	);
}
