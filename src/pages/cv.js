import Head from 'next/head';
import Link from 'next/link';
import {
	SiNextdotjs,
	SiReact,
	SiJavascript,
	SiTailwindcss,
	SiNodedotjs,
	SiMysql,
	SiWordpress,
	SiPhp,
	SiGit,
	SiHtml5,
	SiCss3,
	SiBlender,
	SiAdobephotoshop,
} from 'react-icons/si';
import s from '@styles/pages/cv.module.css';

const CV = () => {
	return (
		<>
			<Head>
				<title>Juan Vasquez</title>
			</Head>
			<main className={s.main}>
				<section className={`${s.main_cont} ${s.main_hero}`}>
					<div className={`content-limit ${s['main_hero-cont']}`}>
						<h1>
							<strong>Juan Vasquez</strong>
						</h1>
						<h2>FRONTEND DEVELOPER</h2>
					</div>
				</section>
				<section className={`${s.main_cont} ${s.main_desc}`}>
					<div className={'content-limit'}>
						<h2>Soluciones en aplicaciones web</h2>
						<h3>
							<strong>FrontEnd</strong> developer especializado en aplicaciones
							web con <strong>JavaScript</strong> utilizando los frameworks{' '}
							<strong>ReactJS</strong> y <strong>NextJS</strong>.
						</h3>
						<Link href={'/contact'} className='link'>
							Contáctame
						</Link>
					</div>
				</section>
				<section className={`${s.main_cont} ${s.main_exp}`}>
					<div className={'content-limit'}>
						<h2>Experiencia Reciente</h2>
						<article className={s.exp_art}>
							<h3>CONTENT DEVELOPER</h3>
							<h4>Líneas y Diseños - 5 meses</h4>
							<p>
								Creación de la página web de la empresa y tienda online.
								<br />
								Renderización de contenido (imágenes y videos) de los productos
								de la empresa para redes sociales y página web.
							</p>

							<div className={s.exp_gloss}>
								<p>PÁGINA WEB</p>
								<div className={s['gloss-skl']}>
									<SiWordpress title='WordPress' />
									<SiJavascript title='JavaScript' />
									<SiCss3 title='CSS3' />
									<SiPhp title='PHP' />
								</div>
								<p>RENDERIZACIÓN</p>
								<div className={s['gloss-skl']}>
									<SiBlender title='Blender' />
									<img
										src='https://img.icons8.com/nolan/96/autodesk-3ds-max.png'
										alt='3Ds max'
										title='3Ds Max'
										loading='lazy'
									/>
								</div>
							</div>
						</article>
					</div>
				</section>
				<section className={`${s.main_cont} ${s.main_skills}`}>
					<div className={'content-limit'}>
						<h2>¿Que se hacer?</h2>
						<h3>
							Mis habilidades son mas enfocadas al <strong>FullStack</strong>,
							pero me centro más en el <strong>FrontEnd</strong>.
						</h3>
						<div className={s.skills_gloss}>
							<h3>FRONTEND</h3>
							<div className={s['gloss-skl']}>
								<SiNextdotjs title='Next.js' />
								<SiReact title='React.js' />
								<SiJavascript title='JavaScript' />
								<SiTailwindcss title='TailwindCSS' />
							</div>
							<h3>BACKEND</h3>
							<div className={s['gloss-skl']}>
								<SiNodedotjs title='Node.js' />
								<SiMysql title='MySQL' />
							</div>
							<h3>LO BÁSICO</h3>
							<div className={s['gloss-skl']}>
								<SiGit title='Git' />
								<SiHtml5 title='HTML5' />
								<SiCss3 title='CSS3' />
							</div>
							<h3>OTROS</h3>
							<div className={s['gloss-skl']}>
								<SiWordpress title='WordPress' />
								<SiPhp title='PHP' />
							</div>
						</div>
						{/* <Link href={'/'} className={s['py-link']}>
							Proyectos
						</Link> */}
					</div>
				</section>
				<section className={`${s.main_cont} ${s.main_bio}`}>
					<div className={'content-limit'}>
						<h2>Un poco de mi</h2>
						<p>
							Soy un simple persona que encontro su lugar y espacio en el
							desarrollo de sofware. Comencé en el mundo del soporte técnio en
							sitio ya que siempre he convivido con la tecnología, por giros de
							la vida terminé trabajando en la industria de la arquitectura y
							construcción como dibujante, modelador 3D y renderizador, pero
							sentí que ese no era mi lugar, asi que me enfoque en lo que
							siempre quise y nunca lo supe, la <strong>Programación</strong> y{' '}
							<strong>Desarrollo de Software</strong>.
						</p>
					</div>
				</section>
				<section className={`${s.main_cont} ${s.main_skills}`}>
					<div className={'content-limit'}>
						<h2>Mis otras habilidades</h2>
						<h3>
							Tengo conocimientos en modelado 3D y renderización de imagenes
							estaticas y videos. Ademas de conocimiento en edición de imagenes
							y videos.
						</h3>
						<div className={s.skills_gloss}>
							<h3>Software 3D</h3>
							<div className={s['gloss-skl']}>
								<SiBlender title='Blender' />
								<img
									src='https://img.icons8.com/nolan/96/autodesk-3ds-max.png'
									alt='3Ds max'
									title='3Ds Max'
									loading='lazy'
								/>
							</div>
							<h3>Edición</h3>
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
						<Link href={'/galery'} className='link'>
							Galería 3D
						</Link>
					</div>
				</section>
			</main>
		</>
	);
};

export default CV;
