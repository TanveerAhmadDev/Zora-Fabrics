import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContactBar from "../components/ContactBar";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";
import axios from "axios";
import ZoomImage from "../components/ZoomImage";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "../components/Footer";
import { ServerContextApi } from "../context/ServerContext";

const Product = () => {
  const { ProductId } = useParams();
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState(null);
  const [minimize, setMinimize] = useState(true);
  const { serverURL } = useContext(ServerContextApi);

  const getProduct = async () => {
    try {
      const result = await axios.get(
        `${serverURL}/api/product/productdetail/${ProductId}`
      );

      const fetchedProduct = result?.data?.data?.Product;
      setProduct(fetchedProduct);

      setImage(fetchedProduct?.Images?.[0] || null);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const handleImageChange = (src) => {
    setImage(src);
  };

  useEffect(() => {
    getProduct();
  }, [ProductId]);

  if (!product) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  return (
    <>
      <ContactBar />
      <NavBar link={"/"} />
      <NavBar2 />
      <div className="px-10 flex flex-col md:flex-row gap-8 mt-10 overflow-x-hidden">
        <div className="flex flex-row md:flex-col justify-center gap-2">
          {product?.Images?.filter((img) => img !== "").map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-15 h-20 object-cover object-[-50%_20%] border rounded cursor-pointer ${
                img === image ? "border-black" : "border-gray-300"
              }`}
              onClick={() => handleImageChange(img)}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start w-full">
          {image && <ZoomImage src={image} />}
          <div className="flex flex-col gap-3 md:w-200 w-80">
            <h1 className="text-xl font-medium">{product.ProductName}</h1>
            <div className="flex gap-2 text-lg ">
              <div className="flex line-through text-[#969696] ">
                <p>Rs:</p>
                <p>{product.ProductPriceWithOutSale}</p>
              </div>
              <div className="flex text-[#E95144] font-bold gap-0.5">
                <p>Rs: </p>
                <p>{product.ProductPriceWithSale}</p>
              </div>
            </div>
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/923299968400?text=${product.ProductName}%20is%20avalible`,
                  "_blank"
                )
              }
              className="uppercase bg-[#232323] text-white py-3  md:w-full text-sm font-bold
                   hover:text-black hover:border hover:bg-white 
                    border border-[#232323]
                  transition-all duration-300 ease-in-out rounded-sm"
            >
              Place your order{" "}
            </button>
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-medium">Description</h1>
                <div onClick={() => setMinimize((prev) => !prev)}>
                  <div
                    className={`transition-opacity duration-300 ${
                      minimize ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className="cursor-pointer absolute"
                    />
                  </div>

                  <div
                    className={`transition-opacity duration-300 ${
                      minimize ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <ChevronUp size={18} className="cursor-pointer" />
                  </div>
                </div>
              </div>
              {minimize && (
                <div className="mt-4">
                  <p className="font-medium text-[13px] uppercase">
                    Product Details
                  </p>

                  <div className="mt-2">
                    <p className="font-medium text-[12px] uppercase">
                      Attribute
                    </p>
                    <div className="mt-1 ml-3 text-[12px]">
                      <p className="w-180">
                        {product?.ProductDetails?.Attribute}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
