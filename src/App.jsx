import React from 'react';
import * as config from './config';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Authentication from './authentication/Authentication';
import Registration from './registration/Registration';


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
			component: function NotFound() {
				return <h1>404</h1>;
			}
		},
	];
	// const publicRoutes = [];

	return (
		<Router>
			<div>
				<Switch>
					{
						publicRoutes.map((route, index) => (
							<Route key={index} {...route} />
						))
					}
				</Switch>
			</div>
		</Router>
	);
}

/*
 this syntax is incorrect and results in an error with react hooks
 	<Route key={index} path={route.path}>
		{route.component}
	</Route>
*/


export default App;
