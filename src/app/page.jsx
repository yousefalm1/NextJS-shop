import Image from "next/image";
import cookieStore from "../assets/images/cookie-store.jpg";

const Home = () => {
  return (
    <div className=" flex justify-center flex-col items-center ">
      <h1 className=" text-7xl mt-36">The Dough Bros</h1>
      <p className="mt-4 font-bold"> Best cookies in town</p>
      <Image
        src={cookieStore}
        height={500}
        width={500}
        alt="Cookie Store"
        className=" flex justify-center rounded-full my-6"
      />
    </div>
  );
};

export default Home;
