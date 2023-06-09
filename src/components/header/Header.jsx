import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { carts } = useSelector((state) => state.products);

  return (
    <header className="text-gray-600 flex body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <ul className="flex md:text-sm text-xl">
            <li className="mr-6 text-2xl hover:scale-150 hover:text-indigo-600 transform transition-all ">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-6 text-2xl hover:scale-150 hover:text-indigo-600 transform transition-all ">
              <Link to="/products">Products</Link>
            </li>
            <li className="mr-6 flex text-2xl hover:scale-150 hover:text-indigo-600 transform transition-all ">
              <Link to="/cart">My Cart</Link>
              <div class="t-0 relative">
                <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  {Object.keys(carts).length}
                </p>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
