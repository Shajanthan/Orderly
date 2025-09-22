/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import DesktopHeader from "../../components/customer/DesktopHeader";
import MobileHeader from "../../components/customer/MobileHeader";
import CategoryCard from "../../components/cards/CategoryCard";
import SearchBox from "../../components/common/SearchBox";
import DishCart from "../../components/cards/DishCart";
import ShopCart from "../../components/cards/ShopCart";
import Modal from "../../components/common/Modal";
import DishDetail from "../../features/DishDetails";

// interface CustomerHomeProps {

// }

const CustomerHome: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDish, setSelectedDish] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDishClick = (dish: any) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const dummyDish = {
    title: "Noodles",
    restaurant: "Khalids",
    price: "$12",
    rating: 4.2,
    description: "Delicious and freshly cooked noodles with special sauce.",
  };

  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="block md:hidden ">
        <MobileHeader />
      </div>
      <div className="md:block hidden">
        <DesktopHeader />
      </div>

      <div className="px-2">
        {/* Search bar */}
        <div className="mt-18 b">
          <SearchBox
            placeholder="Search Orderly"
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>

        {/* Category List */}
        <div className="py-3">
          <div className="flex overflow-x-auto scrollbar-custom p-2 gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <CategoryCard key={index} />
            ))}
          </div>
        </div>

        {/* Popular Items */}
        <div className="py-3">
          <div className="flex justify-between">
            <div className="">
              <h2 className="text-lg font-semibold text-gray-800">
                Popular Items
              </h2>
              <p className="text-sm text-gray-500">
                Our most loved and frequently ordered dishes
              </p>
            </div>

            <div className="">See All</div>
          </div>
          <div className="flex overflow-x-auto scrollbar-custom py-2 gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <DishCart
                key={index}
                onClick={() => handleDishClick(dummyDish)}
              />
            ))}
          </div>
        </div>

        {/* Today's Offers */}
        <div className="py-3">
          <div className="flex justify-between">
            <div className="">
              <h2 className="text-lg font-semibold text-gray-800">
                Today's Offers
              </h2>
              <p className="text-sm text-gray-500">
                Grab the best deals on your favorite dishes!
              </p>
            </div>

            <div className="">See All</div>
          </div>
          <div className="flex overflow-x-auto scrollbar-custom py-2 gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <DishCart key={index} />
            ))}
          </div>
        </div>

        {/* Store list */}
        <div className="py-3">
          <div className="flex justify-between">
            <div className="">
              <h2 className="text-lg font-semibold text-gray-800">
                All Stores
              </h2>
              <p className="text-sm text-gray-500">
                Browse all your favorite restaurants and shops nearby
              </p>
            </div>

            <div className="">See All</div>
          </div>
          <div className="py-2 gap-4 grid grid-cols-1">
            {Array.from({ length: 10 }).map((_, index) => (
              <ShopCart key={index} />
            ))}
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {selectedDish && <DishDetail {...selectedDish} />}
        </Modal>
      </div>
    </div>
  );
};

export default CustomerHome;
