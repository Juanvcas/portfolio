import Header from '@components/Header';
import Footer from '@components/Footer';
import '@styles/global.css';

function Portfolio({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default Portfolio;
