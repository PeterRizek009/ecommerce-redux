import { useState } from "react";
import Filter from "../filter/filter";
import AddToCartButton from "../buttons/AddToCartButton";
import { useSelector } from "react-redux";
import ProductCard from "../cards/card";


const Shopping = () => {

  const { clothes } = useSelector((state) => state.data);

  const itemsPerPage = 12; // عدد الكروت في الصفحة
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  
  const currentItems = clothes.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(clothes.length / itemsPerPage);

  const changePage = (number) => {
    setCurrentPage(number);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex w-full">
      {/* Sidebar Filter */}
      <Filter />

      {/* Main Content */}
      <div className="w-full p-4">
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-4">
          {currentItems.map((item) => (
  <div
            key={item.id}
            className="border rounded-xl p-4 relative flex flex-col justify-between h-[420px]"
          >
           <ProductCard item={item} />
            
             <AddToCartButton item={item} />
          </div>

           
          ))}
        </div>

        {/* ---------------- Pagination Section ---------------- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8 text-white">
            {/* Prev Button */}
            <button
              disabled={currentPage === 1}
              onClick={() => changePage(currentPage - 1)}
              className="px-3 py-1 rounded bg-gray-900 hover:bg-gray-400 disabled:opacity-40"
            >
              Prev
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => changePage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-indigo-600"
                    : "bg-gray-600 hover:bg-gray-00"
                }`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => changePage(currentPage + 1)}
              className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-400 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shopping;
