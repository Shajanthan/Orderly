import React from "react";
import { Check, CirclePlus, CircleMinus } from "lucide-react";

interface DishSizeCartProps {
  size: string;
  price: number;
  description: string;
  selected: boolean;
  quantity: number;
  onSelect: () => void;
  onQuantityChange: (change: number) => void;
}

const DishSizeCart: React.FC<DishSizeCartProps> = ({
  size,
  price,
  selected,
  quantity,
  onSelect,
  onQuantityChange,
}) => {
  return (
    <div
      className={`relative rounded-xl border-2 p-4 text-center cursor-pointer transition-all duration-300
        ${selected ? "border-black shadow-md" : "border-gray-200 bg-white"}`}
    >
      {/* Selection Indicator */}
      <div className="flex justify-center mb-3" onClick={onSelect}>
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200
            ${selected ? "border-black bg-black" : "border-gray-300"}`}
        >
          {selected && <Check size={12} className="text-white" />}
        </div>
      </div>

      {/* Size Info */}
      <div
        className={`font-semibold text-base-common transition-colors duration-200${
          selected ? "text-black" : "text-gray-800"
        }`}
        onClick={onSelect}
      >
        <div>{size}</div>
        <div>Rs. {price}</div>
      </div>

      <div
        className={`text-lg font-bold mb-2 transition-colors duration-200 ${
          selected ? "text-black" : "text-gray-900"
        }`}
        onClick={onSelect}
      ></div>

      {/* Quantity Controls - Only show when selected */}
      {selected && (
        <div className="flex items-center justify-center gap-2 mt-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuantityChange(-1);
            }}
            className="w-7 h-7 flex items-center justify-center transition-all duration-200 text-black"
          >
            <CircleMinus
              size={24}
              className="hover:bg-black hover:text-white rounded-full"
            />
          </button>
          <span className="font-semibold text-lg w-8 text-center text-black">
            {quantity}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuantityChange(1);
            }}
            className="w-7 h-7 flex items-center justify-center transition-all duration-200 text-black"
          >
            <CirclePlus
              size={24}
              className="hover:bg-black hover:text-white rounded-full"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default DishSizeCart;
