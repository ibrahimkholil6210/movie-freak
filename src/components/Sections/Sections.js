import React from "react";
import classes from "./Sections.module.css";
import SectionCreator from "./SectionCreator/SectionCreator";

const Sections = (props) => {
  return (
    <div className={classes.SectionContain}>
      <SectionCreator
        title="Popular"
        sectionNavigation={[
          { title: "Movies", href: "/movies" },
          { title: "TV Shows", href: "/movies" },
        ]}
      />
      <SectionCreator
        title="Treanding"
        sectionNavigation={[
          { title: "People", href: "/movies" },
          { title: "Movies", href: "/movies" },
          { title: "TV Shows", href: "/movies" },
        ]}
      />
      <SectionCreator
        title="People"
        sectionNavigation={[
          { title: "TV", href: "/movies" },
          { title: "Movies", href: "/movies" },
        ]}
      />
    </div>
  );
};

export default Sections;
