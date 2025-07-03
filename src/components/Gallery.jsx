import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { galleryImages } from "../assets/assets";

export default function Gallery() {
  return (
    <div className="w-full bg-black py-12">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-24">
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="custom-swiper w-full h-[400px] mx-auto"
        >
          {Object.values(galleryImages).map((src, i) => (
            <SwiperSlide
              key={i}
              className="flex items-center justify-center rounded-xl overflow-hidden"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
