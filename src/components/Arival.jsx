"use client";
import React, { useState } from "react";
import Section from "./global/Section";
import Container from "./global/Container";
import ArivalCard from "./ArivalCard";
import Button from "./global/Button";
const categories = [
  "Men's Fashion",
  "Women's Fashion",
  "Women Accessories",
  "Men Accessories",
  "Discount Deals",
];
const Arival = () => {
  const [active, setActive] = useState("Women's Fashion");
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
                    onClick={() => setActive(category)}
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
          <ArivalCard />
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
