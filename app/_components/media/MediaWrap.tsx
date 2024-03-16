import Button from "../ui/Button";
import Image, { StaticImageData } from "next/image";
import imageOne from "@/app/assets/images/blogs/blog1.jpg";
import imageTwo from "@/app/assets/images/blogs/blog2.jpg";
import imageThree from "@/app/assets/images/blogs/blog3.jpg";

const posts = [
  {
    title: "How Bardi Devices Can Give You a Helping Hand at Home.",
    author: "Carrie Matthews",
    date: "06 Jan 2022",
    excerpt:
      "Tips for using Bardi devices and services for an improved life at home.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: {
      url: imageOne,
      alt: "image alt tag",
    },
  },
  {
    title: "A Letter from Our CEO: Our Future with Bardi.",
    author: "Warren Rhodes",
    date: "17 Apr 2022",
    excerpt:
      "Tips for using Bardi devices and services for an improved life at home.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: {
      url: imageTwo,
      alt: "image alt tag",
    },
  },
  {
    title:
      "In a Year of Big changes, Make a Small One With Smart Home Monitoring.",
    author: "Pearl Manning",
    date: "16 Jun 2022",
    excerpt:
      "Tips for using Bardi devices and services for an improved life at home.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: {
      url: imageThree,
      alt: "image alt tag",
    },
  },
];

interface ImageData {
  url: string | StaticImageData;
  alt: string;
}

const PostWrap = ({
  title,
  author,
  date,
  excerpt,
  img,
}: {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  img: ImageData;
}) => {
  return (
    <>
      <div className="flex text-2xs py-4 border-t-2">
        <div className="w-2/5 h-full">
          <div className="flex flex-col justify-between w-52 my-4 h-24 mobile_xl:w-auto mobile_xl:h-44  ">
            <h2 className="text-sm font-bold">{title}</h2>
            <div className="grid grid-cols-2 w-full text-2xs font-medium mobile_xl:grid-cols-1">
              <p className="mobile_xl:mb-4">{author}</p>
              <p className="">{date}</p>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-full">
          <div className="grid grid-cols-2 mobile_xl:grid-cols-1">
            <div className="p-4 w-full ml-auto mobile_xl:hidden">{excerpt}</div>
            <div className="bg-black h-32 w-4/5 ml-auto overflow-hidden mobile_xl:h-48">
              <Image
                src={img.url}
                alt={img.alt}
                width={1000}
                height={1000}
                className="h-full object-cover"
                style={{ objectPosition: "50% 15%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MediaWrap = () => {
  return (
    <>
      <div className="w-[90%] mx-auto max-w-custom">
        {posts.map((post, index) => (
          <div key={index} className="">
            <PostWrap
              title={post.title}
              author={post.author}
              date={post.date}
              excerpt={post.excerpt}
              img={post.img}
            />
          </div>
        ))}
        <div className="my-8">
          <Button border={true}>
            View More <span className="ml-4">→</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default MediaWrap;
