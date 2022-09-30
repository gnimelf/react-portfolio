import React from "react";

export default function Navigation ({ handlePageChange }) {
    
    return (
        <nav>
        <ul className="nav-menu">
            <li><a href="#top" onClick={() => handlePageChange('About')} >About Me</a></li>
            <li><a href="#top" onClick={() => handlePageChange('Work')}>Work</a></li>
            <li><a href="#top" onClick={() => handlePageChange('Contact')}>Contact</a></li>
            <li><a href="#top" onClick={() => handlePageChange('Resume')}>Resume</a></li>
        </ul>
        
    </nav>
    )
}