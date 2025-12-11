import axios from "axios";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useContext, useState } from "react";
import { ServerContextApi } from "../context/ServerContext";
import { useNavigate } from "react-router-dom";
import { AuthContextApi } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const { serverURL } = useContext(ServerContextApi);
  const { setAdminData } = useContext(AuthContextApi);
  const navigate = useNavigate();

  const Login = async () => {
    try {
      const result = await axios.post(
        `${serverURL}/api/auth/adminlogin`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(result);
      setEmail("");
      setPassword("");
      setAdminData(result?.data?.data);
      setMessage(result?.data?.message);
      navigate("/Admin-Dashboard");
    } catch (error) {
      console.log(error);
      setMessage(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="bg-[#191919] flex items-center justify-center h-screen">
        <div className="bg-white w-[80%] h-fit md:w-2/5 rounded-2xl p-2 py-6 flex flex-col items-center gap-10">
          <div className="flex flex-col items-center">
            <img
              src="/Full_White_Logo-removebg.png"
              alt="Zora Logo"
              className="w-20"
            />
            <h1 className="font-medium text-3xl ">Admin Login</h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="border-b focus:outline-none px-2 py-1 "
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">Password</label>
              <div className="flex border-b">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className=" focus:outline-none px-2 py-1 "
                />
                {showPassword ? (
                  <EyeOffIcon onClick={() => setShowPassword(false)} />
                ) : (
                  <EyeIcon onClick={() => setShowPassword(true)} />
                )}
              </div>
            </div>
            {message && <p className="text-center">{message}</p>}
            <button
              onClick={() => Login()}
              className="uppercase bg-[#232323] text-white py-3  md:w-full text-sm font-bold
                    border border-[#232323] 
                  transition-all duration-300 ease-in-out rounded-sm"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
