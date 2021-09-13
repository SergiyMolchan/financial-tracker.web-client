import { api } from '../config';
import apiUrlBuilder from '../helpers/apiUrlBuilder';

export default async function registrationAPI(data) {
	const response = await fetch(
		apiUrlBuilder(api.registration.url),
		{
			method: api.registration.method,
			// mode: app.mode === 'local' ? 'no-cors': 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify(data)
		});
	const successStatuses = [200, 201];
	if (successStatuses.includes(response.status)) {
		return response.json();
	} else {
		throw await response.json();
	}
}
