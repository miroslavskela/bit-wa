import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { usersData } from './data/data';
import createUser from "./services/UserService"


ReactDOM.render(<App data={createUser(usersData)} />, document.querySelector('#root'));
registerServiceWorker();
