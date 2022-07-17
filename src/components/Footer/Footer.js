import React from "react";
import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <div className={classes["footer-wrapper"]}>
      <p className={classes.signature}>Designed & Built by Najee Simmons</p>
      </div>
    </footer>
  );
};

export default Footer;
