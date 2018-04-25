import React from "react"
import {userService} from '../../service/UserService'
// import {Link} from 'react-router-dom'


const Header = (props) => {
    const {handleState, displayGrid, refreshUsers} = props
    console.log(props)

    
return (
    <div>
        <nav>
            <div className="nav-wrapper container">
                <a href="" className="brand-logo center">Bit Persons</a>
                <a href="" className="right" onClick={handleState} ><i className="material-icons">{displayGrid ? "view_module":"format_list_bulleted"}</i></a>
                <a href="" className="right" onClick={refreshUsers}><i className="material-icons">refresh</i></a>
                {/* <Link to='/AboutPage' className="right">About</Link> */}
                
            </div>

           
        </nav>
        </div>
)
}
export default Header