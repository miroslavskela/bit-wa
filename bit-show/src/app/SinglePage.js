import React, { Component, Fragment } from 'react';
import Header from './partials/Header'
import Footer from './partials/Footer'
import { showService } from '../service/ShowService'
import {Link} from 'react-router-dom'


import '../App.css';

class SinglePage extends Component {
  constructor(props){
    super(props);
    this.state={
      show:{}
    
    }
  }

  componentDidMount() {
    showService.fetchSingleShow(this.props.match.params.id)
      .then(show => {
        this.setState({ show })
      })
      
  }

  render() {
      console.log(this.state.show)
      return (
        <div>
         <React.Fragment>
          <Header/>
          <div className="col-md-4 offset-4">
        <div className="card ">
        <img className="card-img-top" src={this.state.show.image} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{this.state.show.name}</h5>
          <p className="card-text">{this.state.show.summary}</p>
          <Link to="/">Homepage</Link>
        </div>
      </div>
      </div>
          <Footer/>
        </React.Fragment>  
        </div>
      )
  }
}
export default SinglePage