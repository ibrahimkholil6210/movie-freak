import React from "react";
import classes from "./Sidenav.module.css";

const Sidenav = (props) => {
  return (
    <div className={classes.SideNavWrapper}>
      <div className={classes.SideNavTop}>
        <ul className={classes.SectionHelperNavigation}>
          <li>
            <div className={classes.NavHelperItemImg}>
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/rng/md/carousel/production/vt13uzhjrg5r49kh9oru"
                alt="Navigation img"
              />
            </div>
            <div className={classes.NavHelperItemCaption}>
              <h5>Top Picks</h5>
              <p>80 options</p>
            </div>
          </li>
          <li>
            <div className={classes.NavHelperItemImg}>
              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/hxizld3pqhnk0smw27sl" alt="Navigation img" />
            </div>
            <div className={classes.NavHelperItemCaption}>
              <h5>What's New</h5>
              <p>80 options</p>
            </div>
          </li>
          <li>
            <div className={classes.NavHelperItemImg}>
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/marketing-dashboard/carousel/ftnsdmo6fotidtzobbm2"
                alt="Navigation img"
              />
            </div>
            <div className={classes.NavHelperItemCaption}>
              <h5>Premium</h5>
              <p>80 options</p>
            </div>
          </li>
          <li>
            <div className={classes.NavHelperItemImg}>
              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/y4vnumwu4f8olsly1hnw" alt="Navigation img" />
            </div>
            <div className={classes.NavHelperItemCaption}>
              <h5>Only on Swiggy</h5>
              <p>80 options</p>
            </div>
          </li>
          <li>
            <div className={classes.NavHelperItemImg}>
              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/bm8bziikwyvwqsml1clm" alt="Navigation img" />
            </div>
            <div className={classes.NavHelperItemCaption}>
              <h5>Vegetarian </h5>
              <p>80 options</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.SideNavBottom}>
        <ul className={classes.SectionHelperNavigation}>
          <li>
            <div className={classes.NavHelperItemImg}>
              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_90,h_90/See_all_cj8kln" alt="Navigation img" />
            </div>
            <div className={classes.NavHelperItemCaption}>
              <h5>SEE ALL</h5>
              <p>80 options</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
