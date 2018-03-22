import React from 'react';
import ShowList from "./ShowList"

const Main = ({ data }) => {
    //console.log(data);
    
    return (
        <div className="container">
        <h1 className="mb-4 text-center">Popular Shows</h1>
            <ShowList data={data} />
        </div>
    )
}
export default Main