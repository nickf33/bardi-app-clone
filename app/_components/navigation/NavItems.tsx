import Search from "./Search";
import User from "./User";

const navLinks = [
  { title: "Products", url: "products" },
  { title: "Solutions", url: "solutions" },
  { title: "Support", url: "support" },
  { title: "Contact Us", url: "contact" },
];

const NavItems = () => {
  return (
    <>
      <div className="flex text-xs text-white">
        {navLinks.map((link, index) => (
          <div
            className={`${
              index === navLinks.length - 1 ? "ml-4 mr-12" : "mx-4"
            }`}
            key={index}
          >
            {link.title}
          </div>
        ))}
        <Search />
        <User />
      </div>
    </>
  );
};

export default NavItems;
