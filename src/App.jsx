import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Produts from "./pages/products/Products"
import Cart from "./pages/cart/Cart"
import Details from "./pages/details/Details"
import PageNotFound from "./pages/notFound/PageNotFound"


function App() {
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
