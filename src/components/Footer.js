import Link from 'next/link';
import NavMenu from '@common/NavMenu';
import { SiGithub } from 'react-icons/si';
import s from '@styles/components/footer.module.css';

const Footer = () => {
	return (
		<footer className={s.main}>
			<div className={`content-limit ${s.main_cont}`}>
				<Link
					href={'https://github.com/Juanvcas'}
					target={'_blank'}
					className={s['nav_git-link']}
				>
					<SiGithub />
				</Link>
				<NavMenu className={s.main_nav} onClick={null} />
			</div>
			<section className={`content-limit ${s.credits}`}>
				<p>Hecho con 💙:</p>
				<Link href={'/'} className={s.main_logo}>
					jv_
				</Link>
			</section>
		</footer>
	);
};

export default Footer;
