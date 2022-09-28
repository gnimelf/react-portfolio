import React, { useState } from "react";

export default function NaviBar({ currentPage, handlePageChange }) {
    return (
        <header class="header">
            <figure id="me">
                <img id="me"/>
            </figure>
            <section class="title-menu">
                <section class="title">
                    <h1>Justin Fleming</h1>
                </section>
                <nav>
                    <ul class="nav-menu"></ul>
                </nav>
            </section>

            <figure class="hero"></figure>
        </header>
    );
}
