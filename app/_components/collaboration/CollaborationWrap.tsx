import Image, { StaticImageData } from "next/image";
import businessImg from "@/app/assets/images/collaboration/business.jpg";
import developersImg from "@/app/assets/images/collaboration/developers.jpg";
import Button from "../ui/Button";

const content = [
  {
    text: "Grow Your Business with Bardi",
    buttonText: "Become a Partner",
    img: {
      url: businessImg,
      alt: "Mobile devices on a white background",
    },
  },
  {
    text: "Lets' Build Something Smart Together",
    buttonText: "Developer Portal",
    img: {
      url: developersImg,
      alt: "A person typing on a laptop in a darkened room",
    },
  },
];

interface ImageData {
  url: string | StaticImageData;
  alt: string;
}

const CollaborationItem = ({
  text,
  buttonText,
  img,
  index,
}: {
  text: string;
  buttonText: string;
  img: ImageData;
  index: number;
}) => {
  return (
    <>
      <div className="relative bg-green-500 rounded-lg shadow h-full overflow-hidden">
        <Image
          src={img.url}
          alt={img.alt}
          width={1000}
          height={1000}
          className="object-cover object-top h-full mobile_xl:w-full mobile_xl:h-auto"
        />
        <div className="absolute flex flex-col items-center top-20 left-0 right-0 z-10 w-4/5 mx-auto">
          <p
            className={`text-2xl font-semibold text-center mb-8 ${
              index % 2 !== 0 ? "text-white" : "text-black"
            }`}
          >
            {text}
          </p>
          <Button border={false}>{buttonText}</Button>
        </div>
      </div>
    </>
  );
};

const CollaborationWrap = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-[90%] max-w-custom mx-auto gap-10 h-96 my-20 mobile_xl:grid-cols-1 mobile_xl:h-[50rem]">
        {content.map((item, index) => (
          <CollaborationItem
            key={index}
            text={item.text}
            buttonText={item.buttonText}
            img={item.img}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default CollaborationWrap;
