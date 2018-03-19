import React from "react"
import {data} from "./Main"
import PostItem from "./PostItem"
const PostList = ({data}) => {
    // const posts = props.data;

    return (
        <div>
            {data.map(post => <PostItem key={post.id} title={post.title} body={post.body} />)}
        </div>
    )
}

export default PostList