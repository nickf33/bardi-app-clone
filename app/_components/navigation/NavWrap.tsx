import Logo from "./Logo";
import NavItems from "./NavItems";

const NavWrap = () => {
  return (
    <>
      <div className="w-full h-16">
        <div className="w-[90%] h-full mx-auto flex justify-between items-center">
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
