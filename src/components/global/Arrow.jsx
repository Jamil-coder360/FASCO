import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Arrow = () => {
  return (
    <div className="flex items-center gap-4">
        <span className="bg-[#ffffff] rounded-full p-5 shadow-2xl">

        <FaChevronLeft />
        </span>
        <span className="bg-[#ffffff] rounded-full p-5 shadow-2xl">

        <FaChevronRight />
        </span>
    </div>
  )
}

export default Arrow