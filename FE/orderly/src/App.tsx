import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import SplashScreen from "./features/common/SplashScreen";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
      {" "}
      <>
        {/* <AppRoutes /> */}
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
