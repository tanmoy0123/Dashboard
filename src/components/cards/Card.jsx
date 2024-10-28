import React from "react";
import { BsPerson } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { IoRestaurantOutline } from "react-icons/io5";
import { MdDirectionsBike } from "react-icons/md";
import { TbMotorbike } from "react-icons/tb";
import { RiCoupon2Line } from "react-icons/ri";

const cardData = [
  { id: 1, icon: <BsPerson />, num: 3301, text: "Total Customer" },
  { id: 2, icon: <CiViewList />, num: 10457, text: "Total Orders" },
  { id: 3, icon: <CiViewList />, num: 3000, text: "Completed Orders" },
  { id: 4, icon: <CiViewList />, num: 240, text: "Cancelled Orders" },
  {
    id: 5,
    icon: <IoRestaurantOutline />,
    num: 1200,
    text: "Resturant Partners",
  },
  { id: 6, icon: <MdDirectionsBike />, num: 3628, text: "Rider Partners" },
  { id: 7, icon: <TbMotorbike />, num: 17349, text: "Active Rider" },
  { id: 8, icon: <RiCoupon2Line />, num: 1393, text: "Coupons Active" },
];

const Card = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-5 mt-10">
        {cardData.map((data) => (
          <div key={data.id}>
            <div className="bg-white flex p-5 rounded-md gap-4">
              <div className="h-[58px] w-[58px] bg-[#A1045A] text-[35px] text-white rounded-md flex items-center justify-center">
                {data.icon}
              </div>
              <div>
                <h1 className="font-bold text-[20px]">{data.num}</h1>
                <h6 className="font-normal text-[15px] text-gray-400">
                  {data.text}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
Card;
