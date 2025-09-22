import React from "react";
import noodles from "../../assets/noodles2.jpg";
import { AiFillStar } from "react-icons/ai";

interface DishCartProps {
  onClick?: () => void;
}

const DishCart: React.FC<DishCartProps> = ({ onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 w-[180px] flex flex-col cursor-pointer"
      onClick={onClick}
    >
      {/* Dish Image */}
      <div className="h-[130px] w-[180px] rounded-t-lg overflow-hidden">
        <img
          src={noodles}
          alt="Dish"
          className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
        />
      </div>

      {/* Dish information */}
      <div className="p-2 flex flex-col gap-1">
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          Prawn Noodles
        </h3>

        {/* Vendor */}
        <div className="footer-text-no-color flex justify-between">
          Khalids Kitchen
          <div className="flex items-center text-yellow-500 text-xs">
            <AiFillStar size={14} />
            <span className="ml-1 text-gray-700 font-medium">4.2 (300+)</span>
          </div>
        </div>

        {/* Rating */}

        {/* Price & Cart */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-bold text-gray-800">Rs. 220</span>
        </div>
      </div>
    </div>
  );
};

export default DishCart;
