import React from "react";
import Address from "./Address";
import Categories from "./Categories";
import Contact from "./Contact";

const FooterWrap = () => {
  return (
    <>
      <div className="w-full py-12 bg-gray-100">
        <div className="grid grid-cols-2 w-[90%] max-w-custom mx-auto border">
          <Address />
          <div className="flex flex-col justify-between">
            <Contact />
            <Categories />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterWrap;
