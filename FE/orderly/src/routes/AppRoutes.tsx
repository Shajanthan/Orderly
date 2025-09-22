import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/common/LoginPage";
import Signup from "../pages/common/SignupPage";
import CustomerHome from "../pages/customer/CustomerHome";
import DishDetail from "../features/DishDetails";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* Public */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />

      {/* Customer  */}
      <Route path="/" element={<CustomerHome />} />
      <Route path="/dish" element={<DishDetail />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
