import React from "react";
import shop from "../../assets/shop.jpg";
import { AiFillStar } from "react-icons/ai";

const ShopCart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 w-full flex flex-col cursor-pointer">
      {/* Shop Image */}
      <div className="h-[180px] w-full rounded-t-lg overflow-hidden">
        <img
          src={shop}
          alt="Dish"
          className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
        />
      </div>

      {/* Shop information */}
      <div className="p-2 flex flex-col gap-1">
        <h3 className="font-semibold text-gray-800 truncate flex justify-between">
          Khalids Resturant
          <div className="text-green-700">Open</div>
        </h3>
        <div className="footer-text-no-color flex justify-between">
          <div className="flex items-center text-yellow-500 text-xs">
            <AiFillStar size={14} />
            <span className="ml-1 text-gray-700 font-medium">4.2 (300+)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
