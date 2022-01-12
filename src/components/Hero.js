import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen px-4 md:px-5 lg:px-28 py-14 bg-bg mx-auto flex flex-col-reverse lg:grid items-center grid-cols-2 ">
      <div className="col-span-1">
        <h1 className="text-primary-base mt-[30px] lg:mt-0  relative text-3xl md:tex-4xl lg:text-5xl font-semibold lg:leading-[59px]">
          Enjoy Seamless protection and Safety in your Environment.
        </h1>

        <div className="w-2/5 h-1 bg-primary-base my-6"></div>

        <p className=" text-base lg:text-lg leading-6 py-6">
          Enjoy Seamless protection and Safety in your Environment. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, incididunt ut labore et
          dolore incididunt ut labore et dolore magna consectetur adipiscing
          elit, incididunt ut Lorem ipsum Get Started
        </p>
        <button className="bg-primary-base my-8 text-white px-16 py-4 rounded-md hover:bg-primary-dark capitalize">
          Get started
        </button>
      </div>
      <div className="grid justify-center">
        <img src="/img/Hero-mockup.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
