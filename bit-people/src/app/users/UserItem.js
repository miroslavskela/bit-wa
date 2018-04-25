import React from 'react'
import Utils from '../../shares/Utils'
const UserItem = (props) => {
    const { name, email, img, dob,gender} = props
   
    


    if(gender === "female"){
        return (
            <li className="collection-item avatar #ffcdd2 red lighten-4">
                <img src={img} alt="" className="circle" />
                <span className="title">Name: {name}</span>
                <p><i className="material-icons tiny">email</i> Email: {Utils.emailHide(email)} <br />
                <i className="material-icons tiny">cake</i> {Utils.getDob(dob)}
                </p>
            </li>
        )
    }
    else{
        return (
        <li className="collection-item avatar">
            <img src={img} alt="" className="circle" />
            <span className="title">Name: {name}</span>
            <p><i className="material-icons tiny">email</i> Email: {Utils.emailHide(email)} <br />
            <i className="material-icons tiny">cake</i> {Utils.getDob(dob)}
            </p>
        </li>
    )
}}

export default UserItem