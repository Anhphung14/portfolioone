import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className="py-2 px-6 bg-[#fff764] h-[44px] w-[168px] block border-box rounded-lg relative">
      <h2 className="text-xl font-[400px] uppercase text-[#222222] tracking-wide text-center">
        {title}
      </h2>
      <div className="w-full">
        <div className="absolute bottom-0 left-0 right-0"></div>
      </div>

      {/* <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
        {des}
      </h1> */}
    </div>
  );
};

export default Title;
