import React from 'react';
import Utils from '../../shares/Utils'

const UserCard = props => {
    console.log(props)
    const { name, email, dob, img,gender } = props;


  
if(gender==="female"){
    return (
        <div>   
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={img} alt =""/>
                        <span className="card-title">{name}</span>
                    </div>
                    <div className="card-content #ffcdd2 red lighten-4">
                        <p><i className="material-icons tiny">email</i> Email:{Utils.emailHide(email)}<br/> 
                        <i className="material-icons tiny">cake</i> {Utils.getDob(dob)}</p>
                    </div>
                </div>
            </div>
        </div>
    ) 
} else {
    return (
        <div>   
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={img} alt = ""/>
                        <span className="card-title">{name}</span>
                    </div>
                    <div className="card-content">
                        <p><i className="material-icons tiny">email</i> Email:{Utils.emailHide(email)}<br/> 
                        <i className="material-icons tiny">cake</i> {Utils.getDob(dob)}</p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}   
    
}
export default UserCard