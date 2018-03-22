import { data } from "./Main"

import ShowCard from "./ShowCard"
import React from 'react';

const ShowList = ({ data }) => {
    //console.log("Data userlist", data);
    

    const showCard = () => {
     return   data.map((show,index) => <ShowCard key={index} name={show.name} id={show.id} image={show.image} />)
    }
    
    return (
        <div>
            <div className="row">
               {showCard()}
            </div>
        </div>
    )
}
export default ShowList