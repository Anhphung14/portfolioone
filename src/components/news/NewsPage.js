import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { NewOne, NewTwo, NewThree } from "../../assets/index";
import Title from "../layouts/Title";

const NewsPage = () => {
  const newsList = [
    {
      id: "1",
      type: "news",
      title:
        "Đạo diễn Nguyễn Lê Thanh Hải, người giúp thí sinh thăng hoa thể hiện tài năng",
      src: NewOne,
      des: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.",

      articleSources: "P.Nguyễn",
      postDate: "07/05/2024",
    },
    {
      id: "2",
      type: "news",
      title: "E-commerce Website",
      src: NewTwo,
      articleSources: "vapvapvap",
      postDate: "07/05/2024",
    },
    {
      id: "3",
      type: "news",
      title: "Chatting App",
      src: NewThree,
      des: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.",
      articleSources: "vapvapvap",
      postDate: "07/05/2024",
    },
    {
      id: "4",
      type: "news",
      title: "Chatting App",
      src: NewThree,
      des: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.",

      articleSources: "vapvapvap",
      postDate: "07/05/2024",
    },
    {
      id: "5",
      type: "news",
      title: "Chatting App",
      src: NewThree,
      des: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.",

      articleSources: "vapvapvap",
      postDate: "07/05/2024",
    },
    {
      id: "6",
      type: "news",
      title: "Chatting App",
      src: NewThree,
      des: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.",

      articleSources: "vapvapvap",
      postDate: "07/05/2024",
    },
    {
      id: "7",
      type: "news",
      title: "Chatting App",
      src: NewThree,
      des: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these introductory videos.",
      articleSources: "vapvapvap",
      postDate: "07/05/2024",
    },
  ];

  const featuredNews = newsList.slice(0, 1);
  const otherNews = newsList.slice(2);

  const limitDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + "...";
  };

  return (
    <div>
      <Navbar />
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pb-20">
            <div className="flex justify-between">
              <div className="py-2 px-6 bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-400 h-[44px] w-[300px] block border-box rounded-lg relative">
                <h2 className="text-xl font-normal uppercase text-[#444444] tracking-wide text-center">
                  Tổng hợp tin tức
                </h2>
              </div>
            </div>
            <hr className="border-[#222222] border-solid border-t-2 w-full" />
          </div>
          <div className="flex ">
            {featuredNews.map((featuredItem) => (
              <div
                key={featuredItem.id}
                className="w-full mb-5 py-4 xl:px-6 rounded-lg shadow-xl flex flex-col xl:flex-row transition-colors duration-1000">
                <div className="w-full xl:w-1/2 flex justify-center items-start xl:items-end">
                  <div className="w-full h-full overflow-hidden rounded-lg xl:rounded-l-lg">
                    <Link to={`/news/${featuredItem.id}`}>
                      <img
                        className="w-full h-auto object-cover group-hover:scale-110 duration-300 cursor-pointer"
                        src={featuredItem.src}
                        alt={featuredItem.title}
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-full xl:w-1/2 p-4 xl:p-8 flex flex-col justify-between mt-14 mb-14">
                  <h3 className="text-xl text-[#444444] font-normal">
                    {featuredItem.title}
                  </h3>
                  {featuredItem.des && (
                    <p className="text-sm text-[#444444] tracking-wide mt-3 hover:text-gray-100 duration-300">
                      {limitDescription(featuredItem.des, 300)}
                    </p>
                  )}
                  <h3 className="text-sm text-[#666565] italic flex flex-row justify-between">
                    {featuredItem.articleSources}
                    <span className=" ">{featuredItem.postDate}</span>
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
            {otherNews.map((item) => (
              <div
                key={item.id}
                className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-xl flex flex-col  duration-1000">
                <div className="w-full h-[80%] overflow-hidden rounded-lg">
                  <Link to={`/news/${item.id}`}>
                    <img
                      className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
                      src={item.src}
                      alt={item.title}
                    />
                  </Link>
                </div>
                <div className="w-full mt-5 flex flex-col gap-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl  text-[#444444]  font-normal">
                        {item.title}
                      </h3>
                    </div>
                    {item.des && (
                      <p className="text-xs text-[#444444] tracking-wide mt-3 hover:text-gray-100 duration-300">
                        {limitDescription(item.des, 150)}
                      </p>
                    )}
                  </div>
                  <h3 className="text-sm text-[#666565] italic flex flex-row justify-between">
                    {item.articleSources}
                    <span className=" ">{item.postDate}</span>
                  </h3>
                  <Link
                    to={`/news/${item.id}`}
                    className="btn btn-primary text-[#444444] justify-center flex">
                    Xem thêm
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
