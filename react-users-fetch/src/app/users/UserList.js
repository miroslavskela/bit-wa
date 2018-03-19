import { data } from "./Main"
import UserItem from "./UserItem"
import UserCard from "./UserCard"
import React from 'react';

const UsersList = ({ data }) => {
    //console.log("Data userlist", data);


    const getDob = (user) => {
        // console.log("jedan user",user);

        const userDob = user.dob;
        const date = new Date(userDob);
        return date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
    }
    return (
        <div className="row">
            <ul className="collection">
                {data.map((user, index) => <UserItem key={index} name={user.name.first} email={user.email} img={user.picture.large} dob={getDob(user)} />)}
                {/* {data.map((user,index) => <UserCard key={index} name={user.name.first} email={user.email} img = {user.picture.large} dob={getDob(user)} />)} */}
            </ul>
        </div>
    )
}
export default UsersList