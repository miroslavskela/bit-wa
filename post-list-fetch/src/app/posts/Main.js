import React from "react"
import {data} from "../App"
import PostList from "./PostList"
const Main = ({data}) => {
    // const data = props.data;

    return (
        <div className="container">
            <PostList data={data} />
        </div>
    )
}
export default Main