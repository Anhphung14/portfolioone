import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const colors = ["red", "blue", "green", "orange"];

  useEffect(() => {
    const path = window.location.pathname;
    setIsHome(path === "/");
  }, []);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleLinkClick = (link) => {
    if (!isHome) {
      handleCloseMenu();
      window.location.href = "/";
    }
  };

  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-[#ffff] pr-6 flex justify-between items-center font-titleFont">
      <div className="pl-8 w-32">
        <ScrollLink to="/" spy={true} smooth={true} duration={500}>
          <img src={logo} alt="logo" />
        </ScrollLink>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-xl font-normal text-[#1a1c24] tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}>
              <ScrollLink
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleLinkClick(link)}>
                {title}
              </ScrollLink>
              <hr
                style={{
                  borderTop: `2px solid ${colors[_id % colors.length]}`,
                }}
              />
            </li>
          ))}
        </ul>
        <span
          onClick={handleMenuClick}
          className="text-2xl mdl:hidden bg-white w-10 h-10 inline-flex items-center justify-center rounded-full text-black cursor-pointer">
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <ScrollLink to="/" spy={true} smooth={true} duration={500}>
                  <img className="w-32" src={logo} alt="logo" />
                </ScrollLink>
                <p className="text-white">Nguyễn Lê Thanh Hải</p>
                <h1 className="text-xs pt-1 text-white">
                  Th.s Đạo diễn - Biên đạo
                </h1>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                    <ScrollLink
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => handleLinkClick(item.link)}>
                      {item.title}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
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
              <span
                onClick={handleCloseMenu}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer">
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
