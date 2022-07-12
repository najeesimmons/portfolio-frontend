import React from "react";
const ContactForm = () => {
  return (
    <div id="contact">
      <h1>Get In Touch</h1>
      <span>najee.bryant.simmons@gmail.com</span>
      <h3>Say Hello</h3>

      <a href="mailto:najee.bryant.simmons@gmail.com?subject=Hello+World&body=Hello+World">
        {" "}
        <button>Holla At Me</button>
      </a>
    </div>
  );
};

export default ContactForm;
