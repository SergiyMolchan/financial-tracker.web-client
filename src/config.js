const api = {
	host: process.env.REACT_APP_API_URL || 'http://127.0.0.1:8080',
	registration: {
		method: 'POST',
		url: 'user/registration',
	}
};
console.log('process.env', process.env);
const app = {
	mode: process.env.REACT_APP_MODE || 'production'
};

export { api, app };
