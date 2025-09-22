import React from "react";

// interface MobileHeaderProps {}

const MobileHeader: React.FC = () => {
  const loggedin = false;
  return (
    <div className="fixed top-0 bg-white w-full p-3 flex justify-between z-50 border-b-2 border-gray-200">
      <div className="text-lg uppercase font-semibold font-uncial ">
        Orderly
      </div>
      {loggedin ? (
        <>
          <div className="bg-black text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
            S
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center gap-2">
            <button>Login</button>
            <button className="bg-black text-white rounded-xl p-1 px-2">
              Signup
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileHeader;
