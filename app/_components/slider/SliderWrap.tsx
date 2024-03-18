"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import reviewImg from "../../assets/images/reviews/reviewImg.jpg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageData {
  url: string | StaticImageData;
  alt: string;
}

const reviews = [
  {
    name: "James Watson",
    title: "CEO WorkStuff",
    review:
      "I have always purchased my smart home devices from Bardi official website. Their online support are always there! And they have all kinds of information. In terms of devices, I have never complained anout them sincethe purchase date. Great customer service, great products. Thanks Bardi! For making things easy and simple!",
    img: {
      url: reviewImg,
      alt: "Persona image",
    },
  },
  {
    name: "Davinson Sanchez",
    title: "Bad at Football",
    review:
      "I have always purchased my smart home devices from Bardi official website. Their online support are always there! And they have all kinds of information. In terms of devices, I have never complained anout them sincethe purchase date. Great customer service, great products. Thanks Bardi! For making things easy and simple!",
    img: {
      url: reviewImg,
      alt: "Persona image",
    },
  },
  {
    name: "Gary Mabbut",
    title: "Head of Sales",
    review:
      "I have always purchased my smart home devices from Bardi official website. Their online support are always there! And they have all kinds of information. In terms of devices, I have never complained anout them sincethe purchase date. Great customer service, great products. Thanks Bardi! For making things easy and simple!",
    img: {
      url: reviewImg,
      alt: "Persona image",
    },
  },
  {
    name: "Benjamin Chaing",
    title: "Security, Greendale",
    review:
      "I have always purchased my smart home devices from Bardi official website. Their online support are always there! And they have all kinds of information. In terms of devices, I have never complained anout them sincethe purchase date. Great customer service, great products. Thanks Bardi! For making things easy and simple!",
    img: {
      url: reviewImg,
      alt: "Persona image",
    },
  },
];

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="flex absolute gap-5 top-1 right-1 justify-center items-center laptop:my-8 laptop:relative laptop:top-auto laptop:right-auto">
        <button
          className="grid place-content-center h-12 w-8 border border-gray-700 bg-[#D8F3F4] rounded-full z-20 text-gray-700 transition duration-300 hover:scale-105 active:scale-90"
          onClick={() => swiper.slidePrev()}
        >
          <IoMdArrowBack />
        </button>

        <button
          className="grid place-content-center h-12 w-8 border border-gray-700 bg-[#D8F3F4] rounded-full z-20 text-gray-700 transition duration-300 hover:scale-105 active:scale-90"
          onClick={() => swiper.slideNext()}
        >
          <IoMdArrowForward />
        </button>
      </div>
    </>
  );
};

const SwiperPagination = () => {
  const swiper = useSwiper();
  const [activeIndex, setActiveIndex] = useState(0);

  swiper.on("slideChange", () => {
    setActiveIndex(swiper.realIndex);
  });

  return (
    <>
      <div className="relative flex gap-2 mt-12 laptop:justify-center">
        {reviews.map((_, index) => (
          <motion.div
            key={index}
            className="h-[5px] rounded-full"
            initial={{ width: "5px", backgroundColor: "#888" }}
            animate={{
              width: activeIndex === index ? "3rem" : "5px",
              backgroundColor: activeIndex === index ? "#000" : "#888",
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        ))}
      </div>
    </>
  );
};

const SliderWrap = () => {
  return (
    <>
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
          className="w-[90%] max-w-custom"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="grid grid-cols-10">
                <div className="flex w-full h-full col-span-3 laptop:col-span-10 laptop:flex-col laptop:text-center">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden laptop:mx-auto">
                    <Image
                      src={review.img.url}
                      alt={review.img.alt}
                      width={500}
                      height={500}
                      className="w-auto h-auto object-cover object-center absolute top-[-20%] left-0"
                    />
                  </div>
                  <div className="ml-4 laptop:ml-0">
                    <p className="text-xs font-bold laptop:mt-4">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-500 laptop:my-2">
                      {review.title}
                    </p>
                  </div>
                </div>
                <div className="w-full h-full col-span-5 laptop:col-span-10">
                  <p className="text-xl font-medium laptop:text-center laptop:w-4/5 laptop:mx-auto">
                    "{review.review}"
                  </p>
                </div>
                <div className="w-full h-full col-span-2"></div>
              </div>
            </SwiperSlide>
          ))}
          <div className="grid grid-cols-10">
            <div className="col-span-3 laptop:col-span-0"></div>
            <div className="col-span-5 laptop:col-span-10">
              <SwiperPagination />
            </div>
            <div className="col-span-2 laptop:col-span-0"></div>
          </div>
          <SwiperButtons />
        </Swiper>
      </div>
    </>
  );
};

export default SliderWrap;
