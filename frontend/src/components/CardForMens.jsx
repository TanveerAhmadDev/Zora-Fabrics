import React, { useState } from "react";

const CardForMens = ({
  Images,
  ProductName,
  ProductPriceWithOutSale,
  ProductPriceWithSale,
  onClick,
}) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="mb-8">
        {/* */}
        <div className="relative w-[300px] h-[450px]">
          <img
            src={Images[0]}
            alt=""
            onClick={onClick}
            onMouseEnter={() => Images[1] && setIndex(1)}
            onMouseLeave={() => setIndex(0)}
            className={`
    absolute inset-0 w-full h-full object-cover
    transition-all duration-700 ease-in-out
     ${index === 0 ? "opacity-100 scale-100" : "opacity-0 scale-105"}
      `}
          />

          {Images[1] && (
            <img
              src={Images[1]}
              alt=""
              onClick={onClick}
              onMouseEnter={() => setIndex(1)}
              onMouseLeave={() => setIndex(0)}
              className={`
    absolute inset-0 w-full h-full object-cover
    transition-all duration-700 ease-in-out
     ${index === 1 ? "opacity-100 scale-100" : "opacity-0 scale-105"}
      `}
            />
          )}
        </div>
        <p className="text-[12.2px] font-semibold text-center w-[300px]">
          {ProductName}
        </p>
        <div className="flex gap-2 justify-center">
          <div className="flex gap-1">
            <p className="text-[12.2px] font-semibold text-center ">Rs:</p>
            <p className="text-[12.2px] font-semibold text-center line-through">
              {ProductPriceWithOutSale}
            </p>
          </div>
          <div className="flex gap-1">
            <p className="text-[12.2px] font-bold text-center text-red-500">
              Rs:
            </p>
            <p className="text-[12.2px] font-bold text-center text-red-500">
              {ProductPriceWithSale}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardForMens;
