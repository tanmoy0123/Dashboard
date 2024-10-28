import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoBasketOutline } from "react-icons/io5";
import Graph2 from "../graph/Graph2";

const Row = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-6 mt-7 mb-6">
        {/* Left */}
        <div className="bg-white rounded-md p-6">
          <div className="flex justify-between">
            <h1 className="text-[15px] font-semibold">Current Order Summary</h1>
            <BsThreeDotsVertical />
          </div>

          <div className="h-[1px] bg-gray-400 w-[100%] mt-2"></div>

          <div className="h-[50px] bg-[#a1045a66] mt-6 rounded-md flex justify-between items-center p-6">
            <div className="flex items-center justify-center gap-2">
              <IoBasketOutline className="text-[25px] font-bold text-[#A1054A]" />
              <h1 className="text-[15px] font-bold text-[#A1054A]">
                125 New Orders!
              </h1>
            </div>
            <div className="bg-white p-2 rounded-md">
              <h1 className="text-[#A1054A] font-bold text-[12px]">
                Manage Order
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-white border-2 h-[85px] rounded-md  pl-3">
              <h1 className="font-bold text-[40px]">389</h1>
              <p className="text-[13px] text-gray-400 -mt-2">Active</p>
            </div>

            <div className="bg-white border-2 h-[85px] rounded-md  pl-3">
              <h1 className="font-bold text-[40px]">125</h1>
              <p className="text-[13px] text-gray-400 -mt-2">Pending</p>
            </div>

            <div className="bg-white border-2 h-[85px] rounded-md  pl-3">
              <h1 className="font-bold text-[40px]">234</h1>
              <p className="text-[13px] text-gray-400 -mt-2">Refunded</p>
            </div>

            <div className="bg-white border-2 h-[85px] rounded-md  pl-3">
              <h1 className="font-bold text-[40px]">234</h1>
              <p className="text-[13px] text-gray-400 -mt-2">Cancelled</p>
            </div>
          </div>

          <div>
            <Graph2 />
          </div>
        </div>

        {/* Right */}
        <div className="bg-white rounded-md p-6">
          <div className="flex justify-between">
            <h1 className="text-[15px] font-semibold">Activity Log</h1>
            <BsThreeDotsVertical />
          </div>
          <div className="h-[1px] bg-gray-400 w-[100%] mt-2"></div>

          <div className="h-[60px] border-[1px] border-gray-500 mt-3 p-3  rounded-md flex justify-between items-center">
            <div className="">
              <p className="text-gray-400 font-normal text-[12px]">
                12-04-2024 10:14 PM
              </p>
              <h1 className="font-semibold">Modified New Item</h1>
            </div>
            <h1 className="font-normal text-[13px] text-gray-400">
              Jakit Sarkar
            </h1>
          </div>

          

          <div className="h-[60px] border-[1px] border-gray-500 mt-3 p-3  rounded-md flex justify-between items-center">
            <div className="">
              <p className="text-gray-400 font-normal text-[12px]">
                12-04-2024 10:14 PM
              </p>
              <h1 className="font-semibold">Modified New Item</h1>
            </div>
            <h1 className="font-normal text-[13px] text-gray-400">
              Jakit Sarkar
            </h1>
          </div>

          <div className="h-[60px] border-[1px] border-gray-500 mt-3 p-3  rounded-md flex justify-between items-center">
            <div className="">
              <p className="text-gray-400 font-normal text-[12px]">
                12-04-2024 10:14 PM
              </p>
              <h1 className="font-semibold">Modified New Item</h1>
            </div>
            <h1 className="font-normal text-[13px] text-gray-400">
              Jakit Sarkar
            </h1>
          </div>

          <div className="h-[60px] border-[1px] border-gray-500 mt-3 p-3  rounded-md flex justify-between items-center">
            <div className="">
              <p className="text-gray-400 font-normal text-[12px]">
                12-04-2024 10:14 PM
              </p>
              <h1 className="font-semibold">Modified New Item</h1>
            </div>
            <h1 className="font-normal text-[13px] text-gray-400">
              Jakit Sarkar
            </h1>
          </div>

          <div className="h-[60px] border-[1px] border-gray-500 mt-3 p-3  rounded-md flex justify-between items-center">
            <div className="">
              <p className="text-gray-400 font-normal text-[12px]">
                12-04-2024 10:14 PM
              </p>
              <h1 className="font-semibold">Modified New Item</h1>
            </div>
            <h1 className="font-normal text-[13px] text-gray-400">
              Jakit Sarkar
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
