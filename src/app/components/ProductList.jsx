import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="flex justify-center space-x-4">
      {products.map((product) => (
        <ProductItem
          key={product.name}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
