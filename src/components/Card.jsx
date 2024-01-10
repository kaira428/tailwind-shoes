import React from "react";

const Card = ({ item }) => {
  return (
    <div className={`${item.className} flex relative max-w-lg cursor-pointer transition hover:scale-105`}>
      <div className="p-8">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="mt-10 underline underline-offset-4 font-semibold">SHOP NOW+</div>
      </div>
      <img className="h-40 w-56 absolute right-10 -bottom-8" src={item.src}/>
    </div>
    );
};

export default Card;
