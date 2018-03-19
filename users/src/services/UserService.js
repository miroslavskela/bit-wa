import React from 'react';
import User from './../entities/User'
import {usersData} from "./../data/data"

const createUser = (usersData) => {
    return usersData.map((user)=>{
      return  new User(user.name, user.email, user.dob, user.picture)
    })

}

export default createUser
