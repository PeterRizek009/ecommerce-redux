import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const AddToCartButton = ({ item }) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const addNewItem = () => {
    const exists = cartState.cart.some(
      (cartItem) => cartItem.id === item.id
    );

    if (!exists) {
      dispatch(addToCart(item));
    } else {
      console.log("Already exists in the cart");
    }
  };

  return (
    <button
      onClick={addNewItem}
      className="bg-yellow-400 w-[100px] text-black p-1 rounded-lg hover:bg-indigo-700 flex items-center justify-center my-2 text-sm"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
