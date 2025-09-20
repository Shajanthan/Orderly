import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/common/LoginPage";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* Public */}
      <Route path="/" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
