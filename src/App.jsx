import * as config from './config';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Authentication from './pages/authentication/Authentication';
import Registration from './pages/registration/Registration';


function App() {
	console.log(config.api);
	const publicRoutes = [
		{
			path: '/authentication',
			component: Authentication
		},
		{
			path: '/registration',
			component: Registration
		},
		{
			path: '*',
			component: () => (<h1>404</h1>)
		},
	];
	// const publicRoutes = [];

	return (
		<Router>
			<div>
				<Switch>
					{
						publicRoutes.map((route, index) => (
							<Route key={index} path={route.path}>
								{route.component}
							</Route>
						))
					}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
