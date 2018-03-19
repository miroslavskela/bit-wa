import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Footer from "./partials/footer"
import Header from "./partials/header"
import Main from "./users/Main"


const App = ({ data }) => {
  //console.log(users);

  return (
      <div>
          <Header />
          <Main data={data} />
          <Footer />
      </div>
  )
}
export default App


