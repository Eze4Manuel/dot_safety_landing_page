import React from "react";
import {
  AiFillLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="min-h-[300px] bg-primary-base py-12  px-3 md:px-10 lg:px-28 text-white">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <h3 className="font-bold font-serif text-xl lg:text-2xl">
            DotSafety
          </h3>
          <p className="font-sans text-base lg:text-lg py-6 !leading-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt
            ut labore et dolore incididunt ut labore et dolore magna. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut
            labore et dolore incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="sm:flex col-span-1 sm:space-x-14 pb-5 md:justify-between lg:justify-around">
          <div className="">
            <h4 className="font-bold font-serif text-xl">Links</h4>
            <ul className="py-6 font-[350] text-sm space-y-6 text-green-200">
              <l className="hover:text-white hover:font-medium">
                <a href="#">HOME</a>
              </l>
              <li className="hover:text-white hover:font-medium">
                <a href="#">FAQ</a>
              </li>
              <li className="hover:text-white hover:font-medium">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-bold font-serif text-xl">Connect With Us</h4>
            <div className="flex py-6 text-2xl space-x-7 text-green-200">
              <AiOutlineTwitter className="hover:text-white hover:scale-105" />
              <AiOutlineInstagram className="hover:text-white hover:scale-105" />
              <AiOutlineFacebook className="hover:text-white hover:scale-105" />
              <AiFillLinkedin className="hover:text-white hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-[350] font-sans">
          © 2021 DotSafety Tracking System.
        </p>
      </div>
    </div>
  );
};

export default Footer;
