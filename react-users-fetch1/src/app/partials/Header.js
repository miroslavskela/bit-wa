import React from 'react'
import App from "../App"
const Header = (props) => {
    const {handleState, displayGrid} = props
    
    
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Users</a>
                <a href="badges.html" className="right" onClick={handleState} ><i className="material-icons">{displayGrid ? "view_module":"format_list_bulleted"}</i></a>
            </div>
        </nav>
    )
}
export default Header