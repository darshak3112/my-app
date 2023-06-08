import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Produts from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Details from "./pages/details/Details";
import PageNotFound from "./pages/notFound/PageNotFound";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getCarts } from "./store/productSlice";
import { getByPlaceholderText } from "@testing-library/react";
import { useEffect } from "react";

function App() {
  const { url } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log("url ", url.data);

  const fetchApiConfig = () => {
    fetchDataFromApi("").then((res) => {
      const products = {
        data : res.data
      }
      dispatch(getApiConfiguration(products));
    });
  };

  useEffect(() => {
    fetchApiConfig();
  }, [])
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="products" element={<Produts />} />
          <Route path="cart" element={<Cart />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
