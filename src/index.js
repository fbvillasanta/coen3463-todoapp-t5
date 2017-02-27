import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './config/routes';

render(<Routes history={browserHistory} />, document.getElementById('root'));
