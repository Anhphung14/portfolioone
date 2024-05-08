import React from "react";
import Title from "../layouts/Title";
import { NewOne, NewTwo, NewThree } from "../../assets/index";
import NewsCard from "./NewsCard";
import YouTubeIframe from "./YoutubeIframe";
import { Link } from "react-router-dom";

const News = () => {
  // Danh sách tin tức và video
  const newsList = [
    {
      id: "1",
      type: "news",
      title: "SOCIAL MEDIA CLONE",
      des: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
      src: NewOne,
    },
    {
      id: "2",
      type: "news",
      title: "E-commerce Website",
      des: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
      src: NewTwo,
    },
    {
      id: "3",
      type: "news",
      title: "Chatting App",
      des: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
      src: NewThree,
    },
    {
      id: "4",
      type: "video",
      src: "https://www.youtube.com/embed/_xYBziPHIuY?si=ocORwTkiKUJXKN4_",
    },
    {
      id: "5",
      type: "video",
      src: "https://www.youtube.com/embed/1zktJXrLW8k?si=Sd8u07NPlhId1uyt",
    },
    {
      id: "6",
      type: "video",
      src: "https://www.youtube.com/embed/-CD78Q_WSAs?si=GsDHzDNa5T5KiNfm",
    },
  ];

  return (
    <section id="news" className="w-full py-20 ">
      <div className="pb-20">
        <div className="flex justify-between">
          <Title title="Tin nổi bật" des="tin tức" />
          <Link to="/news">
            <Title title="Tổng hợp" des="tin tức" />
          </Link>
        </div>
        <hr className="border-[#222222] border-solid border-t-2 w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {newsList.map((item) => {
          if (item.type === "news") {
            return (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                des={item.des}
                src={item.src}
              />
            );
          } else if (item.type === "video") {
            return <YouTubeIframe key={item.id} src={item.src} />;
          }
        })}
      </div>
    </section>
  );
};

export default News;
