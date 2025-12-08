import React from "react";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <div className="bg-[#ECECEC] mt-2 flex justify-center items-center md:px-10 md:pr-30 h-10 gap-3 md:gap-15">
      <Link
        to={"/Admin-Dashboard"}
        className="text-[13px] font-bold relative inline-block 
         after:content-[''] after:absolute after:left-0 after:bottom-0 
         after:h-px after:w-full after:bg-[#3b3b3bce] 
         after:scale-x-0 after:origin-left 
         after:transition-transform after:duration-300
         hover:after:scale-x-100 cursor-pointer"
      >
        HOME
      </Link>
      <Link
        to={"/Admin-Dashboard/Add-Product"}
        className="text-[13px] font-bold relative inline-block 
         after:content-[''] after:absolute after:left-0 after:bottom-0 
         after:h-px after:w-full after:bg-[#3b3b3bce] 
         after:scale-x-0 after:origin-left 
         after:transition-transform after:duration-300
         hover:after:scale-x-100 cursor-pointer"
      >
        ADD PRODUCT
      </Link>
      <Link
        to={"/Admin-Dashboard/Products"}
        className="text-[13px] font-bold relative inline-block 
         after:content-[''] after:absolute after:left-0 after:bottom-0 
         after:h-px after:w-full after:bg-[#3b3b3bce] 
         after:scale-x-0 after:origin-left 
         after:transition-transform after:duration-300
         hover:after:scale-x-100 cursor-pointer"
      >
        EDIT PRODUCTS
      </Link>
    </div>
  );
};

export default AdminNavBar;
