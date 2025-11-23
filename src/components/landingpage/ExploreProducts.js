import { useSelector } from "react-redux";
import { FiHeart, FiEye } from "react-icons/fi";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

const ExploreProducts = () => {
  const { clothes } = useSelector((state) => state.data);
  const products = clothes.slice(0, 8);

  return (
    <section className="mt-16 w-full max-w-[1200px] mx-auto px-4">
      {/* عنوان + أسهم */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-2 h-6 bg-red-500 rounded"></div>
            <p className="text-red-500 font-semibold">Our Products</p>
          </div>
          <h2 className="text-3xl font-bold">Explore Our Products</h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 relative flex flex-col justify-between h-[420px]"
          >
            {/* Icons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <div className="p-2 bg-white rounded-full shadow cursor-pointer">
                <FiHeart />
              </div>
              <div className="p-2 bg-white rounded-full shadow cursor-pointer">
                <FiEye />
              </div>
            </div>

            {/* Image */}
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="w-full h-[220px] object-cover rounded"
            />

            {/* Title */}
            <p className="mt-3 font-semibold text-sm h-[40px] overflow-hidden">
              {item.title}
            </p>

            {/* Price */}
            <div>
              <p className="text-red-500 font-bold">${item.price}</p>
              <p className="text-gray-400 line-through text-sm">$300</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500 mt-2 text-sm">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
              <span className="text-gray-600 ml-1">(95)</span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <button className="bg-red-500 text-white px-10 py-3 rounded-md hover:bg-red-600 text-sm">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ExploreProducts;
