const ProductCart = ({details}) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={details.image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {details.category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {details.title}
        </h2>
              <p className="mt-1">₹ { details.price}.00</p>
      </div>
    </div>
  );
};

export default ProductCart;
