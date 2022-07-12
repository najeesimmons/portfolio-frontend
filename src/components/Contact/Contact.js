import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <h1>Get In Touch</h1>
      <p>
        Thank you for checking out my portfolio! I hope you will reach and say
        hello, whether you want to make me aware of a job opportunity or you
        just want to say hello. Cheers!
      </p>

      <a href="mailto:najee.bryant.simmons@gmail.com?subject=Hello+World&body=Hello+World">
        {" "}
        <button>Say Hello</button>
      </a>
    </div>
  );
};

export default Contact;
