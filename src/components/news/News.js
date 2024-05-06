import React from "react";
import Title from "../layouts/Title";
import { NewOne, NewTwo, NewThree } from "../../assets/index";
import NewsCard from "./NewsCard";
import YouTubeIframe from "./YoutubeIframe";

const News = () => {
  return (
    <section id="news" className="w-full py-20 ">
      <div className="pb-20">
        <Title title="Tin tức" des="tin tức" />
        <hr className="border-[#222222] border-solid border-t-2 w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <NewsCard
          id="1"
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={NewOne}
          note=""
        />
        <NewsCard
          id="2"
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={NewTwo}
        />
        <NewsCard
          id="3"
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={NewThree}
        />
        <YouTubeIframe src="https://www.youtube.com/embed/_xYBziPHIuY?si=ocORwTkiKUJXKN4_" />
        <YouTubeIframe src="https://www.youtube.com/embed/1zktJXrLW8k?si=Sd8u07NPlhId1uyt" />
        <YouTubeIframe src="https://www.youtube.com/embed/-CD78Q_WSAs?si=GsDHzDNa5T5KiNfm" />
        {/* Add more ProjectsCard components with unique ids */}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"></div>
    </section>
  );
};

export default News;
