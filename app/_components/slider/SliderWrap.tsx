"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperButtons from "./SwiperButtons";
import SwiperPagination from "./SwiperPagination";
import reviews from "./reviews";

const SliderWrap = () => {
  return (
    <div className="relative bg-[#D8F3F4] pt-20 pb-32">
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        className="relative w-[90%] max-w-custom"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index + review.name}>
            <div className="grid grid-cols-10">
              <div className="flex w-full h-full col-span-3 laptop:col-span-10 laptop:flex-col laptop:text-center">
                <div className="relative h-8 w-8 rounded-full overflow-hidden laptop:mx-auto">
                  <Image
                    src={review.img.url}
                    alt={review.img.alt}
                    width={32}
                    height={32}
                    className="w-auto h-auto object-cover object-center"
                  />
                </div>
                <div className="ml-4 laptop:ml-0">
                  <p className="text-xs font-bold laptop:mt-4">{review.name}</p>
                  <p className="text-xs text-gray-500 laptop:my-2">
                    {review.title}
                  </p>
                </div>
              </div>
              <div className="w-full h-full col-span-5 laptop:col-span-10">
                <p className="text-xl font-medium laptop:text-center laptop:w-4/5 laptop:mx-auto">
                  {review.review}
                </p>
              </div>
              <div className="w-full h-full col-span-2"></div>
            </div>
          </SwiperSlide>
        ))}
        <div className="grid grid-cols-10">
          <div className="col-span-3 laptop:col-span-0"></div>
          <div className="col-span-5 laptop:col-span-10">
            <SwiperPagination reviews={reviews} />
          </div>
          <div className="col-span-2 laptop:col-span-0"></div>
        </div>
        <SwiperButtons />
      </Swiper>
    </div>
  );
};

export default SliderWrap;
