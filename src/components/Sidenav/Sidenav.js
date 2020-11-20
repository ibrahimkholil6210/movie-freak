import React from "react";
import classes from "./Sidenav.module.css";
import newItem from "../../assets/new_item.png";
import onlyOnItems from "../../assets/only_on_item.png";
import peopleItem from "../../assets/people_item.png";
import premiumItem from "../../assets/premium_item.png";
import seeAllItem from "../../assets/see_all_item.png";
import fireItem from "../../assets/fire_item.png";

const Sidenav = (props) => {
  return (
    <div className={classes.SideNavWrapper}>
      <div className={classes.SideNavTop}>
        <ul className={classes.SectionHelperNavigation}>
          <li>
            <div className={classes.NavHelperItemImg}>
              <img src={fireItem} alt='Navigation img' />
            </div>
            <div className={classes.NavHelperItemCaption}>
              <h5>Top Picks</h5>
              <p>80 options</p>
            </div>
          </li>
          <li>
            <div className={classes.NavHelperItemImg}>
              <img src={newItem} alt='Navigation img' />
            </div>
            <div className={classes.NavHelperItemCaption}>
              <h5>What's New</h5>
              <p>80 options</p>
            </div>
          </li>
          <li>
            <div className={classes.NavHelperItemImg}>
              <img src={premiumItem} alt='Navigation img' />
            </div>
            <div className={classes.NavHelperItemCaption}>
              <h5>Premium</h5>
              <p>80 options</p>
            </div>
          </li>
          <li>
            <div className={classes.NavHelperItemImg}>
              <img src={onlyOnItems} alt='Navigation img' />
            </div>
            <div className={classes.NavHelperItemCaption}>
              <h5>Only on Movie Freak</h5>
              <p>80 options</p>
            </div>
          </li>
          <li>
            <div className={classes.NavHelperItemImg}>
              <img src={peopleItem} alt='Navigation img' />
            </div>
            <div className={classes.NavHelperItemCaption}>
              <h5>Peoples </h5>
              <p>80 options</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.SideNavBottom}>
        <ul className={classes.SectionHelperNavigation}>
          <li>
            <div className={classes.NavHelperItemImg}>
              <img src={seeAllItem} alt='Navigation img' />
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
