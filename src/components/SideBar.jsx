/* eslint-disable react/prop-types */
import React from "react";

const SideBar = ({ children, isOpen, onClickClose }) => {
  return (
    <>
      <div
        className={`p-5 fixed right-0 top-0 z-50 shadow-xl w-full md:w-[50%] lg:w-[35%] h-full bg-white transform transition duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="text-2xl font-bold">Cart</div>
        <button
          onClick={onClickClose}
          className="text-black font-bold absolute right-4 top-4 p-2"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && <div className="fixed left-0 top-0 z-20 w-full h-full bg-black opacity-35" />}
    </>
  );
};

export default SideBar;
