import React from "react";

export default function Resume() {
    return (
        <main>
            <section id="resume">
                <h1 className="sub-heading">Resume</h1>
                <div id="resume-content">
                    <h1 id="resume-fullname">Justin Fleming</h1>
                    <p>COLUMBUS, OH</p>
                    <p>
                        <strong>Phone:</strong> 000.000.0000{" "}
                        <strong>| Email: </strong>fezzygo@gmail.com
                    </p>
                    <p>
                        <strong>LinkedIn:</strong>{" "}
                        <a href="https://linkedin.com">LinkedIn</a>{" "}
                        <strong>| GitHub:</strong>{" "}
                        <a href="https://www.github.com/gnimelf">gnimelf</a>{" "}
                        <strong>| Portfolio:</strong>{" "}
                        <a href="https://gnimelf.github.io/portfolio/">
                            My Profile
                        </a>
                    </p>
                    <hr />
                    <h3>SUMMARY</h3>
                    <p id="resume-summary">
                        Full Stack Web Developer with a background in mechanical
                        engineering and life-long dedication to learning.
                        Effective at combining creativity and problem solving to
                        develop user-friendly applications.
                    </p>
                    <hr />
                    <h3>TECHNICAL SKILLS</h3>
                    <p id="resume-skills">
                        <p>
                            <strong>Languages: </strong>HTML5, CSS3, SASS, JS,
                            PYTHON, SQL
                        </p>
                        <p>
                            <strong>Tools: </strong>Express, React, Bootstrap,
                            Handlebars, Sequalize, Mongoose
                        </p>
                    </p>
                    <hr />
                    <h4>RELEVANT EXPERIENCE</h4>
                    <div id="resume-relevant-exp">
                        <p>Title, Company Name</p>
                        <p>Year / CITY, ST</p>
                    </div>
                    <hr />
                    <h3>PROJECTS</h3>
                    <p>
                        <strong>
                            {" "}
                            Beer Chasers |{" "}
                            <a href="https://github.com/gnimelf/project-1">
                                Link to GitHub
                            </a>{" "}
                            |{" "}
                            <a href="https://gnimelf.github.io/project-1/">
                                Deployed Project
                            </a>{" "}
                        </strong>
                    </p>
                    <p>Short Summary here</p>
                    <p>
                        <strong>
                            Shopping List |{" "}
                            <a href="https://github.com/Onaysa/shoppinglist-project">
                                Link to GitHub
                            </a>{" "}
                            |{" "}
                            <a href="https://shopping-list-project2.herokuapp.com/">
                                Link to Deployed Project
                            </a>{" "}
                        </strong>
                    </p>
                    <p>Short Summary here</p>
                    <hr />
                    <h3>EDUCATION</h3>
                    <div id="resume-edu">
                        <p>
                            <strong>
                                Boot Camp Certificate: OSU, Columbus, OH
                            </strong>
                        </p>
                        <p>
                            A 24-week intensive program focused on gaining
                            technical programming skills in HTML5, CSS3,
                            Javascript, JQuery, Bootstrap, Node.js, MySQL,
                            MongoDB, Express, Handelbars.js, and ReactJS.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
