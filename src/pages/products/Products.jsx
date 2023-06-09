import Search from "./search/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFromApi } from "../../utils/api";
import { getApiConfiguration } from "../../store/productSlice";
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.products);
  const { pagination } = useSelector((state) => state.products);
  const { offset, limit } = pagination;

  const { data } = url;

  const fetchApiConfig = () => {
    fetchDataFromApi(`?offset=${offset}&limit=${limit}`).then((res) => {
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
      <Search data1={data} />
    </>
  );
};

export default Products;
