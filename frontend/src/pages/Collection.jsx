import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import ContactBar from "../components/ContactBar";
import NavBar2 from "../components/NavBar2";
import axios from "axios";
import Card from "../components/Card";
import CardForMens from "../components/CardForMens";
import Footer from "../components/Footer";
import { ServerContextApi } from "../context/ServerContext";
import { useContext } from "react";

const Collection = () => {
  const { collectionName } = useParams();
  const [products, setProducts] = useState(null);
  const { serverURL } = useContext(ServerContextApi);

  async function getproductsbycategory() {
    try {
      if (collectionName === "New Arrivals") {
        const result = await axios.get(
          `${serverURL}/api/product/getallproducts`
        );
        console.log(result);

        setProducts(result?.data?.data?.Products);
      } else {
        const result = await axios.get(
          `${serverURL}/api/product/getproductsbycategory?CategoryName=${collectionName}`
        );
        console.log(result);

        setProducts(result?.data?.data?.Products);
      }
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
    getproductsbycategory();
  }, [collectionName]);

  return (
    <>
      <ContactBar />
      <NavBar link={"/"} />
      <NavBar2 />
      <div className="mt-3 h-10 flex justify-center items-center font-bold text-lg px-2">
        <div className="bg-[#6d6d6d89] h-[0.5px] w-[90%]"></div>
        <span className="w-100 text-center text-xl">{collectionName}</span>
        <div className="bg-[#6d6d6d89] h-[0.5px] w-full"></div>
      </div>

      {collectionName === "New Arrivals" && (
        <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:px-10 mt-10">
          {(products || []).reverse().map((product, index) => (
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
      )}
      {collectionName === "Women's" && (
        <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:px-10 mt-10">
          {(products || []).reverse().map((product, index) => (
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
      )}
      {collectionName === "Men's" && (
        <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:px-10 mt-10">
          {(products || []).reverse().map((product, index) => (
            <CardForMens
              key={product?.id || index}
              Images={product?.Images || []}
              onClick={() => ProductPage(product._id)}
              ProductName={product?.ProductName || "No Name"}
              ProductPriceWithOutSale={product.ProductPriceWithOutSale}
              ProductPriceWithSale={product.ProductPriceWithSale}
            />
          ))}
        </div>
      )}
      {collectionName === "Home" && (
        <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:px-10 mt-10">
          {(products || []).reverse().map((product, index) => (
            <CardForMens
              key={product?.id || index}
              Images={product?.Images || []}
              onClick={() => ProductPage(product._id)}
              ProductName={product?.ProductName || "No Name"}
              ProductPriceWithOutSale={product.ProductPriceWithOutSale}
              ProductPriceWithSale={product.ProductPriceWithSale}
            />
          ))}
        </div>
      )}

      <Footer />
    </>
  );
};

export default Collection;
