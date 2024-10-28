import React from "react";
import { CiCalendar } from "react-icons/ci";

const Content = () => {
  return (
    <div className="container">
      <div className="flex h-[40px] mt-6">
        {/* Left */}
        <div className=" w-[60%]">
          <div className="w-[80%] h-full bg-white rounded-md text-black  items-center justify-center grid grid-cols-4">
            <h6 className="border h-full flex items-center justify-center hover:bg-gray-400 hover:rounded-l-md font-semibold ">
              12 months
            </h6>
            <h6 className="border h-full hover:bg-gray-400 flex items-center justify-center font-semibold">
              30 days
            </h6>
            <h6 className="border h-full hover:bg-gray-400 flex items-center justify-center font-semibold">
              7 days
            </h6>
            <h6 className="border h-full hover:bg-gray-400 flex items-center justify-center hover:rounded-r-md font-semibold">
              24 hours
            </h6>
          </div>
        </div>

        {/* Right */}
        <div className="w-[40%] flex justify-end">
          <div className="bg-white w-[35%] rounded-md flex items-center justify-center gap-1">
            <CiCalendar className="text-[25px]" />
            <h1 className="font-semibold text-[18px]">Custom Date</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
