import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

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

export default SwiperButtons;
