import Header from '../components/Header';
import '../styles/global.css';

function Portfolio({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default Portfolio;
