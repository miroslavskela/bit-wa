import {data} from "../App"
import React from 'react';
import UsersList from "./UserList"

const Main = ({ data }) => {
    console.log(data);
    
    return (
        <div className="container">
            <UsersList data={data} />
        </div>
    )
}
export default Main