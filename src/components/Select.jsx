/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

// eslint-disable-next-line react/prop-types
const Select = ({ title, options, className }) => {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className={twMerge(
          `w-24 appearance-none border border-gray-300 p-4 bg-white ${className}`
        )}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((choice) => (
          <option value={choice} key={choice}>
            {choice}
          </option>
        ))}
      </select>
      <div className="pointer-events-none flex absolute inset-y-0 right-0 items-center justify-center pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;
