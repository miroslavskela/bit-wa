import React from 'react';
import Post from './../entities/Post'


class RandomPost{


    fetchPosts(){
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
             return response.json()
            }).then((data) => {
                const postData = data.slice(0,14)
                return  postData.map((post) =>{
                 return new Post(post)   
                }) 
               
            })    
        }
}


export const postService = new RandomPost()