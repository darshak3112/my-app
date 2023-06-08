import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../../components/productCart/ProductCart";
import Search from "../../components/search/Search";
import { useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { getApiConfiguration } from "../../store/productSlice";
import Pagination from "../../components/pagination/Pagination";

const Products = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.products);

  const { data } = url;
  
  const fetchApiConfig = () => {
    fetchDataFromApi("?offset=0&limit=10").then((res) => {
      const products = {
        data: res.data,
      };
      dispatch(getApiConfiguration(products));
    });
  };

  useEffect(() => {
    fetchApiConfig();
  }, []);

  return (
    <>
      <Search />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data?.map((item) => {
              let details = {
                title: item.title,
                price: item.price,
                description: item.description,
                image: item.images[0],
                category:item.category.name
              }
              return <ProductCart key={item.id} details={details} />;
            })}
          </div>
        </div>
      </section>
      <Pagination />
    </>
  );
};

export default Products;
