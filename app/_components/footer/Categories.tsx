const categories = [
  {
    title: "Company",
    items: ["About", "Contact", "Events", "Careers", "Suppliers"],
  },
  {
    title: "Support",
    items: [
      "Virtual Showroom",
      "Technical Corner",
      "Consumer Support",
      "Terms of Service",
    ],
  },
  {
    title: "Solutions",
    items: ["Smart Home", "Home Security", "Industrial Application"],
  },
];

const Categories = () => {
  return (
    <>
      <div className={`grid grid-cols-3`}>
        {categories.map((cat, index) => (
          <div key={index} className="">
            <p className="text-xs font-bold">{cat.title}</p>
            <ul className="text-2xs my-6 text-gray-500 font-medium">
              {cat.items.map((item, index) => (
                <li key={index} className="my-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
