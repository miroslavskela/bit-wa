import React from "react"
import props from "./PostList"
const PostItem = (props) => {
    const { title, body } = props;
    console.log(title);
    

    return (
        <div className="row">
            <div className="col s12">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{title}</span>
                        <p>{body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem