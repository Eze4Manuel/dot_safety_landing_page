import React from "react";

const Card = (props) => {
  const { icon, title, text, className } = props;
  return (
    <div
      className={`max-w-[360px] min-h-[250px] bg-white drop-shadow-lg py-12 px-8 rounded-[10px] ${className}`}
    >
      <img src={icon} alt="" />
      <div className="my-3">
        <h4 className="text-xl text-grey-800 font-semibold capitalize">
          {title}
        </h4>
        <p className="text-grey-300 font-normal py-3 leading-[26px] text-base font-sans">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card;
