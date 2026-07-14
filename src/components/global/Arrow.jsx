import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Arrow = ({swiperRef}) => {
  return (
    <div className="flex items-center gap-4">
        <button
        onClick={() => swiperRef.current.slidePrev()}
        className="bg-[#ffffff] rounded-full p-5 shadow-2xl">

        <FaChevronLeft />
        </button>
        <button
        onClick={() => swiperRef.current.slideNext()}
         className="bg-[#ffffff] rounded-full p-5 shadow-2xl">

        <FaChevronRight />
        </button>
    </div>
  )
}

export default Arrow