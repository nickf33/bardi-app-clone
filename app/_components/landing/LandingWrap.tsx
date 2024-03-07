import Image from "next/image";
import bgImg from "@/app/assets/images/main.jpg";

const TextWrap = () => {
  return (
    <>
      <div className="w-[90%] h-20 mx-auto border">
        <h1>Title text should appear here!</h1>
      </div>
    </>
  );
};

const LandingWrap = () => {
  return (
    <>
      <div className="border border-red-500 h-full w-full">
        <TextWrap />
        <Image
          src={bgImg}
          alt="main image of a front room with smart devices"
          width={2000}
          height={2000}
          className="absolute top-0 left-0 h-screen w-full object-cover z-[-2]"
        />
        <div className="absolute top-0 left-0 h-screen w-full bg-gray-800 opacity-30 z-[-1]"></div>
      </div>
    </>
  );
};

export default LandingWrap;
