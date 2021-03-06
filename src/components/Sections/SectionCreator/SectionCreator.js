import React from "react";
import SectionWrapper from "../../UI/SectionWrapper/SectionWrapper";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import FlexWrapper from "../../UI/FlexWrapper/FlexWrapper";
import Card from "../../Card/Card";

const Popular = (props) => {
  return (
    <SectionWrapper>
      <SectionTitle title={props.title} sectionNavigation={props.sectionNavigation} />
      {props.data.results ? (
        <FlexWrapper>
          {props.data.results.map((el, i) => (
            <Card
              image={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`}
              title={el.title}
              genres={el.overview.substring(1, 50)}
              rating={el.vote_average}
              time={el.vote_count + " Votes"}
              year={new Date(el.release_date).getFullYear()}
              key={el.id}
              id={el.id}
            />
          ))}
        </FlexWrapper>
      ) : (
        <FlexWrapper>
          <Card
            image={"https://image.tmdb.org/t/p/w220_and_h330_face/aOlv1Yw4zchFmBr5KT0sPpmOm87.jpg"}
            title={"Kumbalangi Nights"}
            genres={"Street Food, Chinese, South Indian, Juices"}
            rating={8.2}
            time={"135 MIN"}
            year={2020}
          />
          <Card
            image={"https://image.tmdb.org/t/p/w220_and_h330_face/5dx5C9zVsmyeVbJxZBMmaDvyXHi.jpg"}
            title={"Ustad Hotel"}
            genres={"Street Food, Chinese, South Indian, Juices"}
            rating={7.5}
            time={"150 MIN"}
            year={2012}
          />
          <Card
            image={"https://image.tmdb.org/t/p/w220_and_h330_face/3YAa79m3l0X7lv36ze1JJxv6rPu.jpg"}
            title={"Charlie"}
            genres={"Street Food, Chinese, South Indian, Juices"}
            rating={7.4}
            time={"130 MIN"}
            year={2015}
          />
          <Card
            image={"https://image.tmdb.org/t/p/w220_and_h330_face/iFMyZw1DTGvZ8hPa0eTseSFiRT1.jpg"}
            title={"Bangalore Days"}
            genres={"Street Food, Chinese, South Indian, Juices"}
            rating={7.6}
            time={"172 MIN"}
            year={2014}
          />
        </FlexWrapper>
      )}
    </SectionWrapper>
  );
};

export default Popular;
