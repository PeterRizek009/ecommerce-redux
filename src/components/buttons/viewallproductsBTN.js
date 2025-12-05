import { Link } from "react-router-dom";

const ViewAllProductsButton = () => {
  return (
    <div className="text-center mt-10">
      <Link
        to={"/home"}
        className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-md"
      >
        View All Products
      </Link>
    </div>
  );
};

export default ViewAllProductsButton;
