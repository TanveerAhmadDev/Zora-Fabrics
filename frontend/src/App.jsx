import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import { AuthContextApi } from "./context/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import Login from "./pages/Login";

const App = () => {
  const { adminData } = useContext(AuthContextApi);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/collections/:collectionName" element={<Collection />} />
      <Route path="/Product/:ProductId" element={<Product />} />
      <Route
        path="/Admin-Dashboard"
        element={
          <ProtectedRoute condition={adminData}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/Admin-Dashboard/Add-Product"
        element={
          <ProtectedRoute condition={adminData}>
            <AddProduct />
          </ProtectedRoute>
        }
      />
      <Route path="/Admin-Dashboard/Products" element={<Products />} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
};

export default App;
