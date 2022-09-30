import React from "react";
import Navigation from "./Navigation";

export default function Header({ handlePageChange }) {

    return (
        <header className="header">
            <figure id="me">
                <img id="me" alt="profile"/>
            </figure>
            <section className="title-menu">
                <section className="title">
                    <h1>Justin Fleming</h1>
                </section>
                <Navigation handlePageChange={handlePageChange}/>
            </section>

            <figure className="hero"></figure>
        </header>
    );
}
