import Link from 'next/link';
import s from '../styles/components/header.module.css';

const Header = () => {
	return (
		<header className={s.main}>
			<figure>JV</figure>
			<nav className={s.main_nav}>
				<ul>
					<li>
						<Link href={'/'}>CV</Link>
					</li>
					<li>
						<Link href={'/'}>Portafolio</Link>
					</li>
					<li>
						<Link href={'/'}>Galería</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
