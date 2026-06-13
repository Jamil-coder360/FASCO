"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // এটা add করো
import Image from "next/image";
import Container from "./global/Container";
import Section from "./global/Section";
import Button from "./global/Button";
import Arrow from "./global/Arrow";

import deal_1 from "@/app/assets/deal_1.png";
import deal_2 from "@/app/assets/deal_2.png";
import deal_3 from "@/app/assets/deal_3.png";
import { Navigation, Pagination } from "swiper/modules";

const deals = [
  {
    id: "01",
    title: "Spring Sale",
    discount: "30% OFF",
    image: deal_1,
  },
  {
    id: "02",
    title: "Summer Sale",
    discount: "25% OFF",
    image: deal_2,
  },
  {
    id: "03",
    title: "Winter Sale",
    discount: "40% OFF",
    image: deal_3,
  },
];

const Deal = () => {
  return (
    <Section className="py-20 bg-[#FAFAFA]">
      <Container className=" lg:!mr-0">
        <div className="grid grid-cols-[444px_1fr]  items-center justify-between">
          {/* Left Side */}
          <div>
            <h2 className="text-[46px] font-normal text-heading">
              Deals Of The Month
            </h2>

            <p className="mb-10 mt-5 text-[16px] leading-[26px] text-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin.
            </p>

            <Button>Buy Now</Button>

            <div className="mt-10">
              <Arrow />
            </div>
          </div>
          {/* <div> */}

          {/* Right Side */}
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
            }}
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={30}
            className="deal_slider"
          >
            {deals.map((deal) => (
              <SwiperSlide key={deal.id}>
                <div
                  className="group deal-card relative overflow-hidden rounded-xl"
                  style={{ width: "372px", height: "480px" }}
                >
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    className="object-cover w-full h-full"
                  />

                  {/* Hover Card */}
                  <div
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 -translate-y-5 opacity-0 bg-white px-6 py-4 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ width: "217px", height: "130px" }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[18px] text-gray-500">
                        {deal.id}
                      </span>

                      <div className="h-px w-10 bg-gray-400"></div>

                      <span className="text-[18px] text-gray-600">
                        {deal.title}
                      </span>
                    </div>

                    <h3 className="mt-2 text-[40px] font-medium text-gray-700">
                      {deal.discount}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* </div> */}
      </Container>
    </Section>
  );
};

export default Deal;
