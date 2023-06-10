import Search from "./search/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataFromApi } from "../../utils/api";
import { getApiConfiguration } from "../../store/productSlice";
import { useEffect, useState } from "react";
import Section from "./section/Section";

const Products = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.products);
  const { pagination } = useSelector((state) => state.products);
  const { offset, limit } = pagination;

  const { data } = url;

  const [showData, setShowData] = useState({});

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
    setShowData({ data });
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, [pagination]);

  return (
    <>
      <Search setShowData={setShowData} />
      <Section showData={showData} />
    </>
  );
};

export default Products;
