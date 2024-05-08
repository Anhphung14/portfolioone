import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import nlthContact from "../../assets/images/nlth-contact.jpg";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full  bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-400 p-4 lgl:p-8 rounded-lg  flex flex-col gap-8 justify-center">
      <img
        className="w-full h-96 object-cover rounded-lg mb-2"
        src={nlthContact}
        alt="nlthContact"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-[#444444]">
          Nguyễn Lê Thanh Hải
        </h3>
        <p className="text-lg font-normal text-[#444444]">
          Th.s Đạo diễn - Biên đạo
        </p>
        <p className="text-base text-[#444444] tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="text-base text-[#444444] flex items-center gap-2">
          Email: <span className="">noor.jsdivs@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default ContactLeft;
