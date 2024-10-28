import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Admin from "../../assets/admin.png";
const Navbar = () => {
  return (
    <div className="container">
      <div className="bg-white h-[70px] w-full mt-3 rounded-lg grid grid-cols-6">
        {/* Search Box column */}
        <div className="col-span-4 items-center flex content-center">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900   "
              placeholder="Search here..."
              required
            />
          </div>
        </div>

        {/* Message and Notifications */}

        <div className="flex items-center gap-4 justify-end mr-10">
          <div className="relative">
            <IoIosNotificationsOutline className="h-[26px] w-[26px]" />
            <div className="absolute h-[20px] w-[20px] bg-[#A1045A] rounded-full top-[-7px] left-3 ">
              <h6 className="text-white text-[13px] text-center font-semibold">
                3
              </h6>
            </div>
          </div>
          <IoChatbubbleEllipsesOutline className="h-[24px] w-[24px] mr-3" />
          <div className="h-[50px] w-[1px] bg-gray-300"></div>
        </div>

        {/* Username Details */}
        <div className="flex items-center gap-5 mr-2">
          <div>
            <h4 className="font-bold text-[17px]">Nayamul Roni</h4>
            <h6 className="font-medium flex justify-end text-gray-400">
              Super Admin
            </h6>
          </div>
          <div className="h-[50px] w-[50px] bg-gray-400 rounded-full">
            <img src={Admin} alt="admin" className="object-fill w-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
