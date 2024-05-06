import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon, image }) => {
  return (
    <div
      className="w-full px-12 h-80 py-10 rounded-lg shadow-current flex items-center group transition-colors duration-100 group"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-white">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative px-2">
              <h2 className="text-xl md:text-2xl font-titleFont font-bold text-white">
                {title}
                <span className="absolute inset-0 bg-slate-400 opacity-60 backdrop-blur-md rounded-md "></span>

                <span className="absolute inset-0 flex items-center justify-center">
                  {title}
                </span>
              </h2>
            </div>

            <p className="base">{des}</p>
            {/* <span className="text-2xl text-white">
              <HiArrowRight />
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
