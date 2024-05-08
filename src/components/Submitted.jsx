import React from "react";
import logo from "../assets/logo.jpeg";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

/**
 * Submitted component displays a success message and a countdown timer before redirecting.
 * @returns {JSX.Element} Submitted component
 */
const Submitted = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = React.useState(5); // Initial timer value

  React.useEffect(() => {
    // Function to decrement timer every second
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    // Redirect to home page after 5 seconds
    setTimeout(() => {
      navigate("/");
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      {/* Logo */}
      <div className="w-[90%] h-[20%]  flex justify-between items-center flex-row">
        <div>
          <img src={logo} alt="" className="w[127.94px] h-[47.39px]" />
        </div>
      </div>
      {/* Success Message */}
      <div className="flex justify-center items-center flex-col">
        <div className="w-[80px] h-[80px]">
          <FaCircleCheck className="text-[#28B246] text-[75px]" />
        </div>
        <div className="pt-8 justify-center items-center flex flex-col">
          <h1 className="leading-[39.6px] font-bcd font-[400] text-[36px] text-[#2DA950]">
            Successfully Submitted
          </h1>
          {/* Countdown Timer */}
          <h4 className="font-base text-[48px] mt-8 animate-ping">{timer}</h4>
          {/* Congratulatory Message */}
          <h1 className="font-abc font-[600] text-[56px] leading-[67.2px] pt-8">
            Congratulations
          </h1>
          {/* Description */}
          <p className="w-[718px] h-[105px] font-abc font-[500] text-[27px] flex-col justify-center items-center leading-[35.1px] pt-8 text-center text-[#727272]">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to you shortly with updates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Submitted;
