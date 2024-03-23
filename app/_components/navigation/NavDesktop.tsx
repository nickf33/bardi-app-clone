import Search from "./Search";
import User from "./User";
import Link from "next/link";

interface NavLink {
  title: string;
  url: string;
}

const NavDesktop = ({
  navLinks,
  belowFold,
}: {
  navLinks?: NavLink[];
  belowFold: boolean;
}) => {
  // Check if navLinks is undefined
  if (!navLinks || navLinks.length === 0) {
    return null; // or any other fallback UI
  }

  return (
    <div
      className={`flex gap-10 text-xs ${
        belowFold ? "text-black" : "text-white"
      }`}
    >
      <div className="flex gap-5">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.url}>
            {link.title}
          </Link>
        ))}
        <Search />
        <User />
      </div>
    </div>
  );
};

export default NavDesktop;
