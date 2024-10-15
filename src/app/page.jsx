import Image from "next/image";

import cookieStore from "../assets/images/cookie-store.jpg";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";

const Home = () => {
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="  ">
          <h1 className=" text-7xl mt-36">The Dough Bros</h1>
          <p className="mt-4 font-bold text-center"> Best cookies in kuwait</p>
          <Image
            src={cookieStore}
            height={500}
            width={500}
            alt="Cookie Store"
            className=" flex justify-center rounded-full my-6"
          />
        </div>
      </div>

      <ProductList />
    </>
  );
};

export default Home;
