import React, { Component } from 'react';
import Header from './partials/Header'
import Footer from './partials/Footer'
import Main from './users/Main'
import {userService} from './../service/UserService'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {users:[]}
  }
    componentDidMount(){
      userService.fetchUsers()
        .then(UserList => {
          this.setState({users: UserList})
        })
    }
  
  render() {
    return (
      <div>
    <Header />
    <Main data={this.state.users} />
    <Footer />
    </div>
    );
  }
}



export default App;
