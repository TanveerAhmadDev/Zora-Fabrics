import { SearchIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ link }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex items-center justify-between md:px-10 relative h-12">
        <span className="hidden md:block font-semibold text-blue-500 hover:text-black cursor-pointer">
          info@zorafabrics.pk
        </span>
        <img
          src="/Full_White_Logo-removebg.png"
          alt="Zora logo"
          className="w-20 absolute right-[45%] md:right-1/2 top-1/6"
          onClick={() => {
            navigate(link);
          }}
        />
        <div className="hidden md:block">
          <div className="w-50 py-1 px-1.5 border border-[#5f5f5f2a] rounded-sm flex gap-5">
            <input
              type="text"
              name="Search"
              id="Search"
              className="appearance-none focus:outline-none focus:ring-0 w-full text-[#3b3b3bce] text-sm"
            />
            <label htmlFor="Search">
              <SearchIcon
                color="#3b3b3bce"
                size={18}
                className=" cursor-pointer"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
