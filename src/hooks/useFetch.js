import { useEffect, useState } from 'react';

const useFecth = (API) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(window.location.origin + API);
			const resData = await res.json();
			setData(resData);
		};
		fetchData();
	}, [API]);
	return data;
};

export { useFecth };
