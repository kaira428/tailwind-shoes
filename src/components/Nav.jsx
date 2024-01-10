import { RiShoppingBasket2Fill } from "react-icons/ri";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export default function Nav({onClickShoppingButton}) {
  const [mobileMenuShown, setMobileMenuShown] = useState(false);

  return (
    <nav className="z-10 relative flex flex-wrap justify-between items-center">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Burger button */}
      <button
        onClick={() => setMobileMenuShown(!mobileMenuShown)}
        className="p-2 rounded-lg 
       lg:hidden
       hover:bg-gray-200 
       focus:ring-2 
       focus:ring-red-300
       "
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu List */}
      <div className={`${mobileMenuShown===false && "hidden"} w-full lg:w-auto lg:block lg:z-10`}>
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 text-lg border border-gray-100 rounded-lg p-4 lg:bg-transparent lg:border-none">
          {ROUTES.map((route, index) => (
            <li
              className={`px-3 py-2 cursor-pointer rounded lg:hover:bg-transparent lg:hover:text-blue-500 ${
                index === 0
                  ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                  : "hover:bg-gray-100"
              } ${(index===3||index===4) && "lg:text-white"}`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>

      {/* Cart button */}
      <div className="btn-press-animate fixed left-4 bottom-4 lg:static lg:mr-8">
        <div className="cursor-pointer h-12 w-12 rounded-full bg-blue-50 shadow-md flex-center">
          <RiShoppingBasket2Fill onClick={onClickShoppingButton} size={25} />
        </div>
      </div>
    </nav>
  );
}
