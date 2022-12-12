import Link from 'next/link';

const NavMenu = ({ className, onClick }) => {
	return (
		<nav className={className} onClick={onClick}>
			<ul>
				{/* <li>
					<Link href={'/'}>Portafolio</Link>
				</li> */}
				<li>
					<Link href={'/galery'}>Galería</Link>
				</li>
				<li>
					<Link href={'/contact'}>Contacto</Link>
				</li>
				<li>
					<Link href={'/cv'}>CV</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavMenu;
