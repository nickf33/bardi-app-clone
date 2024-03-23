import Link from "next/link";

const Logo = ({ text, footer }: { text: String; footer?: boolean }) => {
  return (
    <>
      <Link href="/">
        <div
          className={`${
            !footer ? "w-20 h-16 text-lg" : "w-16 h-12 text-xs"
          } bg-cyan-logo grid place-content-center`}
        >
          <p className="text-white font-light">{text}</p>
        </div>
      </Link>
    </>
  );
};

export default Logo;
