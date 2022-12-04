import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/Home";
import ShopPage from "../pages/Shop";
import CartPage from "../pages/Cart";
import CheckoutPage from "../pages/Checkout";
import ProductDetailPage from "../pages/ProductDetail";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import NotFoundPage from "../pages/NotFoundPage";

import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="shop/:id" element={<ProductDetailPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route
        path="checkout"
        element={
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routers;
