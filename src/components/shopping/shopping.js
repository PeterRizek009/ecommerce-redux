import React from "react";
import { addToCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
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

  return (
    <div className="flex justify-start w-full">
      <Filter />
      <div className="flex flex-wrap justify-center py-4 md:w-4/5">
        {globalState.data.clothes?.map((item) => (
          <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-200 cursor-pointer m-2">
            <div className="w-full h-48 flex items-center justify-center overflow-hidden m-2">
              <img
                src={item.images[0]}
                alt={item.title}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Brand */}
            <p className="text-red-500 text-sm mt-3">{item.brand || "Brand"}</p>

            {/* Title */}
            <h3 className="text-gray-800 font-semibold text-base leading-tight mt-1">
              {item.title}
            </h3>

            {/* Price */}
            <p className="text-green-700 font-bold mt-2">
              {item.price} <span className="text-xs">USD</span>
            </p>

            {/* Button */}
            <button
              onClick={() => addNewItem(item)}
              className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md text-sm hover:bg-indigo-700 transition"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
