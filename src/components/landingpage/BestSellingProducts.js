import { useSelector } from "react-redux";
import ProductCard from "../cards/card";

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
              <ProductCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;
