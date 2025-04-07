import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ titleLine1, titleLine2, highlightColor, illustration, bg }) => {
  return (
    <div className="w-[600px] h-[310px] flex justify-between items-center p-[50px] rounded-[45px] bg-[#F3F3F3] border border-[#191A23] shadow-[0px_5px_0px_#191A23]" style={{ backgroundColor: bg }}>
      
      {/* Left Side */}
      <div className="flex flex-col justify-between h-full border-[#191A23]" >

        <div>
          <h2 className="text-[30px]  mt-[10px] font-bold leading-tight  ">
            <span className="px-1 rounded inline-block " style={{ backgroundColor: highlightColor }}>
              {titleLine1}
            </span>{" "}
            <br />
            <span className="px-1 rounded inline-block" style={{ backgroundColor: highlightColor, marginTop: "-45px" }}>
              {titleLine2}
            </span>
          </h2>
        </div>

        {/* Learn More Button */}
        <button className="flex items-center gap-2 mt-6 text-black text-[18px]">
           <span className="w-10 h-10 bg-black text-[#C5FF66] rounded-full flex items-center justify-center text-xl">
            →
           </span>
          Learn more
        </button>
      </div>

      {/* Right Side - Illustration */}
      <img
        src={illustration}
        alt="Illustration"
        className="h-full w-auto object-contain"
      />
    </div>
  );
};
ServiceCard.propTypes = {
  titleLine1: PropTypes.string.isRequired,
  titleLine2: PropTypes.string.isRequired,
  
  illustration: PropTypes.string.isRequired,
};

export default ServiceCard;

