import React from "react";
import Testimonial from "./Testimonial";

const testimonials = [
  {
    img: "/img/testimonials/1.png",
    name: "Janet Praise",
    ocucupation: "Civil Servant",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit incididunt ut labore et dolore magna consectetur adipiscing elit, incididunt ut consectetur adipiscing elit incididunt ut labore et dolore magna consectetur adipiscing elit, incididunt ut Lorem ipsum",
  },
  {
    img: "/img/testimonials/2.png",
    name: "Wiliams Ibrahim",
    ocucupation: "Civil Servant",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit incididunt ut labore et dolore magna consectetur adipiscing elit, incididunt ut consectetur adipiscing elit incididunt ut labore et dolore magna consectetur adipiscing elit, incididunt ut Lorem ipsum",
  },

  {
    img: "/img/testimonials/2.png",
    name: "Wiliams Ibrahim",
    ocucupation: "Civil Servant",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit incididunt ut labore et dolore magna consectetur adipiscing elit, incididunt ut consectetur adipiscing elit incididunt ut labore et dolore magna consectetur adipiscing elit, incididunt ut Lorem ipsum",
  },

  {
    img: "/img/testimonials/2.png",
    name: "Wiliams Ibrahim",
    ocucupation: "Civil Servant",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit incididunt ut labore et dolore magna consectetur adipiscing elit, incididunt ut consectetur adipiscing elit incididunt ut labore et dolore magna consectetur adipiscing elit, incididunt ut Lorem ipsum",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white py-14 px-4 md:px-5 lg:px-28">
      <div>
        <h3 className="text-[32px] text-primary-base text-center py-9 font-serif font-semibold">
          Testimonial
        </h3>
        <p className="text-2xl text-gray-400 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit incididunt ut
          labore et dolore magna consectetur adipiscing elit, incididunt ut
          Lorem ipsum
        </p>
      </div>
      <div className="grid grid-cols-2 py-10 gap-5 space-y-6">
        {testimonials.map((testimonial, i) => (
          <Testimonial
            key={i}
            testimonial={testimonial}
            className=" mx-auto col-span-2 lg:col-span-1"
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
