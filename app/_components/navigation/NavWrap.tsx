import Logo from "./Logo";
import NavItems from "./NavItems";

const NavWrap = () => {
  return (
    <>
      <div className="absolute top-0 w-full h-16">
        <div className="w-[90%] max-w-custom h-full mx-auto flex justify-between items-center">
          <Logo text={"BARDI"} />
          <div className="flex justify-between">
            <NavItems />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavWrap;
