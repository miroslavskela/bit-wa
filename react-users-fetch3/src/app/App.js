import React, { Component } from 'react';
import Header from './partials/Header'
import Footer from './partials/Footer'
import Main from './users/Main'
import { userService } from './../service/UserService'
import Search from "./partials/Search"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      displayCard: false,
      displayGrid: false,
      searchValue:[]
  
    }

  }
//feature4
  // handleState = (event) => {
  //   event.preventDefault();
  //   // this.setState({ displayCard: (this.state.displayCard) ? false : true })
  //   this.setState({displayCard: !this.state.displayCard})
  //   this.setState({displayGrid: !this.state.displayGrid})
  // }

  handleState = (event) => {
    event.preventDefault();
    // this.setState({ displayCard: (this.state.displayCard) ? false : true })
    const displayCard= !this.state.displayCard;
    const displayGrid= !this.state.displayGrid
    this.setState.displayCard = localStorage.setItem("display", displayCard);
    this.setState.displayGrid = localStorage.setItem("icon", displayGrid)
    this.setState({displayCard})
    this.setState({displayGrid})
  }
  
  
  componentWillMount(){
    const displayCard = localStorage.getItem("display");
    const displayGrid = localStorage.getItem("icon")
    const card = displayCard === "false"?false:true;
    const icon = displayGrid === "false"?false:true;
    this.setState({displayCard:card})
    this.setState({displayGrid:icon})
    
  }
  //Feature5
  refreshData = (event) => {
    event.preventDefault();
    userService.fetchUsers().then(Userlist =>{
      this.setState({ users: Userlist})
    })
  }

  componentDidMount() {
    userService.fetchUsers()
      .then(UserList => {
        this.setState({ users: UserList })
      })
  }

  onSearchValueChange = (searchValue) => { 
    this.setState({searchValue:searchValue})  
  }

  getUsers = ()=>{
    const {users} = this.state
    const filterUsers = users.filter((user) =>{  
      return (user.name.first || user.name.last).includes(this.state.searchValue);
    })
    return filterUsers
  }

  render() {
    return (
      <div>
        <Header handleState={this.handleState} displayGrid = {this.state.displayGrid} refreshData= {this.refreshData} />
        <Search onSearchValueChange={this.onSearchValueChange}/>
        <Main data={this.getUsers()} displayCard={this.state.displayCard} />
        <Footer />
      </div>
    );
  }
}



export default App;





















