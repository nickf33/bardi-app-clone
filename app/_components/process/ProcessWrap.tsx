import ImageGrid from "./ImageGrid";
import ProcessItems from "./ProcessItems";
import ScrollWords from "../ui/ScrollWords";
import ScrollCharacters from "../ui/ScrollCharacters";
import ScrollText from "../ui/ScrollText";

const ProcessWrap = () => {
  return (
    <>
      <div className="relative w-full mb-24">
        <div className=" relative w-[90%] max-w-custom mx-auto">
          <ScrollCharacters
            text="Build a smart home to uplift your everyday living and meaningful moments."
            padding="pt-32"
          />
          <ImageGrid />
          <ProcessItems />
        </div>
      </div>
    </>
  );
};

export default ProcessWrap;
