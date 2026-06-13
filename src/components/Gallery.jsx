"use client";

import React from "react";
import Section from "./global/Section";
// import Container from "./global/Container";
import Image from "next/image";
// import swiper slider

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
// import images

import g_1 from "@/app/assets/g_1.png";
import g_2 from "@/app/assets/g_2.png";
import g_3 from "@/app/assets/g_3.png";
import g_4 from "@/app/assets/g_4.png";
import g_5 from "@/app/assets/g_5.png";
import g_6 from "@/app/assets/g_6.png";
import g_7 from "@/app/assets/g_7.png";

// image data
const images = [
  { id: 1, src: g_1, height: "h-[308px]" },
  { id: 2, src: g_2, height: "h-[380px]" },
  { id: 3, src: g_3, height: "h-[308px]" },
  { id: 4, src: g_4, height: "h-[380px]" },
  { id: 5, src: g_5, height: "h-[308px]" },
  { id: 6, src: g_6, height: "h-[380px]" },
  { id: 7, src: g_7, height: "h-[308px]" },
];

const Gallery = () => {
  return (
    <Section>
      {/* <Container> */}
        <div className="flex flex-col items-center">
          <div className="max-w-[631px] text-center">
            <h2 className="text-[46px] font-normal text-heading">
              Follow Us On Instagram
            </h2>

            <p className="mt-5 text-[16px] leading-[26px] text-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem.
            </p>
          </div>

          <Swiper
            // modules={[Navigation]}
            // navigation
            slidesPerView={"auto"}
            centeredSlides={false}
            spaceBetween={20}
            className="w-full"
          >
            {images.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!w-[256px] flex items-center"
              >
                <div className={`relative w-full ${item.height}`}>
                  <Image
                    src={item.src}
                    alt="Gallery Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      {/* </Container> */}
    </Section>
  );
};

export default Gallery;
