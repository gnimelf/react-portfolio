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
        setErrorMessage("");

        // Set state for first name, last name, and email
        if (inputType === "firstName") {
            setFirstName(inputValue);

            if (firstName === "") {
                setErrorMessage("First Name is invalid");
                return;
            }
        }

        if (inputType === "lastName") {
            
            setLastName(inputValue);
          
            if (lastName === "") {
                setErrorMessage("Last Name is invalid");
                return;
            }
        }

        if (inputType === "email") {
           
            setEmail(inputValue);
            
            if (!validateEmail(email)) {
                setErrorMessage("Email address is invalid");
                return;
            }
        }
    };

    // Validate form before submit
    const handleFormSubmit = (e) => {
        
        console.log(e.target);
        
        if (validateEmail && firstName !== "" && lastName !== ""){ 
            window.open(`mailto:${email}?subject=Email%20Test&body=First%20Name:%20${firstName} %0D%0A Last%20Name:%20 ${lastName}`, '_self');
        } else {
            e.preventDefault();
        }

    };

    // return form
    return (
        <main>
            <section id="contact-me">
                <h1 className="sub-heading">Contact me</h1>
                <form >
                    <label>First Name:</label>
                    <br />
                    <input name="firstName" onMouseOut={handleInputChange} />
                    <br />
                    <label>Last Name:</label>
                    <br />
                    <input name="lastName" onMouseOut={handleInputChange} />
                    <br />
                    <label>Email:</label>
                    <br />
                    <input name="email" onMouseOut={handleInputChange} />
                    <br />
                    <div>
                        <button
                            id="submit"
                            type="submit"
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
