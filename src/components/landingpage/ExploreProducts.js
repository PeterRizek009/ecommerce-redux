import { useSelector } from "react-redux";
import ProductCard from "../cards/card";
import ViewAllProductsButton from "../buttons/viewallproductsBTN";

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
            <ProductCard item={item} />
          </div>
        ))}
      </div>

      {/* View All Button */}
    <ViewAllProductsButton/>
    </section>
  );
};

export default ExploreProducts;
