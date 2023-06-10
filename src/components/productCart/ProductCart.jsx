import { useDispatch, useSelector } from "react-redux";
import { getCarts } from "../../store/productSlice";
import { Link } from "react-router-dom";

const ProductCart = ({ details }) => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.products);
  const { carts } = useSelector((state) => state.products);
  const { data } = url;

  const addToCart = (id) => {
    let value = data.find((item) => item.id === id);
    if (Object.keys(carts).length > 0) {
      let cart = [...carts, value];
      dispatch(getCarts(cart));
    } else {
      let cart = [value];
      dispatch(getCarts(cart));
    }
  };

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link
        to={"/details/" + details.id}
        className="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={details.image}
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {details.category}
        </h3>
        <span className="flex">
          <h2 className=" text-gray-900 title-font text-lg font-medium">
            {details.title}
          </h2>
          <button
            onClick={() => addToCart(details.id)}
            className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded"
          >
            Add To Cart
          </button>
        </span>
        <p className="mt-1">₹ {details.price}.00</p>
      </div>
    </div>
  );
};

export default ProductCart;
