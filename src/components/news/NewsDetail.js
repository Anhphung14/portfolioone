import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import FooterBottom from "../footer/FooterBottom";
import { NewOne, NewTwo, NewThree } from "../../assets/index";

const NewsDetail = () => {
  const { id } = useParams();
  const news = {
    1: {
      title: "SOCIAL MEDIA CLONE",
      des: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.",
      src: NewOne,
      note: "Đây là chiếc xe đạp",
      articleSources: "vapvapvap",
      postDate: "07/05/2024",
    },
    2: {
      title: "SOCIAL MEDIA CLONE",
      des: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.",
      src: NewOne,
      note: "Đây là chiếc xe đạp",
      articleSources: "vapvapvap",
      postDate: "07/05/2024",
    },
    3: {
      title: "SOCIAL MEDIA CLONE",
      des: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.",
      src: NewOne,
      note: "Đây là chiếc xe đạp",
      articleSources: "vapvapvap",
      postDate: "07/05/2024",
    },
  };

  const currentNews = news[id];

  if (!currentNews) {
    return <div>Tin tức không tồn tại.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full h-[80%] overflow-hidden flex flex-col justify-center items-center rounded-lg">
          <div className="text-3xl pb-5">{currentNews.title}</div>
          <img
            className="w-1/3 h-1/3 object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={currentNews.src}
            alt={currentNews.title}
          />
          <div className="text-sm mt-2 text-[#444444] italic">
            {currentNews.note}
          </div>
        </div>
        <div className="w-full px-4 mt-5 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl uppercase text-designColor font-normal">
                {currentNews.title}
              </h3>
            </div>
            <p className="text-lg text-[#444444] tracking-wide mt-3">
              {currentNews.des}
            </p>
          </div>
        </div>
        <div className="w-full px-4 mt-5 flex flex-row justify-between gap-6">
          <p className="text-base italic text-[#7e7d7d] tracking-wide ">
            {currentNews.articleSources}
          </p>
          <p className="text-base italic text-[#7e7d7d] tracking-wide">
            {currentNews.postDate}
          </p>
        </div>

        <div className="pt-6">
          <Footer />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
