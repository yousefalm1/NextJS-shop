"use client"; // This tells Next.js that this is a Client Component
import { useState } from "react";

import Image from "next/image";
import bakeryStore from "../../assets/images/bakery-hero.jpg";

const Header = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  const handleIncrease = () => {
    setVisitorCount(visitorCount + 1);
  };

  return (
    <div className="flex justify-center">
      <div className=" items-center">
        <h1 className=" text-7xl mt-6 text-gray-800 text-center">
          The Dough Bros
        </h1>
        <p className="mt-4 font-bold text-2xl text-center text-gray-600">
          Best bakery in kuwait
        </p>
        <Image
          src={bakeryStore}
          height={800}
          width={800}
          alt="Cookie Store"
          className=" flex justify-center rounded-full my-6"
        />
        <div className="flex space-x-5 justify-center">
          <h1 className="text-4xl text-black">{visitorCount} Visitors</h1>
          <button
            onClick={handleIncrease}
            className="text-2xl text-gray-300 bg-gray-700 p-2 rounded-3xl hover:bg-gray-800 "
          >
            Click Me Please
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
