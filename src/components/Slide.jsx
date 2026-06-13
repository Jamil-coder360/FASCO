"use client"
import React, { useState } from "react";
import slider from "@/app/assets/slider.png";
import Section from './global/Section';
import Container from './global/Container';
import Button from "./global/Button";

const bg={
    backgroundImage: `url(${slider.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // height: '100vh',
    // height: '400px',
    // width: '100%',

}
const SIZES = ["XS", "S", "M", "L", "XL"];

const Slide = () => {
      const [selectedSize, setSelectedSize] = useState("M");
  return (
<Section style={bg}>
    <Container>
        <div className="h-full flex items-start justify-end">

        <div className=" px-6 py-15 flex flex-col items-start justify-end max-w-[515px]">
      {/* Collection label */}
      <p className="text-sm  mb-4">Women Collection</p>

      {/* Product title */}
      <h1 className="text-6xl font-serif font-semibold text-gray-700 mb-8 leading-tight">
        Peaky Blinders
      </h1>

      {/* Description heading */}
      <h2 className="text-sm font-bold uppercase tracking-wide text-gray-800 underline underline-offset-4 mb-4">
        Description
      </h2>

      {/* Description text */}
      <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque du
        is ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Scelerisque duis.
      </p>

      {/* Size selector */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-base text-gray-600">Size:</span>
        <div className="flex gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                selectedSize === size
                  ? "bg-gray-900 text-white"
                  : "bg-transparent text-gray-500 hover:bg-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <p className="text-4xl font-semibold text-gray-800 mb-8">$100.00</p>

      {/* Buy Now button */}
      {/* <button className="w-72 py-5 bg-gray-900 text-white text-lg rounded-xl hover:bg-gray-700 transition-colors duration-200">
        Buy Now
      </button> */}
      <Button>
           Buy Now
      </Button>
    </div>
        </div>
    </Container>
</Section>
)
}

export default Slide