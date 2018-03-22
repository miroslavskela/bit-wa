import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter,Route,Switch} from 'react-router-dom';
import SinglePage from './app/SinglePage'

ReactDOM.render(

    <HashRouter>
    <Switch>
        <Route exact path="/" component={App}/>   
        <Route exact path="/show/:id" component={SinglePage}/>    
    </Switch>
</HashRouter>
    
    , document.getElementById('root'));
registerServiceWorker();
