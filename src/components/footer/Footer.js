import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { PiAddressBookLight } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-20 px-3 h-auto border-b-[1px] border-b-black border-t-[1px] border-t-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8">
      <div className="w-full h-full flex flex-col gap-9">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <a href="http://www.facebook.com/thanhhai.nguyenle1">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://www.youtube.com/@nguyenlethanhhaiofficial">
            <span className="bannerIcon">
              <FaYoutube />
            </span>
          </a>
          <a>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDaodien.BiendaomuaThanhHai&amp;tabs=timeline&amp;width=380&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false"
          width="380"
          height="400"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"></iframe>
      </div>
      <div className="w-full h-full pl-12">
        <h3 className="text-xl flex items-center uppercase text-designColor tracking-wider">
          <span className="mr-2 ">
            <PiAddressBookLight />
          </span>
          Thông tin liên hệ
        </h3>
        <div className="pt-2">
          <hr className="border-yellow-400 border-solid border-t-2 w-60 " />
        </div>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="text-[#444444] text-lg flex items-center relative hover:text-designColor duration-300 group cursor-pointer">
              <AiOutlineHome className="mr-2" />
              Cô Giang, Quận 1
            </span>
          </li>
          <li>
            <span className="text-[#444444] text-lg flex items-center relative hover:text-designColor duration-300 group cursor-pointer">
              <TfiEmail className="mr-2" />
              nlth@gmail.com
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
