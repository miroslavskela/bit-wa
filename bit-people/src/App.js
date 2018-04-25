import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './app/users/Main'


class App extends Component {
  constructor(props){
    super(props)
   
  }

  
 
  render() {
    return (
      <Fragment>
     
      <Main/>
     
      </Fragment>
    );
  }
}

export default App;
