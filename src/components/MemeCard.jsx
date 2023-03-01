import React from "react";

export default function MemeCard({ img, title, desc, more }) {
  return (
    <div className="bg-white rounded-md shadow-md p-5 flex flex-col gap-6 cursor-pointer flip ">
      <div className="flip-content">
        <div className="flip-front">
          <img alt="" src={img} width={200} height={200} />
          <h2 className="font-bold">{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="flip-back relative">
          <p className="absolute top-0 font-bold text-xl">{more}</p>
        </div>
      </div>
    </div>
  );
}
