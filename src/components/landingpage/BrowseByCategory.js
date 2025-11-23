import { useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BrowseByCategory = () => {
  const { clothes } = useSelector((state) => state.data);

  // نجيب اسم التصنيفات من الـ API
  const categories = Array.from(
    new Set(clothes.map((item) => item.category?.name))
  ).slice(0, 6); // أول 6 تصنيفات

  return (
    <section className="mt-16 w-full max-w-[1200px] mx-auto px-4">

      {/* العنوان + الأسهم */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-2 h-6 bg-red-500 rounded"></div>
            <p className="text-red-500 font-semibold">Categories</p>
          </div>
          <h2 className="text-3xl font-bold">Browse By Category</h2>
        </div>

        <div className="hidden md:flex gap-3">
          <button className="p-3 bg-gray-200 rounded-full">
            <IoIosArrowBack />
          </button>
          <button className="p-3 bg-gray-200 rounded-full">
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* الكروت */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <div
            key={cat}
            className="border rounded-lg py-6 px-4 text-center cursor-pointer hover:bg-red-500 hover:text-white transition"
          >
            {/* ممكن تحط أيقونة ثابتة هنا لو حابب */}
            <p className="mt-2 font-medium text-sm">{cat}</p>
          </div>
        ))}
      </div>

      <hr className="mt-10 border-gray-200" />
    </section>
  );
};

export default BrowseByCategory;
