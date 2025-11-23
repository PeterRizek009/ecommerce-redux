import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../store/cartSlice' ;
;

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
      className='bg-gray-600 text-white py-1.5 rounded-md text-xs hover:bg-indigo-700 w-full '
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
