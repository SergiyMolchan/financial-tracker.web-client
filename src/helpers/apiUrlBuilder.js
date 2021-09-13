import { api, app } from '../config';

export default function (endpoint) {
	return app.mode === 'local' ? `/${endpoint}` : `${api.host}/${endpoint}`;
}
