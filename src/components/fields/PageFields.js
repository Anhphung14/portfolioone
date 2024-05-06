import React from "react";
import Fields from "./Fields";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import FooterBottom from "../footer/FooterBottom";
import Card from "./Card";
import skill1 from "../../assets/images/skill-1.png";
import skill2 from "../../assets/images/skill-2.png";
import skill3 from "../../assets/images/skill-3.png";
import skill4 from "../../assets/images/skill-4.png";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsCameraReels } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { LuUserCheck } from "react-icons/lu";

const PageFields = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-screen-xl mx-auto">
        {/* <Fields /> */}
        <div className="grid grid-cols-1 pt-10 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20">
          <Card title="Đạo diễn" icon={<BsCameraReels />} image={skill1} />
          <Card title="Biên đạo múa" icon={<IoIosPeople />} image={skill2} />
          <Card
            title="Giảng viên"
            icon={<FaChalkboardTeacher />}
            image={skill4}
          />
          <Card title="Giám khảo" icon={<LuUserCheck />} image={skill3} />
        </div>
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
};

export default PageFields;
