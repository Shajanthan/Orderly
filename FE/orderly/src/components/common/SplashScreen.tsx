import { useEffect, useState } from "react";
import { SiCodechef } from "react-icons/si";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const messages = ["Getting things ready", "Loading your food journey"];

  const [currentMessage, setCurrentMessage] = useState(0);

  // Cycle through messages every 6 seconds
  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 1000);

    return () => clearInterval(messageTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-16 w-20 h-20 bg-white rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-white rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 right-32 w-16 h-16 bg-white rounded-full animate-pulse animation-delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* App Icon */}
        <div className="relative mb-8">
          <div className="slow-bounce">
            <div className="bg-white rounded-full p-6 shadow-2xl">
              <SiCodechef size={64} className="text-indigo-700" />
            </div>
          </div>
        </div>

        {/* App Name */}
        <h1 className="uppercase font-uncial text-5xl font-bold tracking-wide mb-2 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent drop-shadow-lg">
          Orderly
        </h1>

        {/* Welcome message */}
        <p className="text-white/90 mb-6 text-center">
          Welcome! Your next meal is just a tap away.
        </p>

        {/* Loader */}
        <div className="relative">
          <span className="loader"></span>
        </div>

        {/* Animated loading text */}
        <p className="mt-4 text-white/80 text-sm font-medium">
          {messages[currentMessage]}
        </p>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
    </div>
  );
}
