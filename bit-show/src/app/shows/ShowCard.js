import React from 'react';
import props from "./ShowList"
import {Link, Router} from 'react-router-dom'
const ShowCard = props => {
   const {name ,id,image} = props;
   

    

    return (
        <div className="col-md-4">
        <div className="card ">
        <img className="card-img-top" src={image} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
         <Link to={`/show/${id}`}>Details</Link>
        </div>
      </div>
      </div>
    ) 
}   
    

export default ShowCard