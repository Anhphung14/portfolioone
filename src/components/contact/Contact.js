import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Vui lòng nhập tên của bạn!");
    } else if (phoneNumber === "") {
      setErrMsg("Vui lòng nhập số điện thoại!");
    } else if (email === "") {
      setErrMsg("Vui lòng nhập Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Email không đúng định dạng");
    } else if (message === "") {
      setErrMsg("Vui lòng viết thêm lời nhắn");
    } else {
      setSuccessMsg(
        `Cảm ơn ${username}, bạn đã gửi liên hệ đến Thanh Hải thành công!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <section id="contact" className="w-full py-20 ">
      <div className="pb-20">
        <Title title="Liên hệ" des="" />
        <hr className="border-[#222222] border-solid border-t-2 w-full" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10  bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-400 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg ">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-red-100 text-center rounded-sm text-red-500 text-xl tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3  bg-green-50  text-center text-green-900 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-[#444444] uppercase tracking-wide">
                    Họ tên
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Vui lòng nhập tên của bạn!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-[#444444] uppercase tracking-wide">
                    Số điện thoại
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Vui lòng nhập số điện thoại!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-[#444444] uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Vui lòng nhập Email!" && "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-[#444444] uppercase tracking-wide">
                  Lời nhắn
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Vui lòng viết thêm lời nhắn!" &&
                    "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-slate-50 rounded-lg text-base text-[#444444] tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                  Gửi liên hệ
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-red-100 text-center rounded-sm text-red-500 text-xl tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3  bg-green-50  text-center text-green-900 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
