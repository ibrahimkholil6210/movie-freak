import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.FooterWrapper}>
      <div className={classes.FooterTopNavigation}>
        <ul>
          <li>Help</li>
          <li>The Movie Freak Developers</li>
          <li>Privecy Policy</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className={classes.FooterCopyRightWrapper}>&copy; 2020 by MovieFreak.com</div>
    </div>
  );
};

export default Footer;
