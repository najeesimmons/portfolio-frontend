import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={classes.container}>
        <h2 className={classes["section-heading"]}>Contact</h2>
        <div className={classes["inner-container"]}>
          <h1>Get In Touch</h1>
          <p className={classes.thanks}>
            Thank you for checking out my portfolio! I hope you'll reach out and
            say hello, whether you want to make me aware of a job opportunity or
            you just want to talk shop. Cheers!
          </p>
          <div className={classes["button-holder"]}>
            <a
              href="mailto:najee.bryant.simmons@gmail.com?subject=Hello+World&body=Hello+World"
              className={classes["message-button"]}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <footer>
        <p>Designed & Built by Najee Simmons</p>
      </footer>
    </>
  );
};

export default Contact;
