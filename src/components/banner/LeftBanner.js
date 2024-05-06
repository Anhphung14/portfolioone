import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Đạo diễn.", "Biên đạo.", "Giảng viên.", "Giảm khảo."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 pl-4">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal"></h4>
        <h1 className="text-5xl font-bold text-white">
          <span className="text-[#1a1c24] capitalize">Nguyễn Lê Thanh Hải</span>
          <h4 className=" text-lg text-[#272930] font-normal">
            Th.s Đạo diễn - Biên đạo
          </h4>
        </h1>
        <h2 className="text-4xl font-bold text-[#272930]">
          Công việc: <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont text-[#272930] leading-6 tracking-wide">
          Với kinh nghiệm hơn 20 năm làm nghề, Đạo diễn - Biên đạo múa Nguyễn Lê
          Thanh Hải đã tham gia đạo diễn , biên đạo hàng trăm sự kiện lớn nhỏ
          trong và ngoài nước, giảng dạy ở nhiều trường đại học và cao đẳng. Đặc
          biệt Đạo diễn - Biên đạo múa Nguyễn Lê Thanh Hải từng công tác 17 năm
          tại Đoàn Văn công Quân khu 7.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4"></h2>
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
      </div>
    </div>
  );
};

export default LeftBanner;
