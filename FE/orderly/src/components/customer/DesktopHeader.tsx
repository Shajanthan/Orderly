import React from "react";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const DesktopHeader: React.FC = () => {
  const cartCount = 5;
  const loggedIn = false;
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 inset-x-0 bg-black text-white shadow-lg py-2 z-50">
      <div className="flex w-full max-w-7xl mx-auto justify-between items-center">
        <div className="font-uncial uppercase text-3xl">Orderly</div>

        <div className="flex items-center justify-between gap-5">
          <div className="relative">
            <BsCart3 size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          {loggedIn ? (
            <>
              <div className="">Profile </div>
            </>
          ) : (
            <>
              <div
                className="cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </div>
              <div
                className="cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Signup
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
