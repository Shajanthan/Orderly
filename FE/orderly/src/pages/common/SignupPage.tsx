import React, { useState } from "react";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { BsArrowLeft } from "react-icons/bs";
import RoleCard from "../../components/common/RoleCard";
import InputField from "../../components/common/InputField";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import Button from "../../components/common/Button";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/food_bg2.jpg";
import { CiShop } from "react-icons/ci";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"customer" | "shop" | null>();
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     shopName: "",
  //   });

  //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     console.log("Form submitted:", { role, ...formData });
  //   };

  return (
    <div className="min-h-screen flex items-center justify-center p-2 bg-gray-100">
      <div className="w-full">
        {!role ? (
          // Role selection
          <div className="w-full max-w-md mx-auto text-center space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="heading-text font-bold text-gray-900 tracking-tight font-uncial uppercase">
                Join Orderly
              </h1>
              <p className="text-gray-600 subtitle-text">
                Choose how you'd like to get started
              </p>
            </div>

            {/* Role Selection Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <RoleCard
                title="Customer"
                description="Browse and shop from local stores"
                icon={
                  <BiUser className="w-8 h-8 group-hover:text-white transition-all" />
                }
                onClick={() => setRole("customer")}
              />
              <RoleCard
                title="Shop Owner"
                description="Sell your products online"
                icon={
                  <HiOutlineBuildingStorefront className="w-8 h-8 group-hover:text-white transition-all" />
                }
                onClick={() => setRole("shop")}
              />
              <div className="md:col-span-2">
                {/* Back Button */}
                <button
                  onClick={() => navigate("/login")}
                  className="w-full mt-6 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 group"
                >
                  <BsArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200 " />
                  Back to Login
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            {/* Card */}
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-4xl">
              {/* Left side - Image */}
              {/* Mobile version */}
              <div className="md:hidden w-full flex justify-center p-2">
                <img
                  src={bg}
                  alt="food"
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
              </div>

              {/* Desktop version */}
              <div className="hidden md:block md:w-1/2">
                <img
                  src={bg}
                  alt="food"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right side - Login form */}
              <div className="w-full md:w-1/2 p-5 md:p-10 flex flex-col justify-center">
                {role == "customer" ? (
                  <>
                    <h1 className="heading-text text-center pb-3">
                      Join the Feast!
                    </h1>
                    <p className="subtitle-text text-center pb-6">
                      Create your account and start discovering delicious meals
                      today
                    </p>
                  </>
                ) : (
                  <>
                    <h1 className="heading-text text-center pb-3">
                      Let’s Get Started
                    </h1>
                    <p className="subtitle-text text-center pb-6">
                      Sign up now and unlock a world of tasty opportunities
                    </p>
                  </>
                )}

                {/* Form */}
                <form className="space-y-3 md:space-y-7">
                  {role == "customer" ? (
                    <>
                      <InputField
                        name="username"
                        type="text"
                        label="Username"
                        placeholder="Enter your username"
                        icon={<FiUser className="w-5 h-5" />}
                        required
                      />
                    </>
                  ) : (
                    <>
                      <InputField
                        name="shop-name"
                        type="text"
                        label="Shop Name"
                        placeholder="Enter your shop name"
                        icon={<CiShop className="w-5 h-5" />}
                        required
                      />
                    </>
                  )}
                  <InputField
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    icon={<FiMail className="w-5 h-5" />}
                    required
                  />

                  <InputField
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    icon={<FiLock className="w-5 h-5" />}
                    required
                  />

                  <InputField
                    name="confirm-password"
                    type="password"
                    label="Confirm Password"
                    placeholder="Re-enter your password"
                    icon={<FiLock className="w-5 h-5" />}
                    required
                  />

                  <Button type="submit" className="mt-2">
                    Signup
                  </Button>
                </form>

                <p className="footer-text text-center mt-4">
                  Already have an account?{" "}
                  <span
                    className="text-black font-semibold cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </p>
                {/* Back Button */}
                <button
                  onClick={() => setRole(null)}
                  className="w-full mt-6 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 group"
                >
                  <BsArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                  Back to role selection
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
