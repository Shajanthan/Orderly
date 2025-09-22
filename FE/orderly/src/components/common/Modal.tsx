import { X } from "lucide-react";
import React, { useEffect, type ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white shadow-xl max-w-xl w-full relative rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed X button */}
        <button
          onClick={onClose}
          className="z-50 absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
        >
          <X size={20} className="text-gray-700 hover:text-black" />
        </button>

        {/* Scrollable content */}
        <div
          className="overflow-auto rounded-lg sm:max-h-[80vh] scrollbar-custom"
          style={{ maxHeight: "100vh" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
