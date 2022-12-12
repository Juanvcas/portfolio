import { images } from '@api/galery/data';

export default function handler(req, res) {
	if (
		req.method === 'POST' ||
		req.method === 'PUT' ||
		req.method === 'PATCH' ||
		req.method === 'DELETE'
	) {
		res.status(200)({
			respuesta: 'No puedes modificar esta API',
		});
	} else {
		res.status(200).json(images);
	}
}
