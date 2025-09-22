import React, { useState } from "react";
import { MOBILE_TABS } from "../../utils/constants";
import { BsCart3 } from "react-icons/bs";

const MobileNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const cartCount = 3;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-black shadow-md flex items-center justify-around h-12 z-50">
      {MOBILE_TABS.map((tab, index) => {
        return (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`flex flex-col items-center justify-center flex-1 text-xs transition-colors duration-200 ${
              activeTab === index ? "text-white" : "text-gray-400"
            }`}
          >
            {tab.label === "Cart" ? (
              <div className="relative">
                <BsCart3 size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            ) : (
              <tab.icon size={20} />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default MobileNavigation;
