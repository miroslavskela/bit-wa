import props from "./UserList"
import React from 'react';
const UserItem = (props) => {
    const { name, email, img, dob} = props
    console.log(props);

    const emailHide = email => {
        const monkey = email.indexOf("@");
        const hidePart = email.substring(0,3) + "..." + email.substring(monkey - 3);
        return hidePart;
    }


    const getDob = (user) => {
        // console.log("jedan user",user);

        const userDob = dob;
        const date = new Date(userDob);
        return  date.getDate() + "." + (date.getMonth()+1)  + "." + date.getFullYear();
    }
    return (
        <li className="collection-item avatar">
            <img src={img} alt="" className="circle" />
            <span className="title">Name: {name}</span>
            <p><i className="material-icons tiny">email</i> Email: {emailHide(email)} <br />
            <i className="material-icons tiny">cake</i> {getDob(dob)}
            </p>
        </li>
    )
}

export default UserItem
