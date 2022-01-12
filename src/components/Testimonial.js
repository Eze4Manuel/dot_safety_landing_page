import React from "react";

const Testimonial = ({ className, testimonial }) => {
  const { testimony, name, occupation, img } = testimonial;
  return (
    <div
      className={`max-w-[520px] min-h-[280px] bg-white drop-shadow-xl py-10 px-8 rounded-[10px] ${className}`}
    >
      <p className="text-grey-400 font-sans text-base leading-5">{testimony}</p>

      <div>
        <div className="mt-[50px] flex items-center">
          <img width="70px" height="70px" src={img} alt="" className="mr-6" />
          <span className="inline-grid">
            <p className="text-lg font-serif font-semibold text-grey-600">
              {name}
            </p>
            <p className="text-grey-600 font-base font-sans">{occupation}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
