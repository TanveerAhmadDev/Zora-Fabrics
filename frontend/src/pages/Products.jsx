import React, { useContext, useEffect, useState } from "react";
import AdminNavBar from "../components/AdminNavBar";
import NavBar from "../components/NavBar";
import ContactBar from "../components/ContactBar";
import axios from "axios";
import { ServerContextApi } from "../context/ServerContext";
import { X } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const { serverURL } = useContext(ServerContextApi);
  const [productDetailsBox, setProductDetailsBox] = useState(false);
  const [ProductName, setProductName] = useState(product?.ProductName || "");
  const [ProductPriceWithOutSale, setProductPriceWithOutSale] = useState(
    product?.ProductPriceWithOutSale || ""
  );
  const [ProductPriceWithSale, setProductPriceWithSale] = useState(
    product?.ProductPriceWithSale || ""
  );

  async function getAllProducts() {
    try {
      const result = await axios.get(`${serverURL}/api/product/getallproducts`);
      console.log(result);
      setProducts(result?.data?.data?.Products || []);
    } catch (error) {
      console.log(error);
    }
  }

  const getProduct = async (id) => {
    try {
      const result = await axios.get(
        `${serverURL}/api/product/productdetail/${id}`
      );

      const fetchedProduct = result?.data?.data?.Product;
      setProduct(fetchedProduct);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  async function EditProduct(id) {
    await getProduct(id);
    setProductDetailsBox(true);
  }
  useEffect(() => {
    if (product) {
      setProductName(product.ProductName);
      setProductPriceWithOutSale(product.ProductPriceWithOutSale);
      setProductPriceWithSale(product.ProductPriceWithSale);
    }
  }, [product]);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <ContactBar />
      <NavBar link={"/Admin-Dashboard"} />
      <AdminNavBar />

      {productDetailsBox && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative bg-white p-6 rounded shadow-lg z-10 w-[80%] h-1/2 flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col justify-start w-1/2 gap-1">
              <label htmlFor="ProductName">Product Name:</label>
              <input
                id="ProductName"
                type="text"
                value={ProductName}
                onChange={(e) => setProductName(e.target.value)}
                className="border focus:outline-none w-full px-2 py-1 rounded-[5px]"
              />
            </div>
            <div className="flex flex-col justify-start w-1/2 gap-1">
              <label htmlFor="ProductPriceWithOutSale">
                Price Without Sale
              </label>
              <input
                id="ProductPriceWithOutSale"
                type="number"
                value={ProductPriceWithOutSale}
                onChange={(e) => setProductPriceWithOutSale(e.target.value)}
                className="border focus:outline-none w-full px-2 py-1 rounded-[5px]"
              />
            </div>
            <div className="flex flex-col justify-start w-1/2 gap-1">
              <label htmlFor="ProductPriceWithOutSale">
                Price Without Sale
              </label>
              <input
                id="ProductPriceWithOutSale"
                type="number"
                value={ProductPriceWithSale}
                onChange={(e) => setProductPriceWithSale(e.target.value)}
                className="border focus:outline-none w-full px-2 py-1 rounded-[5px]"
              />
            </div>
            <X
              onClick={() => setProductDetailsBox(false)}
              className=" absolute top-2 right-2 cursor-pointer"
              size={18}
            />
          </div>
        </div>
      )}
      <div
        className={`border ml-2 mr-2 md:ml-10 md:mr-10 p-4 grid grid-cols-4 mt-10 ${
          showMore ? "h-auto" : "h-53 overflow-clip"
        }`}
      >
        <div>
          <p className="max-w-full truncate">Product Name</p>
          {products.map((product, index) => (
            <p key={index}>{product?.ProductName}</p>
          ))}
        </div>
        <div>
          <p className="max-w-full truncate">Product Price Without Sale</p>
          {products.map((product, index) => (
            <p key={index}>{product?.ProductPriceWithOutSale}</p>
          ))}
        </div>

        <div>
          <p className="max-w-full truncate">Product Price With Sale</p>
          {products.map((product, index) => (
            <p key={index}>{product?.ProductPriceWithSale}</p>
          ))}
        </div>

        <div>
          <p className="max-w-full truncate">Edit Product</p>
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => EditProduct(product._id)}
              className="block underline cursor-pointer text-blue-500 max-w-full truncate"
            >
              Edit Product
            </button>
          ))}
        </div>
      </div>

      <div className="md:ml-10 md:mr-10 p-2 ">
        <p
          className="cursor-pointer"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Show Less..." : "Show More..."}
        </p>
      </div>
    </>
  );
};

export default Products;
