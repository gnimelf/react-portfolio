import React, { useState } from "react";

// Form validators
import { validateEmail } from "../../utils/helpers";

function Contact() {
    // Setup state variables
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Handle changes to input fields
    const handleInputChange = (e) => {
        console.log(e.target.value);

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Set state for first name, last name, and email
        if (inputType === "firstName") {
            setFirstName(inputValue);
        } else if (inputType === "lastName") {
            setLastName(inputValue);
        } else if (inputType === "email") {
            setEmail(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        console.log(e.target);
        e.preventDefault();

        if (!firstName || !lastName) {
            setErrorMessage("First Name or Last Name is invalid");
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage("email address is invalid");
            return;
        }

        setFirstName("");
        setLastName("");
        setEmail("");
        setErrorMessage("");
    };

    // return form
    return (
        <main>
            <section id="contact-me">
                <h1 className="sub-heading">Contact me</h1>
                <form>
                    <label>First Name:</label>
                    <br />
                    <input name="firstName" onChange={handleInputChange} />
                    <br />
                    <label>Last Name:</label>
                    <br />
                    <input name="lastName" onChange={handleInputChange} />
                    <br />
                    <label>Email:</label>
                    <br />
                    <input name="email" onChange={handleInputChange} />
                    <br />
                    <div>
                        <button
                            id="submit"
                            type="button"
                            onClick={handleFormSubmit}
                        >
                            Send
                        </button>
                    </div>

                    <p className="error-text">{errorMessage}</p>
                </form>
            </section>
        </main>
    );
}

export default Contact;
