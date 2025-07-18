import React from "react";
import { RiRfidLine, RiGithubFill } from "react-icons/ri";

const RecentWork = () => {
  return (
    <>
      <div className="w-[95%] border flex items-center relative mx-auto">
        <h1 className="text-left  text-8xl border font-extrabold absolute -top-13 text-[#FF0000] tracking-tighter ">
          RECENT WORK,
        </h1>
        {/* container */}
        <div className="w-[87%] h-[40rem] border grid grid-cols-[7fr_3fr] grid-rows-2 items-center mx-auto my-9 gap-2">
          {/* LearnLift Section - spans both rows on left (70%) */}
          <div className="w-full h-full pt-2 pl-2 pr-2 border row-span-2 flex flex-col group hover:brightness-70 ease-in-out transition-all duration-300">
            <h2 className="text-xl font-medium">
              LearnLift - Explore your learning path
            </h2>

            <div className="relative w-full h-full">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://i.pinimg.com/736x/5b/a4/7c/5ba47c37f30be28690432cc79a9222e5.jpg"
                alt="LearnLift"
              />

              {/* GitHub icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* GitHub Icon */}
                <a
                  href="https://github.com/GauravShambharkar/LearnLift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <RiGithubFill className="size-10 text-white bg-[#00000080] rounded-full p-2" />
                </a>

                {/* Live Preview Icon (RFID) */}
                {/* <a
                  href="https://movies-streaming-app-mauve.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                > */}
                  {/* <RiRfidLine className="size-10 text-white bg-[#00000080] rounded-full p-2" /> */}
                {/* </a> */}
              </div>
              <div className="absolute flex w-fit inset-0 p-10 justify-center flex-col  gap-1 ">
                {[
                  "HTML5",
                  "CSS",
                  "JAVASCRIPT",
                  "REACTJS",
                  "TAILWIND",
                  "NODEJS",
                  "EXPRESSJS",
                  "MONGODB",
                  "GIT",
                ].map((item, id) => {
                  return (
                    <>
                      <h3
                        key={id}
                        className="text-[#ffffff] inset-0 flex justify-center w-fit bg-[#ffffff2e] backdrop-blur-lg hover:underline  px-2 text-[12px]  items-center cursor-pointer h-6 hover:text-[white] hover:bg-[#ffffff7e] rounded-md transition ease-in-out duration-500"
                      >
                        {item}
                      </h3>
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Ecom Store - top right */}
          <div className="w-full h-full pt-2 pl-2 pr-2 border flex flex-col group hover:brightness-70 ease-in-out transition-all duration-300">
            <h2 className="text-xl font-medium">Ecom Store</h2>

            <div className="size-full relative ">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://i.pinimg.com/736x/5b/a4/7c/5ba47c37f30be28690432cc79a9222e5.jpg"
                alt="Ecom Store"
              />

              {/* GitHub icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* GitHub Icon */}
                <a
                  href="https://github.com/GauravShambharkar/E-Com_Shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <RiGithubFill className="size-10 text-white bg-[#00000080] rounded-full p-2" />
                </a>

                {/* Live Preview Icon (RFID) */}
                <a
                  href="https://e-com-shop-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <RiRfidLine className="size-10 text-white bg-[#00000080] rounded-full p-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Movies Platform - bottom right */}
          <div className="w-full h-full pt-2 pl-2 pr-2 border flex flex-col group hover:brightness-70 ease-in-out transition-all duration-300">
            <h2 className="text-xl font-medium">Movies exploration platform</h2>

            <div className="size-full relative mt-2">
              <img
                className="w-full h-full object-cover rounded-md"
                src="https://i.pinimg.com/1200x/7d/05/58/7d0558f260a76d1f6a942549b0e37f3d.jpg"
                alt="Movies"
              />

              {/* Hover Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* GitHub Icon */}
                <a
                  href="https://github.com/GauravShambharkar/Movies-Streaming-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <RiGithubFill className="size-10 text-white bg-[#00000080] rounded-full p-2" />
                </a>

                {/* Live Preview Icon (RFID) */}
                <a
                  href="https://movies-streaming-app-mauve.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <RiRfidLine className="size-10 text-white bg-[#00000080] rounded-full p-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentWork;
