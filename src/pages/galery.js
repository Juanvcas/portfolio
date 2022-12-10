import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useFecth } from '../hooks/useFetch';
import Image from 'next/image';
import s from '../styles/pages/galery.module.css';

const galery = () => {
	const images = useFecth('/api/galery');
	return (
		<>
			<Head>
				<title>Galería</title>
			</Head>
			<main className={s.main}>
				<section className={s.main_title}>
					<div className={`content-limit`}>
						<h1>Galería 3D</h1>
						<h2>
							Aquí puedes encontrar mi trabajo como modelador 3D y renderizador.
						</h2>
					</div>
				</section>
				<section className={s.main_galery}>
					<div className={`content-limit ${s.galery_grid}`}>
						{images.map((item, index) => {
							return (
								<img
									key={index}
									src={item.image}
									alt={item.name}
									loading={'lazy'}
									className={s.galery_image}
								/>
							);
						})}
					</div>
				</section>
			</main>
		</>
	);
};

export default galery;
