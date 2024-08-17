import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import Logo from "../navigation/Logo";
import Button from "../ui/Button";

const title = "Always in Control";
const address = {
  lineOne: "PT.BARDI Solusi Otomasi",
  lineTwo: "Samanea Whole Sale Market",
  lineThree: "Side C UnitNo C041-C044",
};
const download = {
  title: "Download App",
  icons: [
    {
      name: "Android",
      icon: <IoLogoAndroid />,
    },
    {
      name: "Apple",
      icon: <FaApple />,
    },
  ],
};

const Address = () => {
  return (
    <>
      <div className="w-[90%] h-full ml-auto">
        <Logo text="BARDI" footer={true} />
        <p className="text-xl font-semibold mt-4">{title}</p>
        <div className="text-2xs my-12 text-gray-500 font-medium">
          <p className="">{address.lineOne}</p>
          <p className="">{address.lineTwo}</p>
          <p className="">{address.lineThree}</p>
        </div>
        <div className="">
          <p className="font-bold mb-2 text-sm">{download.title}</p>
          <div className="flex bg-transparent">
            {download.icons.map((icon, index) => (
              <button
                key={index}
                className="flex  items-center px-4 py-2 bg-black text-white rounded-full mr-4 text-xs"
              >
                <span className="text-lg">{icon.icon}</span>{" "}
                <span className="pl-2">{icon.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
