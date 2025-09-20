import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import SplashScreen from "./components/common/SplashScreen";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
      {" "}
      <>
        {showSplash ? (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        ) : (
          <AppRoutes />
        )}
      </>
    </>
  );
};

export default App;
