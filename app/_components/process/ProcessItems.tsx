import AnimateIn from "../ui/AnimateIn";

const processData = [
  {
    number: "01",
    title: "Memorable Care",
    text: "We're her to help when you need it,with human support that exceeds expectations.",
  },
  {
    number: "02",
    title: "Seamless Experiences",
    text: "We offer effortless solutions that just work, on their own and with other smart home systems.",
  },
  {
    number: "03",
    title: "Welcome Guest",
    text: "We think of ourselves as a guest in your home, so we won't sell or missue your data.",
  },
];

const ProcessItems = () => {
  return (
    <>
      <div className="relative grid grid-cols-3 gap-10">
        {processData.map((item, index) => (
          <AnimateIn delay={0.3 * index}>
            <div
              key={index}
              className="col-span-1 border-t-2 h-full text-xs py-8 mobile_xl:col-span-6 mobile_xl:text-base"
            >
              <p className="before:content-['0'] font-semibold mb-2">
                {index + 1} - {item.title}
              </p>
              <p className="text-2xs mobile_xl:text-base mobile_xl:w-4/5">
                {item.text}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </>
  );
};

export default ProcessItems;
