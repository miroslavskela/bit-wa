
import UserItem from "./UserItem"
import UserCard from "./UserCard"
import React from 'react';

const UsersList = ({ data, displayCard }) => {
    //console.log("Data userlist", data);
    const userList = () => {
       return data.map((user, index) => <UserItem key={index} gender={user.gender} name={user.name.first + " " + user.name.last}  email={user.email} img={user.picture.large} dob={user.dob} />)
      
    }

    const userCard = () => {
     return   data.map((user,index) => <UserCard key={index} gender={user.gender} name={user.name.first + " " + user.name.last} email={user.email} img = {user.picture.large} dob={user.dob} />)
    }
    
    return (
        <div className="row">
            <ul className="collection">
               {displayCard? userList():userCard()}
            </ul>
        </div>
    )
}
export default UsersList