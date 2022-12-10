import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='es-ES'>
				<Head>
					<meta name='robots' content='noindex,nofollow' />
				</Head>
				<body>
					<Main></Main>
					<NextScript></NextScript>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
