import React, { useEffect, useRef, useState } from "react";
import AdminNavBar from "../components/AdminNavBar";
import ContactBar from "../components/ContactBar";
import NavBar from "../components/NavBar";
import axios from "axios";

const AddProduct = () => {
  const [categorys, setCategorys] = useState([]);
  const [message, setMessage] = useState();
  const [ProductName, setProductName] = useState();
  const [Category, setCategory] = useState();
  const [ProductPriceWithOutSale, setProductPriceWithOutSale] = useState();
  const [ProductPriceWithSale, setProductPriceWithSale] = useState();
  const [Attribute, setAttribute] = useState();
  const [front_image, setFront_image] = useState();
  const [side_image, setSide_image] = useState();
  const [backside_image, setBackside_image] = useState();
  const [design_close_up, setDesign_close_up] = useState();
  const [working_close_up, setWorking_close_up] = useState();
  const [uploading, setUploading] = useState(false);
  const frontRef = useRef();
  const sideRef = useRef();
  const backsideRef = useRef();
  const designRef = useRef();
  const workingRef = useRef();
  const { serverURL } = useContext(ServerContextApi);

  async function getCategorys() {
    try {
      const result = await axios.get(`${serverURL}/api/category/categorys`);
      console.log(result);
      setCategorys(result?.data?.data?.Categorys);
    } catch (error) {
      console.log(error);
    }
  }

  async function AddProduct() {
    try {
      setUploading(true);
      const form = new FormData();
      form.append("ProductName", ProductName);
      form.append("Category", Category);
      form.append("ProductPriceWithOutSale", ProductPriceWithOutSale);
      form.append("ProductPriceWithSale", ProductPriceWithSale);
      form.append("Attribute", Attribute);

      if (front_image) form.append("front_image", front_image);
      if (side_image) form.append("side_image", side_image);
      if (backside_image) form.append("backside_image", backside_image);
      if (design_close_up) form.append("design_close_up", design_close_up);
      if (working_close_up) form.append("working_close_up", working_close_up);

      const result = await axios.post(
        `${serverURL}/api/product/create-product`,
        form,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(result);

      setMessage("Product Added Successfully!");
      setUploading(false);
      setProductName("");
      setCategory("");
      setProductPriceWithOutSale("");
      setProductPriceWithSale("");
      setAttribute("");
      setFront_image(null);
      setSide_image(null);
      setBackside_image(null);
      setDesign_close_up(null);
      setWorking_close_up(null);

      frontRef.current.value = "";
      sideRef.current.value = "";
      backsideRef.current.value = "";
      designRef.current.value = "";
      workingRef.current.value = "";
    } catch (error) {
      console.log(error);
      setMessage("Failed to add product");
    }
  }

  useEffect(() => {
    getCategorys();
  }, []);
  return (
    <>
      <ContactBar />
      <NavBar link={"/Admin-Dashboard"} />
      <AdminNavBar />

      <div className="flex w-full justify-center">
        <div className="w-fit px-2 mt-10 flex flex-col items-center justify-center border gap-5 py-7">
          <h1 className="uppercase text-2xl font-bold">Add Product</h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-2 w">
              <label className="w-[140px] md:w-[163.65px]" htmlFor="">
                Product Name:
              </label>
              <input
                value={ProductName}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                className=" border-b focus:border-b focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-start gap-2 w">
              <label className="w-[140px] md:w-[163.65px]" htmlFor="">
                Category:
              </label>
              <select
                className="w-[140px] md:w-[163.65px] border-b focus:border-b focus:outline-none"
                value={Category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {categorys.map((cat, index) => (
                  <option key={index} value={cat.CategoryName}>
                    {cat.CategoryName}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 w">
              <label className="w-[140px] md:w-[163.65px]" htmlFor="">
                Price Without Sale:
              </label>
              <input
                value={ProductPriceWithOutSale}
                onChange={(e) => setProductPriceWithOutSale(e.target.value)}
                type="Number"
                className="border-b focus:border-b focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-[140px] md:w-[163.65px]" htmlFor="">
                Price With Sale:
              </label>
              <input
                type="Number"
                value={ProductPriceWithSale}
                onChange={(e) => setProductPriceWithSale(e.target.value)}
                className="border-b focus:border-b focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <label
                className="w-[140px] md:w-[163.65px]"
                htmlFor="front_image"
              >
                Front Image:
              </label>
              <input
                id="front_image"
                type="file"
                ref={frontRef}
                onChange={(e) => setFront_image(e.target.files[0])}
                className="border-b focus:border-b focus:outline-none w-50"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="w-[140px] md:w-[163.65px]" htmlFor="side_image">
                Side Image:
              </label>
              <input
                id="side_image"
                type="file"
                ref={sideRef}
                onChange={(e) => setSide_image(e.target.files[0])}
                className="border-b focus:border-b focus:outline-none w-50"
              />
            </div>
            <div className="flex items-center gap-2">
              <label
                className="w-[140px] md:w-[163.65px]"
                htmlFor="backside_image"
              >
                Backside Image:
              </label>
              <input
                id="backside_image"
                type="file"
                ref={backsideRef}
                onChange={(e) => setBackside_image(e.target.files[0])}
                className="border-b focus:border-b focus:outline-none w-50"
              />
            </div>
            <div className="flex items-center gap-2">
              <label
                className="w-[140px] md:w-[163.65px]"
                htmlFor="design_close_up"
              >
                Design CloseUp Image:
              </label>
              <input
                id="design_close_up"
                type="file"
                ref={designRef}
                onChange={(e) => setDesign_close_up(e.target.files[0])}
                className="border-b focus:border-b focus:outline-none w-50"
              />
            </div>
            <div className="flex items-center gap-2">
              <label
                className="w-[140px] md:w-[163.65px]"
                htmlFor="working_close_up"
              >
                Working CloseUp Image:
              </label>
              <input
                id="working_close_up"
                type="file"
                ref={workingRef}
                onChange={(e) => setWorking_close_up(e.target.files[0])}
                className="border-b focus:border-b focus:outline-none w-50"
              />
            </div>
            {uploading && <p className="text-center">File is Uploading</p>}
            {message && <p className="text-center">{message}</p>}
            <button
              onClick={() => AddProduct()}
              className="uppercase bg-[#232323] text-white py-3 w-87  md:w-full text-sm font-bold
                   hover:text-black hover:border hover:bg-white 
                    border border-[#232323]
                  transition-all duration-300 ease-in-out rounded-sm"
            >
              Add Product{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
