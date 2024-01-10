import nike1 from "../assets/n1-min.png";
import Select from "./Select";
import { QTY, SIZES } from "../constants";

const ShoeDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      {/* Shoe Image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] from-10% via-[#E3D876] via-45% to-[#4DD4C6]">
          <img className="animate-float" src={nike1} />
        </div>
      </div>
      {/* Shoe Text */}
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black lg:text-9xl">Nike Air max 270</div>
        {/* Shoe Details */}
        <div className="font-medium lg:text-xl">
          {
            " The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant colour gradient."
          }
        </div>
        <div className="flex space-x-6">
          {/* <button className="text-red-500" popovertarget="info">i</button>
          <div id="info" popover>Singapore Dollars</div> */}
          <div className="font-extrabold text-2xl md:text-5xl">SGD 100</div>
          <Select title="QTY" options={QTY} />
          <Select title="SIZE" options={SIZES} />
        </div>
        {/* Shoe Button & Link */}
        <div className="space-x-10">
          <button className="btn-press-animate h-14 w-44 bg-black text-white hover:bg-gray-600 active:bg-blue-400">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-2"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetail;
