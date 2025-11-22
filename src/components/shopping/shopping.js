import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import Filter from "../filter/filter";

const Shopping = ({ globalState }) => {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addNewItem = (item) => {
    const exists = cartState.cart.some((cartItem) => cartItem.id === item.id);
    if (!exists) {
      dispatch(addToCart(item));
    } else {
      console.log("Already exists in the cart");
    }
  };

  // ----------------------------- Pagination -----------------------------
  const itemsPerPage = 12; // عدد الكروت في الصفحة
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const clothes = globalState.data.clothes || [];
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 rounded-xl shadow p-3 hover:shadow-lg transition cursor-pointer border-2-white"
              style={{ minHeight: "320px" }}
            >
              {/* Image */}
              <div className="w-full h-40 bg-gray-400 rounded flex items-center justify-center overflow-hidden">
                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Brand */}
              <p className="text-red-400 text-xs mt-3">
                {item.brand || "Brand"}
              </p>

              {/* Title — ONE LINE ONLY */}
              <h3
                className="text-gray-800 font-semibold text-sm mt-1 leading-tight"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.title}
              </h3>

              {/* Price */}
              <p className="text-green-700 font-bold text-sm mt-2">
                {item.price} <span className="text-xs">USD</span>
              </p>

              {/* Button */}
              <button
                onClick={() => addNewItem(item)}
                className="mt-3 w-full bg-indigo-600 text-white py-1.5 rounded-md text-xs hover:bg-indigo-700"
              >
                Add To Cart
              </button>
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
