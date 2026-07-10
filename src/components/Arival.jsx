"use client";

import { useEffect, useState } from "react";

import Section from "./global/Section";
import Container from "./global/Container";
import ArivalCard from "./ArivalCard";
import Button from "./global/Button";
const categories = [
  "Men's Fashion",
  "Women Fashion",
  "Women Accessories",
  "Men Accessories",
  "Discount Deals",
];

const Arival = () => {
  const [active, setActive] = useState("Women Fashion");

  const [product, setProduct] = useState([]); // ✅ MUST be array
  // const [category ,setCategory] = useState("http://localhost:4000/arival");

// for all data fetching
  useEffect(()=>{
    fetch("http://localhost:4000/arival")
        .then((res) => res.json())
      .then((data) => setProduct(data));
    

  },[]);
console.log(product);
// categorywise data fetching
// useEffect(() => {
//   fetch(`http://localhost:4000/arival?category=${active}`)
//     .then((res) => res.json())
//     .then((data) => {
//       setProduct(data);
//     })
// }, [active]); // 🔥 IMPORTANT


  const handleCategory = (category) => {
    setActive(category);
    // category(category);
  };
  

  return (
    <Section>
      <Container>
        <div>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-[46px] font-normal text-heading">
              New Arrivals
            </h2>

            <p className=" mt-5 text-[16px] leading-[26px] text-paragraph max-w-[614px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin
            </p>
          </div>
          <div className="">

          <div className="flex items-center justify-center  bg-white py-12.5">
            <div className="flex items-center gap-7.5 flex-wrap justify-center">
              {categories.map((category) => {
                const isActive = active === category;
                return (
                  <button
                    key={category}
                    onClick={() => handleCategory(category)}
                    className={`
                px-12 py-5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap
                ${
                  isActive
                    ? "bg-black text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-gray-900"
                }
              `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-15.25">
     {product.map((item) => (
  <ArivalCard key={item._id} product={item} />
))}
            </div> 
    
          <div className="flex items-center justify-center pt-12.5">

          <Button >
            View More
          </Button>
          </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Arival;
