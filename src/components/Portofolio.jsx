import React from "react";
import reactLogo from "../assets/react.svg"; // Impor gambar dari folder assets

function Portofolio() {
  return (
    <>
      <div className="w-full h-full">
        <main className="flex justify-between items-center">
          <div className="w-[30%]">kiri</div>
          <div className="p-20 w-full">
            <div className="flex justify-between">
              <h1 className="text-3xl hover:text-blue-500 cursor-pointer">
                Hi, Im Frenky
              </h1>
              <img src={reactLogo} alt="" className="w-10" />
            </div>
            <div className="flex gap-4 mt-6 text-left">
              <p className="">Im a Frontend Developer</p>
              <p className="">*Based in Gresik</p>
            </div>
            <div className=" gap-4 mt-4 text-left">
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                sapiente impedit temporibus deleniti cum quidem numquam a vel
                adipisci voluptatum.
              </p>
            </div>
            <div className="border-t border-gray-400 my-4"></div>
            <div className="flex gap-1 text-left">
              <img src={reactLogo} alt="" />

              <h2>Latest Articles</h2>
            </div>
            <div className="flex justify-between mt-4">
              <h2>Latest Aricles from xxxx</h2>
              <button className="bg-blue-500 rounded p-2 text-white">
                halo
              </button>
            </div>
            <div className="flex"></div>
          </div>
          <div className="w-[30%]">kiri</div>
        </main>
      </div>
    </>
  );
}

export default Portofolio;
