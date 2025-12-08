import React, { useContext, useEffect, useState } from "react";
import ContactBar from "../components/ContactBar";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import Card from "../components/Card";
import axios from "axios";
import CardForMens from "../components/CardForMens";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ServerContext, { ServerContextApi } from "../context/ServerContext";

const HomePage = () => {
  const sliderImages = [
    "/banner_1.webp",
    "/banner_2.webp",
    "/banner_3.webp",
    "/banner_4.webp",
  ];

  const [index, setIndex] = useState(0);

  const Images = [
    "/3pc-printed-stitched-kotail-linen-suit-kkt-3684-embroidered-khas-stores-869095_300x.webp",
    "/3pc-printed-stitched-kotail-linen-suit-kkt-3684-embroidered-khas-stores-594481_300x.webp",
  ];

  const [products, setProducts] = useState(null);
  const { serverURL } = useContext(ServerContextApi);

  async function getAllProducts() {
    try {
      const result = await axios.get(`${serverURL}/api/product/getallproducts`);
      console.log(result);
      setProducts(result?.data?.data?.Products);
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();

  function ProductPage(ProductId) {
    navigate(`/Product/${ProductId}`);
    console.log("asdasdas");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 7000);
    getAllProducts();
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ContactBar />
      <NavBar link={"/"} />
      <NavBar2 />
      <div>
        <div className="w-full">
          <div className="relative w-full h-30 md:h-[465px] overflow-hidden">
            {sliderImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className={`
            absolute inset-0 w-full h-full object-cover 
            transition-opacity duration-700
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
              />
            ))}
          </div>
          <div className="mt-3 h-10 flex justify-center items-center font-bold text-lg px-2">
            <div className="bg-[#6d6d6d89] h-[0.5px] w-full"></div>
            <span className="w-100 text-center text-xl">NEW ARRIVALS</span>
            <div className="bg-[#6d6d6d89] h-[0.5px] w-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:px-10 mt-10">
          {(products || [])
            .slice(-8)
            .reverse()
            .map((product, index) => (
              <Card
                key={product?.id || index}
                onClick={() => ProductPage(product._id)}
                Images={product?.Images || []}
                ProductName={product?.ProductName || "No Name"}
                ProductPriceWithOutSale={product.ProductPriceWithOutSale}
                ProductPriceWithSale={product.ProductPriceWithSale}
              />
            ))}
        </div>

        <div className="mt-3 h-10 flex justify-center items-center font-bold text-lg px-2">
          <div className="bg-[#6d6d6d89] h-[0.5px] w-full"></div>
          <span className="w-65 text-center text-xl">WOMENS</span>
          <div className="bg-[#6d6d6d89] h-[0.5px] w-full"></div>
        </div>
        <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:px-10 mt-10">
          {(products || [])
            .filter((product) =>
              product.Category.CategoryName?.includes("Women's")
            )
            .slice(-8)
            .reverse()
            .map((product, index) => (
              <Card
                key={product?.id || index}
                Images={product?.Images || []}
                onClick={() => ProductPage(product._id)}
                ProductName={product?.ProductName || "No Name"}
                ProductPriceWithOutSale={product.ProductPriceWithOutSale}
                ProductPriceWithSale={product.ProductPriceWithSale}
              />
            ))}
        </div>
        <div className="mt-3 h-10 flex justify-center items-center font-bold text-lg px-2">
          <div className="bg-[#6d6d6d89] h-[0.5px] w-full"></div>
          <span className="w-50 text-center text-xl">MENS</span>
          <div className="bg-[#6d6d6d89] h-[0.5px] w-full"></div>
        </div>
        <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:px-10 mt-10">
          {(products || [])
            .filter((product) =>
              product.Category.CategoryName?.includes("Men's")
            )
            .slice(-8)
            .reverse()
            .map((product, index) => (
              <CardForMens
                key={product?.id || index}
                onClick={() => ProductPage(product._id)}
                Images={product?.Images || []}
                ProductName={product?.ProductName || "No Name"}
                ProductPriceWithOutSale={product.ProductPriceWithOutSale}
                ProductPriceWithSale={product.ProductPriceWithSale}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
