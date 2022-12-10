import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='es-ES'>
				<Head>
					<meta name='robots' content='noindex,nofollow' />
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
					<link
						href='https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300&family=Roboto+Serif:opsz@8..144&display=swap'
						rel='stylesheet'
					/>
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
