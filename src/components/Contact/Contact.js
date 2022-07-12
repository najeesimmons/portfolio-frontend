import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <h1>Get In Touch</h1>
      <p>
        Thank you for checking out my portfolio! I hope you will reach out and say
        hello, whether you want to make me aware of a job opportunity or you
        just want to talk shop. Cheers!
      </p>

      <a href="mailto:najee.bryant.simmons@gmail.com?subject=Hello+World&body=Hello+World" className={classes["message-button"]}>Get in Touch
        {" "}

      </a>
    </div>
  );
};

export default Contact;
