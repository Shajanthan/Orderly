import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {
  return (
    <div className="flex gap-2 relative w-full">
      {/* Search Icon */}
      <div className="absolute top-3 left-4 text-black">
        <FiSearch size={18} />
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border px-12 rounded-md bg-zinc-100 py-2 w-full focus:outline-none border-gray-300"
      />

      {/* Close Icon (only visible when value is not empty) */}
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
        >
          <MdClose size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBox;
