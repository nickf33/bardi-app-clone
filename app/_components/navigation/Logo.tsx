const Logo = ({ text }: { text: String }) => {
  return (
    <>
      <div className="w-20 h-16 bg-cyan-400 grid place-content-center">
        <p className="text-xl text-white font-light">{text}</p>
      </div>
    </>
  );
};

export default Logo;
