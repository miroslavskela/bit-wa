import {data} from "./Main"
import UserItem from "./UserItem"
import React from 'react';

const UsersList = ({ data }) => {
    //console.log(users[0].name.first);

    const getDob = (user) => {
        const userDob = user.dob;
        const date = new Date(userDob);
        return date.getMonth()+ 1 + "-" + date.getDate() + "-" + date.getFullYear() ;    
    }
    return (
        <div>
            {data.map(user => <UserItem key={user.dob} name={user.name.first} email={user.email} img = {user.picture.medium} dob={getDob(user)} />)}
            </div>
    )}
    export default UsersList