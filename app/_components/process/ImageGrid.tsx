import ImgOne from "@/app/assets/images/process/plug.jpg";
import ImgTwo from "@/app/assets/images/process/heater.jpg";
import Image from "next/image";

const ImageGrid = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-10 h-72 my-8">
        <div className="col-span-4 rounded-lg mobile_xl:col-span-6 overflow-hidden">
          <Image
            src={ImgOne}
            alt="Image of something"
            width={1500}
            height={1500}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-2 bg-green-500 rounded-lg mobile_xl:col-span-6 overflow-hidden mobile_xl:hidden">
          <Image
            src={ImgTwo}
            alt="Image of something"
            width={1500}
            height={1500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
