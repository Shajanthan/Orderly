import React, { useState } from "react";
import { Clock, Store, Star, ShoppingCart } from "lucide-react";
import DishSizeCart from "../components/cards/DishSizeCart";
import noodels from "../assets/noodles2.jpg";

const DishDetail: React.FC = () => {
  const dummyDish = {
    title: "Spicy Ramen Noodles",
    restaurant: "Khalid's Kitchen",
    price: "$12",
    rating: 4.8,
    reviews: "2.2K",
    cookTime: "15-20 mins",
    description:
      "Authentic Japanese-style ramen with rich, flavorful broth, tender noodles, and fresh vegetables. A perfect comfort meal that will warm your soul.",
  };
  const sizeOptions = [
    { size: "Small", price: 800, description: "Perfect for light meal" },
    { size: "Medium", price: 1000, description: "Most popular choice" },
    { size: "Large", price: 1200, description: "Great for sharing" },
  ];

  const [selectedItems, setSelectedItems] = useState<Record<string, number>>(
    {}
  );

  const toggleSize = (size: string) => {
    setSelectedItems((prev) => {
      if (prev[size]) {
        const copy = { ...prev };
        delete copy[size];
        return copy;
      } else {
        return { ...prev, [size]: 1 };
      }
    });
  };

  const updateQty = (size: string, change: number) => {
    setSelectedItems((prev) => {
      const currentQty = prev[size] || 1;
      const newQty = Math.max(1, currentQty + change);
      return { ...prev, [size]: newQty };
    });
  };

  const total = Object.entries(selectedItems).reduce((sum, [size, qty]) => {
    const option = sizeOptions.find((o) => o.size === size);
    return sum + (option ? option.price * qty : 0);
  }, 0);

  return (
    <div className=" bg-white flex flex-col">
      {/* Image Section */}
      <div className="relative h-80 flex-shrink-0 bg-gradient-to-br from-orange-400 to-orange-600 overflow-hidden">
        <img
          src={noodels}
          alt={dummyDish.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Dish Info Overlay */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h1 className="text-3xl font-bold mb-3">{dummyDish.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <Store size={16} />
              <span className="text-sm font-medium">
                {dummyDish.restaurant}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <Clock size={16} />
              <span className="text-sm font-medium">{dummyDish.cookTime}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">{dummyDish.rating}</span>
              <span className="text-sm text-white/80">
                ({dummyDish.reviews})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto p-3">
        {/* Description */}
        <div className="pb-5">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            About This Dish
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {dummyDish.description}
          </p>
        </div>

        {/* Size Selection */}
        <div>
          <h3 className="text-xl font-semibold pb-5 text-gray-800">
            Choose Your Size
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {sizeOptions.map((option) => (
              <DishSizeCart
                key={option.size}
                size={option.size}
                price={option.price}
                description={option.description}
                selected={!!selectedItems[option.size]}
                quantity={selectedItems[option.size] || 1}
                onSelect={() => toggleSize(option.size)}
                onQuantityChange={(change) => updateQty(option.size, change)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      {Object.keys(selectedItems).length >= 0 && (
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-2 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <button
              disabled={total === 0}
              className={`w-full p-3 rounded-lg text-lg flex items-center justify-center gap-3 shadow-lg transform transition-all duration-200
          ${
            total === 0
              ? "bg-gray-400 cursor-not-allowed text-gray-200"
              : "bg-black text-white hover:bg-gray-900 hover:scale-[1.02]"
          }`}
            >
              <ShoppingCart size={20} />
              Add to Cart - Rs. {total}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DishDetail;
