import React, { createContext, useEffect, useState } from "react";

export const AuthContextApi = createContext();

const AuthContext = ({ children }) => {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAdmin = localStorage.getItem("adminData");
    if (savedAdmin) {
      setAdminData(JSON.parse(savedAdmin));
    }
    setLoading(false);
  }, []);

  const updateAdminData = (data) => {
    setAdminData(data);
    if (data) {
      localStorage.setItem("adminData", JSON.stringify(data));
    } else {
      localStorage.removeItem("adminData");
    }
  };

  const logout = () => {
    localStorage.removeItem("adminData");
    setAdminData(null);
  };

  return (
    <AuthContextApi.Provider
      value={{ adminData, setAdminData: updateAdminData, loading, logout }}
    >
      {children}
    </AuthContextApi.Provider>
  );
};

export default AuthContext;
