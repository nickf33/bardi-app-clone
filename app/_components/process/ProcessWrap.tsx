import ImageGrid from "./ImageGrid";
import ProcessItems from "./ProcessItems";

const ProcessWrap = () => {
  return (
    <>
      <div className="w-full py-16">
        <div className="w-[90%] max-w-custom mx-auto">
          <h2 className="text-[2.2rem] font-semibold max-w-[30rem]">
            Build a smart home to uplift your everyday living and meaningful
            moments.
          </h2>
          <ImageGrid />
          <ProcessItems />
        </div>
      </div>
    </>
  );
};

export default ProcessWrap;
