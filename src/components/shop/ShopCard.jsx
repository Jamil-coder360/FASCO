"use client"
import Image from 'next/image';
import React , {useState} from 'react'
import shop_1 from "@/app/assets/shop_1.png"
const ShopCard = () => {
      const [selectedColor, setSelectedColor] = useState("yellow");

  const colors = [
    { name: "yellow", class: "bg-yellow-400" },
    { name: "black", class: "bg-black" },
  ];
  return (
    <div className= "flex flex-col p-3 w-[326px]">
    <div className="w-[302px] h-[402px] bg-[#F5F5F5] rounded-lg flex items-center justify-center">
        <Image src={shop_1} alt="Shop Item" width={302} height={402} />
    </div>
    <h3 className ="text-[16px] font-normal font-volkhov leading-[1.5] pt-4.75">Rounded Red Hat</h3>
    <p className ="text-[16px] font-normal font-jost leading-[1.5] pt-1">$8.00</p>
    <div className="flex gap-2.5 pt-4.5">
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => setSelectedColor(color.name)}
          className={`w-4.5 h-4.5 rounded-full flex items-center justify-center border-1 transition
            ${
              selectedColor === color.name
                ? "border-black"
                : "border-transparent"
            }`}
        >
          <div
            className={`w-3.5 h-3.5 rounded-full ${color.class}`}
          ></div>
        </button>
      ))}
    </div>

    </div>
  )
}

export default ShopCard