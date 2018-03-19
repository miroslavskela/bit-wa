import React from 'react';
import User from './../entities/User'


class UserService{


    fetchUsers(){
        return fetch("https://randomuser.me/api/?results=15")
            .then((response) => {
                return response.json()
            }).then((data) => {
                const userData = data.results
                return  userData.map((user) =>{
                 return new User(user)   
                }) 
               
            })    
        }
}


export const userService = new UserService()