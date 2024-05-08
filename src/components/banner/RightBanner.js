import React from "react";
import { banner } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[400px] h-[600px] lgl:w-[600px] lgl:h-[600px] z-10"
        src={banner}
        alt="banner"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-yellow-300 shadow-lg shadow-yellow-900/50 flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
