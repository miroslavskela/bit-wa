import React from 'react'
import {Link} from 'react-router-dom'

const HeaderAbout = () => {
    
    return (
        <div>
        <nav>
            <div className="nav-wrapper container">
                <Link to='/' className="brand-logo center">Bit Persons</Link>
            </div>
        </nav>
        </div>
    )
}
export default HeaderAbout