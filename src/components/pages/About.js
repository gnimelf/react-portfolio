import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <main>
      <section id="about-me">
        <h1 className="sub-heading">About me</h1>
        <div id="about-content">
          <p>
            Full-stack developer transitioning from a career as a CAD Designer.
            Effective at combining creativity and problem solving to develop
            user-friendly applications while working in an Agile environment.
            Accumulated programming experience in JavaScript, Python, and VBA
            from various projects throughout education and career now augmented
            by a MERN-stack web development bootcamp. Possesses Power Automate
            skills that streamline workflows between Sharepoint and Outlook, as
            well as other MS applications. Always looking to learn more while
            building value that makes the user experience better.
          </p>
          <div className="skill-row">
            <img id="coding-image" alt="coding" />
            <h3>Web Development</h3>
            <p>
              Currently studying this field, so that I can start my career in
              full stack development.
            </p>
            <br/>
            <br/>
            <br/>
          </div>
          <div className="skill-row">
            <img id="vba-image" alt="vba-code" />
            <h3>VBA Scripting</h3>
            <p>
              Programmed CATIA macros aid in the automation of design processes.
              Created documentation for the automation tools and processes that
              the customer incorporated in their process improvement strategy.
            </p>
          </div>
          <div className="skill-row">
            <img id="catia-image" alt="catia" />
            <h3>CAD Engineer</h3>
            <p>
              A Certified CATIA V5 Part Design Specialist with a strong
              background in mechanical engineering. Possesses excellent verbal
              and written communication skills. Extensive knowledge and
              experience with CATIA Part Design, Advanced NC Programming
              (3-axis), Surface Design, Assembly Design, and Drafting
              Workbenches (V5 and V6 (2013x) as well as SolidWorks, 3DVia.
            </p>
          </div>
          <div className="skill-row">
            <img id="mic-image" alt="mic" />
            <h3>Software Training and Documentation Specialist</h3>
            <p>
              Collaborated with an engineering team on Process improvement
              documentation for the company's customized Enovia 3DExperience
              installation. Created documentation as reference documentation as
              well as training material for the customer's staff. Performed
              workshops to help educate the designers and suppliers of changes
              to systems and processes.
            </p>
            <br />
            <p>
              Collaborated with an engineering team on Process improvement
              documentation for the company's customized Enovia 3DExperience
              installation. Created documentation as reference documentation as
              well as training material for the customer's staff. Performed
              workshops to help educate the designers and suppliers of changes
              to systems and processes.
            </p>
          </div>
        </div>
      </section>
      <section className="contact-items">
        <section className="social-media ">
          <figure id="github" className="github">
            <a href="https://github.com/gnimelf">
              <i className="contact-icon">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </i>
            </a>
          </figure>
          <figure className="linkedIn ">
            <a href="https://www.linkedin.com/">
              <i className="contact-icon">
                <FontAwesomeIcon icon={["fab", "linkedin"]}></FontAwesomeIcon>
              </i>
            </a>
          </figure>
        </section>
      </section>
    </main>
  );
}
