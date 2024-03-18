"use client";

import Image from "next/image";
import bgImg from "@/app/assets/images/landing/main.jpg";
import { GoArrowDown } from "react-icons/go";
import Button from "../ui/Button";

const landingData = {
  title: "One simple ecosystem for smart living solutions.",
  subTitle: "Always in copntrol",
  buttonText: "Explore products",
};

const TextWrap = () => {
  return (
    <>
      <div className="flex w-[90%] max-w-custom h-28 mx-auto mb-16 justify-between desktop:flex-col-reverse">
        <div className="flex flex-col items-start justify-between h-full py-2">
          <p className="text-white text-sm font-light desktop:text-sm desktop:my-4">
            Always in Control
          </p>
          <Button>Explore Products</Button>
        </div>
        <div className="w-[32rem] desktop:w-full">
          <h1 className="text-[2.6rem] font-semibold text-white">
            One simple ecosystem for smart living solutions.
          </h1>
        </div>
        <div className="flex justify-end items-end desktop:hidden">
          <div className="px-2 py-4 h-12 border rounded-full text-white transition duration-300 hover:scale-105 active:scale-90">
            <GoArrowDown />
          </div>
        </div>
      </div>
    </>
  );
};

const LandingWrap = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-end items-end">
        <TextWrap />
        <Image
          src={bgImg}
          alt="main image of a front room with smart devices"
          width={2000}
          height={2000}
          className="absolute bottom-0 left-0 h-screen w-full object-cover object-left-bottom z-[-2]"
        />
        <div className="absolute top-0 left-0 h-screen w-full bg-black opacity-50 z-[-1]"></div>
      </div>
    </>
  );
};

export default LandingWrap;
