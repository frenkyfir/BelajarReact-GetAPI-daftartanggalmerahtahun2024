import React from "react";
import reactLogo from "../assets/react.svg"; // Impor gambar dari folder assets
import Sidebar from "./Sidebar/Sidebar";

function Portofolio() {
  return (
    <>
      <div className="w-full h-full justify-between">
        <main className="flex ">
          <Sidebar />
          <container className=" p-12 w-[50%]">
            <section>
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
                <p className="text-lg ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  sapiente impedit temporibus deleniti cum quidem numquam a vel
                  adipisci voluptatum.
                </p>
              </div>
            </section>
            <div className="border-t border-gray-400 my-4"></div>
            <section>
              <div className="flex gap-1 text-left">
                <img src={reactLogo} alt="" />

                <h2 className="font-bold text-2xl">Latest Articles</h2>
              </div>
              <div className="flex justify-between mt-4">
                <h2>Latest Aricles from xxxx</h2>
                <button className="bg-blue-500 rounded p-2 text-white">
                  halo
                </button>
              </div>
              <div className="flex flex-wrap gap-6 mt-4 mb-8 ">
                <div className="card bg-base-100 w-[300px] shadow-xl">
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="card bg-base-100 w-[300px] shadow-xl">
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="border-t border-gray-400 my-4"></div>
            <div className="flex gap-1 text-left">
              <img src={reactLogo} alt="" />

              <h2 className="font-bold text-2xl ml-1">Experiences</h2>
            </div>
            <div className="text-left mt-4">
              <h2>this is my experience</h2>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="card bg-base-100 image-full w-96 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 image-full w-96 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </container>
        </main>
      </div>
    </>
  );
}

export default Portofolio;
