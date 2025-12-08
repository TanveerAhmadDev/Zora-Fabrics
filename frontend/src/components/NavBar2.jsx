import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ServerContextApi } from "../context/ServerContext";

const NavBar2 = () => {
  const [categorys, setCategorys] = useState([]);
  const { serverURL } = useContext(ServerContextApi);

  async function getCategorys() {
    try {
      const result = await axios.get(`${serverURL}/api/category/categorys`);
      setCategorys(result?.data?.data?.Categorys);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategorys();
  }, []);
  return (
    <div className="bg-[#ECECEC] mt-2 flex justify-center items-center md:px-10 md:pr-30 h-10 gap-3 md:gap-15">
      {[...categorys].reverse().map((category, index) => {
        return (
          <Link
            to={`/collections/${category.CategoryName}`}
            className="text-[13px] font-bold relative inline-block 
         after:content-[''] after:absolute after:left-0 after:bottom-0 
         after:h-px after:w-full after:bg-[#3b3b3bce] 
         after:scale-x-0 after:origin-left 
         after:transition-transform after:duration-300
         hover:after:scale-x-100 cursor-pointer"
          >
            {category.CategoryName}
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar2;
