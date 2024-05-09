import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import { IoMdClose } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

/**
 * Signup component displays a registration form.
 * @returns {JSX.Element} Signup component
 */
const Signup = () => {
  const navigate = useNavigate();
  const handleRedirectt = () => {
    navigate("/");
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);



  /**
   * Handles form submission.
   * @param {Event} e - The form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!email.includes(".com")) {
      // Invalid email format
      return;
    } else {
      navigate("/submitted");
    }
    // Handle form submission logic here

  };

  return (
    <div className="w-screen h-screen flex justify-evenly items-center flex-col">
      {/* Header */}
      <div className="w-[90%] h-[20%]  flex justify-between items-start flex-row">
        <div>
          <img src={logo} alt="" className="w[127.94px] h-[47.39px]" />
        </div>
        {/* Close button */}
        <div className="w-[64px] h-[64px] p-5 rounded-full flex justify-center items-center border">
          <button onClick={handleRedirectt}>
            <IoMdClose className="w-[32px] h-[32px] hover:text-red-600 hover:scale-125 duration-150" />
          </button>
        </div>
      </div>
      {/* Registration Form */}
      <div className="w-[588px] h-[539px] flex flex-col justify-center items-center pb-20">
        <div className="w-[588px] h-[178px] flex justify-center items-center flex-col leading-[39.6px]">
          {/* Form Title */}
          <h1 className="font-bcd text-[#2DA950] font-[400] text-[36px]">
            Registration Form
          </h1>
          {/* Subtitles */}
          <h1 className="font font-abc font-[600] text-[56px] leading-[67.2px] flex ">
            Start your success
          </h1>
          <h1 className="font font-abc font-[600] text-[56px] leading-[67.2px] flex ">
            Journey here!
          </h1>
        </div>
        {/* Form */}
        <div className="pt-[60px] w-full flex-1 flex justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="w-[417px] bg-white h-[298.22px] flex-col justify-center items-center">
              <div className="w-[417px] h-[174px] flex flex-col justify-center items-center">
                {/* Name Input */}
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-[#EFEFEF] w-[417px] h-[75px] rounded-full py-[24px] px-[36px] font-abc font-[500] text-[20px] text-[#827A7A] mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {/* Email Input */}
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-[#EFEFEF] w-[417px] h-[75px] rounded-full py-[24px] px-[36px] font-abc font-[500] text-[20px] text-[#827A7A] mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* Error message for invalid email */}
                {submitted && !email.includes(".com") && (
                  <div className="error w-[417px] flex-1 flex-row items-center justify-start flex text-[#FF0808]">
                    <h1 className="mr-2 ">
                      <MdErrorOutline />
                    </h1>
                    <h1 className="font-abc font-[500] text-[16px]">
                      Enter a valid email address
                    </h1>
                  </div>
                )}
              </div>
              {/* Submit Button */}
              <div className="flex justify-center items-center pt-5">
                <button
                  type="submit"
                  className={`py-[26.11px] px-[49.61px] w-[417px] h-[77.22px] bg-[#C9C9C9] mt-2 rounded-full text-white font-abc font-[600] text-[18px] hover:bg-black hover:scale-105 duration-150 ${email && name !== null ? 'bg-black' : ""}`}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
