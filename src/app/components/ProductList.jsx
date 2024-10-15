import Image from "next/image";
import products from "../products";

import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="flex flex-row gap-8 ">
      {products.map((product) => (
        <ProductItem key={product.name} />
      ))}
    </div>
  );
};

export default ProductList;
