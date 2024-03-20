import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const MainProduct = ({ productData }: { productData: Product }) => {
  const { id, title, price, description, category, image } = productData;

  return (
    <>
      <div className="flex flex-col justify-between w-full h-full rounded-xl text-center p-8 border shadow-xls overflow-hidden">
        <div className="">{title}</div>
        <div className="flex w-full justify-between">
          <button className="text-2xs text-white bg-cyan-300 rounded-full py-1 px-3 mx-auto my-4 transition duration-300 hover:shadow hover:scale-[1.02]">
            ${price}
          </button>
          <button className="text-2xs text-black bg-white border-2 rounded-full py-1 px-3 mx-auto my-4 transition duration-300 hover:shadow hover:scale-[1.02]">
            View Item
          </button>
        </div>
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className=""
        />
      </div>
    </>
  );
};

export default MainProduct;
