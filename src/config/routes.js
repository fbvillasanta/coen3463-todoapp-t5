import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
import { render } from 'react-dom';
import Todo from '../containers/todolistContainer';
// import Login from '../components/Login/login';
import LoginPage from '../containers/LoginPage';
import SignUpForm from '../components/Login/SignUpForm';
// import SignUpPage from '../containers/SignUpPage';
import ForgotForm from '../components/Login/ForgotForm';
const Routes = (props) => (
	<Router {...props}>
		<Route path='/' component={Todo} />
		<Route path='/auth' component={LoginPage} />
		<Route path='/register' component={SignUpForm} />
		<Route path='/forgot' component={ForgotForm} />
	</Router>
);

export default Routes;
