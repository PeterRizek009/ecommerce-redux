import { FiHeart, FiEye } from "react-icons/fi";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";


const ProductCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className="border rounded-xl p-4 relative flex flex-col justify-between h-[420px]"
    >
      {/* Icons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2">
        <div className="p-2 bg-white rounded-full shadow cursor-pointer hover:bg-gray-100">
          <FiHeart />
        </div>
        <div className="p-2 bg-white rounded-full shadow cursor-pointer hover:bg-gray-100">
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
        <p className="text-gray-400 line-through text-sm">$360</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-500 mt-2 text-sm">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
        <span className="text-gray-600 ml-1">(65)</span>
      </div>


    </div>
  );
};

export default ProductCard;
