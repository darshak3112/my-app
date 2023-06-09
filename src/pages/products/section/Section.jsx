import ProductCart from "../../../components/productCart/ProductCart";
import Pagination from "../../../components/pagination/Pagination";

const Section = ({ data }) => {
  console.log("section ", data);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data?.map((item) => {
              let details = {
                id: item.id,
                title: item.title,
                price: item.price,
                description: item.description,
                image: item.images[0],
                category: item.category.name,
              };
              return <ProductCart key={item.id} details={details} />;
            })}
          </div>
        </div>
      </section>
      <Pagination />
    </>
  );
};

export default Section;
