import Image from "next/image";
import products from "../products";

export const ProductItem = () => {
  return (
    <div
      key={products[0].name}
      className=" bg-black w-60 h-60 rounded-xl flex flex-col items-center justify-center"
    >
      <Image
        src={products[0].image}
        width={100}
        height={100}
        className="rounded-full py-4"
        alt="Choco Chip"
      />
      <h1 className="">{products[0].name}</h1>
      <p>{products[0].price}</p>
    </div>
  );
};

export default ProductItem;
