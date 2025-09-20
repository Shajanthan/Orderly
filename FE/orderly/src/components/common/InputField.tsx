import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  icon,
  type = "text",
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block mb-2 font-medium text-gray-700">{label}</label>
      )}
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3 top-3 text-gray-500">{icon}</div>
        )}

        <input
          {...props}
          type={inputType}
          className="w-full border p-2 px-10 border-zinc-300 rounded-md focus:outline-none text-black"
          placeholder={placeholder}
        />

        {isPassword && (
          <div
            className="absolute right-4 top-3 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        )}
      </div>

      {error && <div className="text-red-500 mt-1 text-sm">{error}</div>}
    </div>
  );
};

export default InputField;
