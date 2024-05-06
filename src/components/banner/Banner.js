import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full h-auto pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont px-6 ">
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
