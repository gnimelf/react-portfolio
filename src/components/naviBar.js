import React, { useState } from "react";

export default function NaviBar({ handlePageChange }) {
    return (
        <header className="header">
            <figure id="me">
                <img id="me"/>
            </figure>
            <section className="title-menu">
                <section className="title">
                    <h1>Justin Fleming</h1>
                </section>
                <nav>
                    <ul className="nav-menu">
                        <li><a href="#" onClick={() => handlePageChange('About')} >Home</a></li>
                        <li><a href="#" onClick={() => handlePageChange('Work')}>Work</a></li>
                        <li><a href="#body">Contact Me</a></li>
                        <li><a href="#body">Resume</a></li>
                    </ul>
                    
                </nav>
            </section>

            <figure className="hero"></figure>
        </header>
    );
}
