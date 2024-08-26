import React from "react";

function Sidebar() {
  return (
    <>
      <div className="h-screen w-[10%]">
        <div className=" flex flex-col mb-10">
          <h1 className="text-2xl mt-10">Frenky Firnando Antoni</h1>
          <p>@frenkyfir</p>
        </div>
        <div className="items-center flex flex-col mb-10">dsadasdsa</div>
      </div>
      <div className="fixed top-0 left-[10%] w-0.5 h-screen bg-gray-100 z-40"></div>
    </>
  );
}

export default Sidebar;
