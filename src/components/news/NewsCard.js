import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ id, title, des, src }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-xl flex flex-col bg-gradient-to-tr from-purple-100 to-yellow-200 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <Link to={`/news/${id}`}>
          <img
            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={src}
            alt={title}
          />
        </Link>
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl uppercase text-designColor font-normal">
              {title}
            </h3>
          </div>
          <p className="text-sm text-[#444444] tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
        <a
          href={`/news/${id}`}
          className="btn btn-primary text-red-500 justify-end flex">
          Xem thêm
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
