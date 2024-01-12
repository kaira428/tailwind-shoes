/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../constants";

const CartItem = ({ item }) => {
  return (
    <div className="cursor-pointer p-2 space-y-2 bg-slate-100 mt-2 hover:bg-yellow-400">
      <div className="flex space-x-2">
        {/* Image */}
        <img className="h-24" src={item.src} />
        {/* Text & Description */}
        <div>
          <div className="text-xl">{item.title}</div>
          <div className="text-sm mr-2 text-gray-400">{item.description}</div>
        </div>
        {/* Price */}
        <div className="min-w-max font-bold">SGD {item.price}</div>
      </div>
      <div></div>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
        <div>
          <div className="font-bold">QTY</div>
          <Select title={1} options={QTY} className="w-16 p-1"/>
        </div>
        <div>
          <div className="font-bold">SIZE</div>
          <Select title={41} options={SIZES} className="w-16 p-1"/>
        </div>
        </div>
        <button>
          <CiTrash size={25} className="font-black" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
