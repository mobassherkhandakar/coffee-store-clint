import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className=" min-h-[calc(100vh-200px)] items-center grid grid-cols-2 bgImg">
        <div>
        
        </div>
        <div className="">
          <h4 className="text-4xl text-left text-white">
            Would you like a Cup of Delicious Coffee?
          </h4>
          <p className="text-2xl text-white">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-[#E3B577] px-3 py-2 rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
