import { useSelector } from "react-redux";
import { FiHeart, FiEye } from "react-icons/fi";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

const BestSellingProducts = () => {
  const { clothes } = useSelector((state) => state.data);

  const bestSelling = clothes.slice(0, 4); // اختار أى ترتيب يعجبك بعدين

  return (
    <section className="mt-16 w-full max-w-[1200px] mx-auto px-4">
      {/* العنوان + زر View All */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-2 h-6 bg-red-500 rounded"></div>
            <p className="text-red-500 font-semibold">This Month</p>
          </div>
          <h2 className="text-3xl font-bold">Best Selling Products</h2>
        </div>

        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 text-sm">
          View All
        </button>
      </div>

      {/* المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSelling.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 relative flex flex-col justify-between h-[420px]"
          >
            {/* الأيقونات */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <div className="p-2 bg-white rounded-full shadow cursor-pointer">
                <FiHeart />
              </div>
              <div className="p-2 bg-white rounded-full shadow cursor-pointer">
                <FiEye />
              </div>
            </div>

            {/* الصورة */}
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="w-full h-[220px] object-cover rounded"
            />

            {/* الاسم */}
            <p className="mt-3 font-semibold text-sm h-[40px] overflow-hidden">
              {item.title}
            </p>

            {/* السعر */}
            <div>
              <p className="text-red-500 font-bold">${item.price}</p>
              <p className="text-gray-400 line-through text-sm">$360</p>
            </div>

            {/* تقييم شكلي */}
            <div className="flex items-center gap-1 text-yellow-500 mt-2 text-sm">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
              <span className="text-gray-600 ml-1">(65)</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;
