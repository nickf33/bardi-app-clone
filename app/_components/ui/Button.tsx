const Button = ({
  children,
  border,
  dark,
}: {
  children: React.ReactNode;
  border?: boolean;
  dark?: boolean;
}) => {
  return (
    <button
      className={`flex justify-center items-center mr-4 px-6 py-3 rounded-full text-xs font-semibold transition duration-300 hover:shadow hover:scale-[1.02] ${
        dark ? "bg-black text-white" : "bg-white text-black"
      } ${border ? "border-2 border-black" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
