import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#FAFAFA] w-full py-20 px-15 flex flex-col  md:flex-row gap-10 md:gap-50">
      <div className="flex flex-col gap-3">
        <img src="/Full_White_Logo-removebg.png" alt="Logo" className="w-20" />
        <p>-------------------</p>
        <div className="flex items-center gap-1 relative">
          <MapPin size={10} className=" absolute top-1/3" />
          <p className="ml-3.5">info@zorafabrics.pk</p>
        </div>
        <div className="flex items-center gap-1 relative">
          <Phone size={10} className=" absolute top-1/3" />
          <p className="ml-3.5 ">Pakistan (+92) xxx xxx xxxx</p>
        </div>
        <div className="flex items-center gap-1 relative">
          <Phone size={10} className=" absolute top-1/3" />
          <p className="ml-3.5">info@zorafabrics.pk</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-md uppercase">Information</h1>
        <p className="text-sm text-[#545454]">Privacy Policy</p>
        <p className="text-sm text-[#545454]">Shipping Policy</p>
        <p className="text-sm text-[#545454]">Exchange & Return Policy</p>
        <p className="text-sm text-[#545454]">Payment & Delivery</p>
        <p className="text-sm text-[#545454]">Help & FAQs</p>
        <p className="text-sm text-[#545454]">How to Order</p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-md uppercase">Quick Links</h1>
        <p className="text-sm text-[#545454]">Quick Links</p>
        <p className="text-sm text-[#545454]">Size Guide</p>
        <p className="text-sm text-[#545454]">Customer Reviews</p>
        <p className="text-sm text-[#545454]">Fabric Glossary</p>
        <p className="text-sm text-[#545454]">e-Catalog</p>
        <p className="text-sm text-[#545454]">Latest Ads</p>
        <p className="text-sm text-[#545454]">Blogs</p>
      </div>
    </div>
  );
};

export default Footer;
