import React from 'react'
import UserItem from './UserItem'
import UserCard from './UserCard'
import NoUsers from './NoUsers'

const UserList = (props) => {
   console.log(props);
    const {data, data1} = props
    
   
    const userList = () => {
        if (data.length !== 0){
        return data.map((user, index) => <UserItem key={index} gender={user.gender} name={user.name.first + " " + user.name.last} email={user.email} img={user.picture.large} dob={user.dob}/>)
            
    } else {
        return(
            <NoUsers/>
        )
    }
        
    }

    const userCard = () => {
        if (data.length !== 0){
        return data.map((user, index) =>   <UserCard key={index} gender={user.gender} name={user.name.first + " " + user.name.last} email={user.email} img={user.picture.large} dob={user.dob}/>)
    }   else {
        return(
            <NoUsers/>
        )
    }     
}

    return(
        <div className="row">
        <ul className="collection">
        {data1? userList():userCard()}
        </ul>
        </div>
    )
}

export default UserList