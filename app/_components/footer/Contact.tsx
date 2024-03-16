const callToAction = {
  title: "Never Miss an Update",
  subTitle: "Be the first to hear about new offers from Bardi",
};

const Contact = () => {
  return (
    <>
      <div className="">
        <p className="text-xs font-bold">{callToAction.title}</p>
        <p className="text-2xs">{callToAction.subTitle}</p>
      </div>
    </>
  );
};

export default Contact;
