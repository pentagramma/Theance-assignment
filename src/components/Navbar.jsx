import React from "react";
import Logo from "../assets/logo.jpeg";

import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/signup");
  };
  return (
    <div className="flex justify-center items-center mb-[3.5cm] z-[99] relative">
      <div className="h-[111.17px] w-[1392px] top-[24px] fixed border rounded-full flex justify-between flex-row items-center py-[20.89px] px-[16.97px] bg-white">
        <div className="ml-12 w-[127.94px] h-[47.39px] cursor-pointer">
          <img src={Logo} alt="" />
        </div>
        <div className="flex flex-row gap-[15.67px] w-[428.61px] h-[77.22px]  justify-end mr-1 font-abc">
          <button
            className="border w-[189.56px] h-[77.22px] rounded-full hover:bg-[#EAEAEA] py-[26.11px] px-[41.78px] hover:scale-110 duration-150 font-[500] font-abc"
            onClick={handleRedirect}
          >
            Get Projects
          </button>
          <button className="border w-[189.56px] h-[77.22px] rounded-full text-white bg-black hover:bg-[#4E4E4E] hover:scale-110 duration-150">
            Onboard Talent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
