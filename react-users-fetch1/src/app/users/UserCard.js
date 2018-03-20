import props from "./UserList"
import React from 'react';

const UserCard = props => {
    const { name, email, dob, img } = props;

    const date = dob => {
        const date = new Date(dob);
        const year = date.getFullYear();
        const month = date.getMonth(); 
        const day = date.getDate(); 
         
        return `${day}.${month+1}.${year}`
    }

    const emailHide = email => {
        const monkey = email.indexOf("@");
        const hidePart = email.substring(0,3) + "..." + email.substring(monkey - 3);
        return hidePart;
    }

    return (
        <div>   
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={img}/>
                        <span className="card-title">{name}</span>
                    </div>
                    <div className="card-content">
                        <p><i className="material-icons tiny">email</i> Email:{emailHide(email)}<br/> 
                        <i className="material-icons tiny">cake</i> {date(dob)}</p>
                    </div>
                </div>
            </div>
        </div>
    )    
    
}
export default UserCard