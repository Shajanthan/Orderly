import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/common/LoginPage";
import Signup from "../pages/common/SignupPage";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* Public */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
