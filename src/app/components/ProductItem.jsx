import Image from "next/image";

const ProductItem = ({ name, image, price }) => {
  return (
    <div key={name} className="flex flex-col items-center">
      <Image
        src={image}
        width={200}
        height={200}
        className="w-48 h-48 object-cover py-4 rounded-3xl"
        alt={name}
      />
      <h1 className="text-lg font-bold text-gray-800">{name}</h1>
      <p className="text-gray-600 font-bold">{price}</p>
    </div>
  );
};

export default ProductItem;
