import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <ul className="flex">
            <li className="mr-6 text-2xl hover:scale-150 hover:text-indigo-600 transform transition-all ">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-6 text-2xl hover:scale-150 hover:text-indigo-600 transform transition-all ">
              <Link to="/products">Products</Link>
            </li>
            <li className="mr-6 text-2xl hover:scale-150 hover:text-indigo-600 transform transition-all ">
              <Link to="/cart">My Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
