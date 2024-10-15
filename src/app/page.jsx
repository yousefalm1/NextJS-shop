import Image from "next/image";
import products from "./products";

import cookieStore from "../assets/images/cookie-store.jpg";

const Home = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="  ">
          <h1 className=" text-7xl mt-36">The Dough Bros</h1>
          <p className="mt-4 font-bold"> Best cookies in kuwait</p>
          <Image
            src={cookieStore}
            height={500}
            width={500}
            alt="Cookie Store"
            className=" flex justify-center rounded-full my-6"
          />
        </div>
      </div>

      <div className="flex flex-row gap-8 ">
        <div className=" bg-black w-60 h-60 rounded-xl flex flex-col items-center justify-center">
          <Image
            src={products[0].image}
            width={100}
            height={10}
            className="rounded-full py-4"
            alt="Choco Chip"
          />
          <h1 className="">{products[0].name}</h1>
          <p>{products[0].price}</p>
        </div>

        <div className=" bg-black w-60 h-60 rounded-xl flex flex-col items-center justify-center">
          <Image
            src={products[1].image}
            width={100}
            height={10}
            className="rounded-full py-4"
            alt="Choco Chip"
          />
          <h1 className="">{products[1].name}</h1>
          <p>{products[1].price}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
