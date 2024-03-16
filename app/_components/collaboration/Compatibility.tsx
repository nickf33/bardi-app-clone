import alexa from "../../assets/images/works_with/alexa.png";
import google from "../../assets/images/works_with/google.png";
import apple from "../../assets/images/works_with/apple.png";
import androidLogo from "../../assets/images/works_with/androidLogo.png";
import iosLogo from "../../assets/images/works_with/iosLogo.png";
import tuyaLogo from "../../assets/images/works_with/tuya_logo.jpg";
import Image, { StaticImageData } from "next/image";

interface ImageData {
  url: string | StaticImageData;
  alt: string;
}
const images = [
  { url: alexa, alt: "Works with alexa logo" },
  { url: google, alt: "Works with google logo" },
  { url: apple, alt: "Works with apple homekit logo" },
  { url: androidLogo, alt: "Android logo" },
  { url: iosLogo, alt: "iOS logo" },
  { url: tuyaLogo, alt: "Tuya logo" },
];

const Compatibility = () => {
  return (
    <>
      <div className="h-32 w-full">
        <div className="flex justify-between w-[90%] max-w-custom mx-auto border-t-2 py-8">
          <p className="text-sm font-semibold">Bardi Compatibility</p>
          <div className="flex">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img.url}
                alt={img.alt}
                width={500}
                height={500}
                className="h-6 w-auto mx-4"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Compatibility;
