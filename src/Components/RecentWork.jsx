import React from "react";

const RecentWork = () => {
  return (
    <>
      <div className="w-[95%] border flex items-center relative mx-auto">
        <h1 className="text-left  text-8xl border font-extrabold absolute -top-13 text-[#FF0000] tracking-tighter ">
          RECENT WORK,
        </h1>
        {/* container */}
        <div className="w-[87%] h-[40rem] border grid grid-cols-[7fr_3fr] grid-rows-2 items-center mx-auto my-11 gap-2">
          {/* LearnLift Section - spans both rows on left (70%) */}
          <div className="w-full h-full border row-span-2 flex flex-col">
            <h2 className="text-xl font-medium">
              LearnLift - Explore your learning path
            </h2>
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://i.pinimg.com/736x/5b/a4/7c/5ba47c37f30be28690432cc79a9222e5.jpg"
              alt="LearnLift"
            />
          </div>

          {/* Ecom Store - top right */}
          <div className="w-full h-full border flex flex-col">
            <h2 className="text-xl font-medium">Ecom Store</h2>
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://i.pinimg.com/736x/5b/a4/7c/5ba47c37f30be28690432cc79a9222e5.jpg"
              alt="Ecom Store"
            />
          </div>

          {/* Movies Platform - bottom right */}
          <div className="w-full h-full border flex flex-col">
            <h2 className="text-xl font-medium">
              Movies exploration platform
            </h2>
            <img
              className="w-full h-full object-cover rounded-md"
              src="https://i.pinimg.com/1200x/7d/05/58/7d0558f260a76d1f6a942549b0e37f3d.jpg"
              alt="Movies"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentWork;
