import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
import { render } from 'react-dom';
import Todo from '../containers/todolistContainer';
import Login from '../components/Login/login';

const Routes = (props) => (
	<Router {...props}>
		<Route path='/' component={Todo} />
		<Route path='/auth' component={Login} />
	</Router>
);

export default Routes;
