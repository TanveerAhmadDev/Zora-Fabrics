import React, { useContext, useRef } from "react";
import ContactBar from "../components/ContactBar";
import NavBar from "../components/NavBar";
import { LogOut, Pencil, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "../components/AdminNavBar";
import { AuthContextApi } from "../context/AuthContext";

const AdminDashboard = () => {
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContextApi);

  const addHandler = () => {
    navigate("/Admin-Dashboard/Add-Product");
  };
  const editHandler = () => {
    navigate("/Admin-Dashboard/Products");
  };
  return (
    <>
      <ContactBar />
      <NavBar />
      <AdminNavBar />
      <div className="md:px-10 mt-10 flex flex-col md:flex-row gap-3 justify-center items-center">
        <div
          ref={buttonRef}
          onClick={addHandler}
          className="flex flex-col items-center px-5 py-5 border rounded-2xl hover:shadow-2xl cursor-pointer"
        >
          <Plus size={52} />
          <p className=" cursor-pointer">Add Product</p>
        </div>
        <div
          ref={buttonRef}
          onClick={editHandler}
          className="flex flex-col items-center px-5 py-5 border rounded-2xl hover:shadow-2xl cursor-pointer"
        >
          <Pencil size={52} />
          <p className=" cursor-pointer">Edit Products</p>
        </div>
        <div
          ref={buttonRef}
          onClick={logout}
          className="flex flex-col items-center px-5 py-5 border rounded-2xl hover:shadow-2xl cursor-pointer"
        >
          <LogOut size={52} />
          <p className=" cursor-pointer">Logout</p>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
