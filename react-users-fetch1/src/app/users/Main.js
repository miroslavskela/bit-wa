import {data} from "../App"
import React from 'react';
import UsersList from "./UserList"

const Main = ({ data, displayCard }) => {
    console.log(data);
    
    return (
        <div className="container">
            <UsersList data={data} displayCard={displayCard}/>
        </div>
    )
}
export default Main