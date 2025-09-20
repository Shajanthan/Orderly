import React from "react";
import { FaFire } from "react-icons/fa";

export interface FiringLoaderProps {
  size?: "small" | "medium" | "large";
  speed?: "slow" | "normal" | "fast";
  className?: string;
  center?: boolean;
}

const FiringLoader: React.FC<FiringLoaderProps> = ({
  size = "medium",
  speed = "normal",
  className = "",
  center = false,
}) => {
  // Size classes
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-16 h-16",
    large: "w-24 h-24",
  };

  // Speed classes for different elements
  const speedClasses = {
    slow: {
      ping: "animate-ping-slow",
      pulse: "animate-pulse-slow",
      bounce: "animate-bounce-slow",
    },
    normal: {
      ping: "animate-ping",
      pulse: "animate-pulse",
      bounce: "animate-bounce",
    },
    fast: {
      ping: "animate-ping-fast",
      pulse: "animate-pulse-fast",
      bounce: "animate-bounce-fast",
    },
  };

  // Container classes
  const containerClasses = center
    ? `flex justify-center items-center ${className}`
    : `inline-block ${className}`;

  return (
    <div className={containerClasses}>
      <div className="relative">
        {/* Main fire icon with ping animation */}
        <div
          className={`${sizeClasses[size]} text-orange-500 ${speedClasses[speed].ping} absolute inset-0 opacity-75`}
        >
          <FaFire className="w-full h-full" />
        </div>

        {/* Secondary fire effect with pulse animation */}
        <div
          className={`${sizeClasses[size]} text-orange-600 ${speedClasses[speed].pulse} absolute inset-0`}
        >
          <FaFire className="w-full h-full" />
        </div>

        {/* Base fire icon - always visible */}
        <div className={`${sizeClasses[size]} text-red-600`}>
          <FaFire className="w-full h-full" />
        </div>

        {/* Flame particles */}
        <div className="absolute -top-2 -left-2 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-yellow-400 rounded-full ${speedClasses[speed].bounce}`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.1}s`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiringLoader;
