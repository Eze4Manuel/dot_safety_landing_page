import React from "react";

const GetTheApp = () => {
  return (
    <div id="get_the_app" className="min-h-[80vh] pt-12  grid grid-cols-1">
      <div className="px-4 md:px-6 lg:px-[160px] col-span-1 z-20 flex items-center">
        <div>
          <h2 className="font text-grey-600 font-serif text-center font-semibold text-4xl md:text-[55px]">
            Get the mobile app
          </h2>
          <p className="text-2xl text-gray-600 leading-[29px] font-serif text-center my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt
            ut labore et dolore incididunt ut labore et dolore magna consectetur
            adipiscing elit, incididunt ut Lorem ipsum
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-10 md:space-y-0">
            <button className="hover:scale-95">
              <img src="/img/googleplay.png" alt="" />
            </button>
            <button className="hover:scale-95">
              <img src="/img/appstore.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-auto relative  col-span-1">
        <img
          src="/img/ellipse.png"
          className="absolute bottom-0 left-0 z-10"
          alt=""
        />
        <img
          src="/img/Group13.png"
          className="absolute left-0 bottom-0"
          alt=""
        />
        <img
          src="/img/Group5.png"
          className="absolute right-0 bottom-0"
          alt=""
        />
      </div>
    </div>
  );
};

export default GetTheApp;
