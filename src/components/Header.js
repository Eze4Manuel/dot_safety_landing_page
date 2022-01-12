import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-[75px] sticky top-0 z-50 bg-white px-12 md:px-24 grid shadow-md w-full">
      <Transition
        // as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-90"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-out duration-750"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="h-[99vh] lg:hidden absolute top-[75px] left-0 bg-primary-base backdrop-blur-2xl w-full">
          <div className="flex justify-center flex-col items-center h-screen">
            <ul className="text-center my-auto text-xl text-green-200">
              <li className="py-6 hover:text-white">
                <button className="font-bold">
                  <a onClick={() => setIsOpen(false)} href="/">
                    Home
                  </a>
                </button>
              </li>
              <li className="py-6 hover:text-white">
                <button className="font-bold">
                  <a onClick={() => setIsOpen(false)} href="#how_it_works">
                    How it works
                  </a>
                </button>
              </li>
              <li className="py-6 hover:text-white">
                <button className="font-bold">
                  <a onClick={() => setIsOpen(false)} href="#get_the_app">
                    Get the app
                  </a>
                </button>
              </li>
              <li className="py-6 hover:text-white">
                <button className="font-bold">
                  <a onClick={() => setIsOpen(false)} href="#testimonials">
                    Testimonials
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
      <div className=" max-w-[1130px] justify-between z-40 flex items-center w-full">
        <div>
          <img src="/img/logo.png" alt="" className="inline-grid" />
          <h2 className="text-primary-base hidden md:inline-grid ml-4 font-semibold text-lg">
            DotSafety
          </h2>
        </div>
        <div>
          <ul className="hidden lg:flex space-x-16 text-sm text-grey-600 uppercase items-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#how_it_works">How it works</a>
            </li>
            <li>
              <a href="#get_the_app">Get the app</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <button className="bg-primary-base text-white px-11 py-3 rounded-md hover:bg-primary-dark">
              Login
            </button>
          </ul>
          <div className="w-2 ml-auto ">
            <Transition show={isOpen}>
              <AiOutlineClose
                className="lg:hidden my-auto cursor-pointer"
                size="30"
                onClick={() => setIsOpen(false)}
              />
            </Transition>

            <Transition show={!isOpen}>
              <AiOutlineMenu
                onClick={() => setIsOpen(true)}
                className="lg:hidden cursor-pointer"
                size="30"
              />
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
