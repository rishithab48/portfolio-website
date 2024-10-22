"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const imgs = [
  { id: 1, src: "/images/slider-images/1.jpg" },
  { id: 2, src: "/images/slider-images/3.jpg" },
  { id: 3, src: "/images/slider-images/4.jpg" },
  { id: 4, src: "/images/slider-images/6.jpg" },
];

export default function ImagesSwiper() {
  return (
    <section id="gallery" className="mt-16">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Image Gallery
      </h2>
      <div className="flex justify-center mt-6">
        <div className="flex justify-center items-center w-[36rem] h-[30rem] text-lg text-white m-0 p-0 bg-[#121212]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-full h-full"
          >
            {imgs.map((img) => (
              <SwiperSlide
                key={img.id}
                className="flex justify-center items-center"
              >
                <Image
                  src={img.src}
                  alt="slider-image"
                  className="block object-cover max-w-full max-h-full w-auto h-auto"
                  width={500} height={500}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
