import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavMenu from '@common/NavMenu';
import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';
import { SiGithub } from 'react-icons/si';
import s from '@styles/components/header.module.css';

const Header = () => {
	const [menu, setMenu] = useState(false);
	const [button, setButton] = useState(true);

	const router = useRouter();

	const handlerNav = (e) => {
		setMenu(!menu);
		e.stopPropagation();
	};

	const stopEvents = (e) => {
		e.stopPropagation();
	};

	useEffect(() => {
		if (window.innerWidth >= 768) {
			setButton(false);
			setMenu(true);
		} else {
			setButton(true);
			setMenu(false);
		}
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 768) {
				setButton(false);
				setMenu(true);
			} else {
				setButton(true);
				setMenu(false);
			}
		});

		document.body.addEventListener('click', () => {
			if (window.innerWidth < 768) {
				setMenu(false);
			}
		});

		router.events.on('routeChangeComplete', () => {
			if (window.innerWidth < 768) {
				setMenu(false);
			}
		});
	}, []);
	return (
		<header className={s.main}>
			<div className={`content-limit ${s['main-cont']}`}>
				<Link href={'/'} className={s.main_logo}>
					jv_
				</Link>
				<div className={s['nav-cont']}>
					{menu && <NavMenu className={s.main_nav} onClick={stopEvents} />}
					<Link
						href={'https://github.com/Juanvcas'}
						target={'_blank'}
						className={s['nav_git-link']}
					>
						<SiGithub />
					</Link>
					{button && (
						<button className={s.nav_button} onClick={handlerNav}>
							{menu ? <RiMenuUnfoldLine /> : <RiMenuFoldLine />}
						</button>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
