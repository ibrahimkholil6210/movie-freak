import React from "react";
import classes from "./Blog.module.css";
import FlexWrapper from "../UI/FlexWrapper/FlexWrapper";
import Card from "../Card/Card";

const Blog = (props) => {
  return (
    <>
      <div className={classes.BlogSectionTitle}>
        <h2> Blog</h2>
      </div>

      <div className={classes.BlogItemWeapper}>
        <FlexWrapper>
          <Card
            image={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qvvx8etpt5onlku9zqmu"}
            title={"Kumbalangi Nights"}
            genres={"Street Food, Chinese, South Indian, Juices"}
            rating={8.2}
            time={"135 MIN"}
            year={2020}
            height='156px'
            bRadius={false}
            isBlog={true}
          />
          <Card
            image={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/l7ya3npcf9dd1lflfmad"}
            title={"Ustad Hotel"}
            genres={"Street Food, Chinese, South Indian, Juices"}
            rating={7.5}
            time={"150 MIN"}
            year={2012}
            height='156px'
            bRadius={false}
            isBlog={true}
          />
          <Card
            image={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tvkhamfpz3vvice4j21e"}
            title={"Charlie"}
            genres={"Street Food, Chinese, South Indian, Juices"}
            rating={7.4}
            time={"130 MIN"}
            year={2015}
            height='156px'
            bRadius={false}
            isBlog={true}
          />
          <Card
            image={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ahsiydsejmm2ymdbqnla"}
            title={"Bangalore Days"}
            genres={"Street Food, Chinese, South Indian, Juices"}
            rating={7.6}
            time={"172 MIN"}
            year={2014}
            height='156px'
            bRadius={false}
            isBlog={true}
          />
        </FlexWrapper>
      </div>
    </>
  );
};

export default Blog;
