import React from "react";
import Card from "./Card";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white  py-14 px-4 md:px-5 lg:px-28">
      <div className="max-w-[290px]">
        <h3 className="text-primary-base uppercase ">The Process</h3>
        <h2 className="text-grey-600 py-3 font-semibold  font-serif text-[32px] leading-9">
          How DotSafety works
        </h2>

        <div className="w-2/5 h-1 bg-primary-base my-8"></div>
      </div>

      <div className="grid md:grid-cols-2 justify-center m lg:grid-cols-3 gap-8 my-8">
        <Card
          className=""
          icon="/img/track.png"
          title="Track Your Movement"
          text="Lorem ipsum dolor sit amet, consectetur elit, incididunt ut labore et"
        />
        <Card
          className=""
          icon="/img/transport.png"
          title="Transparency Agency"
          text="Lorem ipsum dolor sit amet, consectetur elit, incididunt ut labore et"
        />
        <Card
          className="md:col-span-2 lg:col-span-1 md:mx-auto"
          icon="/img/camera.png"
          title="Safety Camera"
          text="Lorem ipsum dolor sit amet, consectetur elit, incididunt ut labore et"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
