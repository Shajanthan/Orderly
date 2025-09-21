import React from "react";

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({
  title,
  description,
  icon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="w-full group cursor-pointer bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-zinc-200 rounded-full flex items-center justify-center group-hover:bg-black transition-colors duration-300">
        {icon}
      </div>
      <h2 className=" font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default RoleCard;
