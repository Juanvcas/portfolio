import Link from 'next/link';

const LinkButton = (props) => {
	return (
		<Link href={props.link} className={`${props.className} link`}>
			{props.text}
		</Link>
	);
};

export { LinkButton };
