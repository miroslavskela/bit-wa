import React, { Component, Fragment } from 'react';
import Header from './app/partials/Header'
import Footer from './app/partials/Footer'
import { showService } from './service/ShowService'
import Main from './app/shows/Main'
import Search from './app/partials/Search';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      shows:[],
      searchValue:[]
    }
  }

  componentDidMount() {
    showService.fetchShows()
      .then(ShowList => {
        this.setState({ shows: ShowList.slice(0,49) })
      })  
  }

onSearchValueChange = (searchValue) =>{
  this.setState({searchValue:searchValue})

}
getShows = () => {
  const {shows} = this.state
  const filterShows = shows.filter((show) =>{
    return (show.name).includes(this.state.searchValue)
  })
  return filterShows

}


  render() {
      return (
        <React.Fragment>
          <Header/>
          <Search onSearchValueChange={this.onSearchValueChange}/>
          <Main data = {this.getShows()} />
          <Footer/>
        </React.Fragment>  
    );
  }
}

export default App;
