import React from 'react'
import App from "../App"
const Header = (props) => {
    const {handleState, displayGrid, refreshData} = props
    
    
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Bit Persons</a>
                <a href="#" className="right" onClick={handleState} ><i className="material-icons">{displayGrid ? "view_module":"format_list_bulleted"}</i></a>
                <a href="#" className="right"><i  onClick={refreshData}  className="material-icons">refresh</i></a>
            </div>
        </nav>
    )
}
export default Header