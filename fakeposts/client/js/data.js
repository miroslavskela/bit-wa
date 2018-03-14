import {Post} from "./post.js";


const baseUrl = "http://127.0.0.1:3000/";


  const  fetchPosts = () =>{
    return fetch(baseUrl)
        .then((response) => {

            return response.json();
           
            
        })
        .then(postListDataFunc)
    }  


   const postListDataFunc = (postListData) => {
        return postListData.map((post) => {        
        const { id, title, intro } = post
        return new Post(id, title, intro);
        })
   }

    export {fetchPosts}