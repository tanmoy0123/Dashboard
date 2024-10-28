import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Graph from "../graph/graph";

const Row = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-6 mt-7">
        {/* Left */}
        <div className="relative bg-white rounded-md p-6">
          <div className="flex justify-between">
            <h1 className="text-[12px] font-semibold">
              Revenue <span className="font-bold text-[15px]">600 AED</span>
            </h1>
            <BsThreeDotsVertical />
          </div>
          <div className="h-[1px] bg-gray-400 w-[100%] mt-2"></div>
          <div className="absolute -left-[50px] top-16">
            <Graph />
          </div>
        </div>

        {/* Right */}
        <div className="bg-white rounded-md p-6">
          <div className="flex justify-between">
            <h1 className="text-[15px] font-semibold">Pending Tasks</h1>
            <BsThreeDotsVertical />
          </div>
          <div className="h-[1px] bg-gray-400 w-[100%] mt-2"></div>

          <div className="h-[40px] border-[1px] border-gray-500 mt-3 p-3  rounded-md flex justify-between items-center">
            <h1 className="font-semibold">Resturant Accounts</h1>
            <div className="h-[30px] w-[40px] bg-[#a1045a66] rounded-md flex justify-center items-center font-semibold">
              <h1 className="text-[#A1054A]">10</h1>
            </div>
          </div>

          <div className="h-[40px] border-[1px] border-gray-500 mt-3 p-3  rounded-md flex justify-between items-center">
            <h1 className="font-semibold">Resturant Onboarding</h1>
            <div className="h-[30px] w-[40px] bg-[#a1045a66] rounded-md flex justify-center items-center font-semibold">
              <h1 className="text-[#A1054A]">10</h1>
            </div>
          </div>

          <div className="h-[40px] border-[1px] border-gray-500 mt-3 p-3  rounded-md flex justify-between items-center">
            <h1 className="font-semibold">Rider Partners</h1>
            <div className="h-[30px] w-[40px] bg-[#a1045a66] rounded-md flex justify-center items-center font-semibold">
              <h1 className="text-[#A1054A]">10</h1>
            </div>
          </div>

          <div className="h-[40px] border-[1px] border-gray-500 mt-3 p-3  rounded-md flex justify-between items-center">
            <h1 className="font-semibold">Rider Onboarding</h1>
            <div className="h-[30px] w-[40px] bg-[#a1045a66] rounded-md flex justify-center items-center font-semibold">
              <h1 className=" text-[#A1054A]">10</h1>
            </div>
          </div>

          <div className="h-[40px] border-[1px] border-gray-500 mt-3 p-3  rounded-md flex justify-between items-center">
            <h1 className="font-semibold">Support Tickets</h1>
            <div className="h-[30px] w-[40px] bg-[#a1045a66] rounded-md flex justify-center items-center font-semibold">
              <h1 className="text-[#A1054A]">10</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
