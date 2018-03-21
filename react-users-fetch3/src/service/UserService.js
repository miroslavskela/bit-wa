// import React from 'react';
import User from './../entities/User'
import baseUrl from './../shared/constants'


class UserService{


    fetchUsers(){
        return fetch(baseUrl)
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