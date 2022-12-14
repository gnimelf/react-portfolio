import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
    return (
        <main>
            <section id="about-me">
            <h1 className="sub-heading">About me</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                dapibus, libero in finibus pellentesque, purus turpis commodo
                dolor, sed auctor ante tellus interdum mi. Morbi ante lacus,
                venenatis finibus sollicitudin in, elementum eget urna. Quisque
                eget felis eget orci volutpat consequat. Fusce efficitur turpis
                et euismod convallis. Suspendisse condimentum, lacus luctus
                aliquet lacinia, risus sem tempor dui, eget sodales tortor ante
                at sapien. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Phasellus sed scelerisque dolor. Donec eget sem
                libero. In bibendum pretium convallis. Nulla ac nunc orci. Cras
                id aliquet risus. Proin nisi ex, pharetra fringilla mattis
                hendrerit, aliquam at tortor. Aenean ultrices orci in est
                viverra, quis pellentesque nulla posuere. Phasellus ac sapien
                non magna ultrices pharetra sit amet vel nulla. Ut consectetur
                finibus nisl, in vehicula purus rhoncus id. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Etiam iaculis justo hendrerit tempus vehicula. Nam
                fringilla, tellus non ultrices bibendum, eros quam facilisis
                arcu, eget venenatis massa tortor non erat. Vestibulum sit amet
                ligula ut neque vehicula pharetra. Phasellus commodo placerat
                sodales. Mauris mattis ligula ultrices nibh iaculis pharetra.
            </p>
        </section>
        <section className="contact-items">

                <section className="social-media ">
                    <figure id="github" className="github">
                        <a href="https://github.com/gnimelf">
                            <i className="contact-icon"><FontAwesomeIcon icon={["fab", "github"]} /></i>
                        </a>
                    </figure>
                    <figure className="linkedIn ">
                        <a href="https://www.linkedin.com/">
                            <i className="contact-icon"><FontAwesomeIcon icon={["fab", "linkedin"]}></FontAwesomeIcon></i>
                        </a>
                    </figure>
                </section>
            </section>

        </main>
    );
}
