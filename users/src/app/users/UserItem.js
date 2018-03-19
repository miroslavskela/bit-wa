import props from "./UserList"
import React from 'react';
const UserItem = (props) => {
    const {name, email, img, dob}=props
    console.log(props);
    

    return (
        <ul className="collection">
            <li className="collection-item avatar">
                <img src={img} alt="" className="circle" />
                <span className="title">Name: {name}</span>
                <p>Email: {email} <br />
                    Date of birth: {dob}
                </p>
            </li>
        </ul>
    )
}
export default UserItem