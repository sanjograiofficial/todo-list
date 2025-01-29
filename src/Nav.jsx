import React from 'react';
import './Nav.css'

const Nav = () => {
    return(
        <div>
            <nav className = "navbar">
                <ul>
                    <a href="">
                        <li>About</li>
                    </a>
                    <a href="">
                        <li>Education</li>
                    </a>
                    <a href="">
                        <li>Experience</li>
                    </a>
                    <a href="">
                        <li>Projects</li>
                    </a>
                </ul>
            </nav>
        </div>

        
    )
}

export default Nav;