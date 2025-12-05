const Sidebar = () => {
  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s Fashion",
    "Health & Beauty",
  ];

  return (
    <div className="w-full border-r pr-4">
      <ul className="space-y-4 text-gray-700">
        {categories.map((cat) => (
          <li
            key={cat}
            className="flex justify-between items-center hover:text-red-500 cursor-pointer"
          >
            {cat}
            <span>{">"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
