import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
    //Links to About page and game page
    return (
        <div className="NavBar">
            <Link className="NavItem" to='/'>Home</Link>
            <Link className="NavItem" to='/about'>About</Link>
        </div>
    )
}

export default NavBar