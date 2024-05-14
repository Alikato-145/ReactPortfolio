import React from "react";
import { Image } from "@nextui-org/react";
import "./index.css";
const Home = () => {
  const Data = []
  return (
    <div className=" min-h-[calc(100vh-65px)] flex justify-center">
      <div className=" justify-center items-center flex gap-10 lg:gap-44 lg:flex-row flex-col-reverse sm:gap-20">
        <div className="flex flex-col  justify-center">
          <p className=" text-xl lg:text-2xl text-yellow-300">Hello World,I'm</p>
          <div class="typewriter">
            <p className=" text-2xl lg:text-4xl">Manus Techaphattrapron</p>
          </div>
          <p>Computer Science</p>
          <p>Kasertsart University</p>
        </div>
        <div>
          <Image
            className="border-5 border-yellow-300 shadow-[0_0px_60px_rgba(8,_112,_184,_0.7)] shadow-yellow-300 md:flex"
            width={300}
            height={300}
            radius="full"
            src="/manus.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
