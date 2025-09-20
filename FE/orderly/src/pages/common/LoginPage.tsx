import React from "react";
import bg from "../../assets/food_bg.jpg";
import Button from "../../components/common/Button";
import InputField from "../../components/common/InputField";
import { FiLock, FiMail } from "react-icons/fi";

const LoginPage: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {/* Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-4xl m-2">
        {/* Left side - Image */}
        <div className="md:w-1/2">
          <img src={bg} alt="food" className="h-full w-full object-cover" />
        </div>

        {/* Right side - Login form */}
        <div className="w-full md:w-1/2 p-5 md:p-10 flex flex-col justify-center">
          <h1 className="heading-text text-center pb-3">Welcome Back!</h1>
          <p className="subtitle-text text-center pb-6">
            Login to order your favorite meals quickly
          </p>

          {/* Form */}
          <form className="space-y-3 md:space-y-7">
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

            <Button type="submit" className="mt-2">
              Login
            </Button>
          </form>

          <p className="footer-text text-center mt-4">
            Don&apos;t have an account?{" "}
            <span className="text-black font-semibold cursor-pointer">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
