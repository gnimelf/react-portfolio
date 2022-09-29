import React from "react";

export default function Contact() {
    return (
        <main>
            <section id="about-me">
            <h1 className="sub-heading">Contact me</h1>
            <p>
            <form action="mailto:fezzygo@gmail.com">
                <label for='fname'>First Name</label><br/>
                <input name='fname' required='true'/><br/>
                <label for='lname'>Last Name</label ><br/>
                <input name='lname' required='true'/><br/>
                <label for='email' >Email</label><br/>
                <input name="email" required='true'/><br/>
                <button type="sumbit">Send</button>
            </form>
            </p>
        </section>
        

        </main>
    );
}