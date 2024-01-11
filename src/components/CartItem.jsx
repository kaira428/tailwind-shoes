/* eslint-disable react/prop-types */
import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="flex cursor-pointer p-2 space-y-2 space-x-2 bg-slate-100 mt-2 hover:bg-yellow-400">
      <img className="h-24" src={item.src} />
      <div>
        <div className="text-xl">{item.title}</div>
        <div className="text-sm mr-2 text-gray-400">{item.description}</div>
      </div>
      <div className="min-w-max font-bold">{`SGD ${item.price}`}</div>
    </div>
  );
};

export default CartItem;
