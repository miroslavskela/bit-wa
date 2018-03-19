
import React, { Component } from 'react';
import Header from './partials/Header'
import Footer from './partials/Footer'
import Main from './posts/Main'
import {postService} from "../service/PostService"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {posts:[]}
  }
    componentDidMount(){
      postService.fetchPosts()
        .then(PostList => {
          this.setState({posts: PostList})
        })
    }
  
  render() {
    return (
      <div>
    <Header />
    <Main data={this.state.posts} />
    
    </div>
    );
  }
}

export default App;
