import React from "react";

export default function NaviBar({ handlePageChange }) {
    return (
        <header className="header">
            <figure id="me">
                <img id="me" alt="profile"/>
            </figure>
            <section className="title-menu">
                <section className="title">
                    <h1>Justin Fleming</h1>
                </section>
                <nav>
                    <ul className="nav-menu">
                        <li><a href="#top" onClick={() => handlePageChange('About')} >About Me</a></li>
                        <li><a href="#top" onClick={() => handlePageChange('Work')}>Work</a></li>
                        <li><a href="#top" onClick={() => handlePageChange('Contact')}>Contact</a></li>
                        <li><a href="#top" onClick={() => handlePageChange('Resume')}>Resume</a></li>
                    </ul>
                    
                </nav>
            </section>

            <figure className="hero"></figure>
        </header>
    );
}
