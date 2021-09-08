import { api, app } from '../config';
console.log(app);
const url = `${api.host}/${api.registration.url}`;

export default async function registrationAPI(data) {
	const response = await fetch(url, {
		method: api.registration.method,
		mode: app.mode === 'local' ? 'no-cors': 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(data)
	});
	return response.json();
}
