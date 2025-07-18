import React, { useRef } from "react";

const Home = () => {
  return (
    <>
      <div className="w-[95%] border mx-auto relative ">
        
        {/* <div className="w-[1425px] h-[1324px] absolute -z-10 ">
          <div className="fixed w-[1425px] h-[1324px] bg-blend-luminosity mx-auto left-0 right-0 -top-200 bg-[black] rounded-full" />
        </div> */}

        <div className="headerContainer ">
          <h1 className="text-center text-9xl font-extrabold bg-blend-color-burn z-10 text-[#FF0000] tracking-tighter ">
            MYSELF GAURAV,
          </h1>
          <div className="paraContainer border flex  ">
            <p className="w-[50%] border leading-none ml-50 z-10 text-[#7a7a7a]">
              I am a{" "}
              <span className="text-[#ffffff] font-light">
                FrontEnd Developer
              </span>{" "}
              a passionate and creative with my craft gets curious about
              everything that gets my attention I thrive on implimenting the
              ideas. I embrace challenges as opportunities to learn and grow as
              a developer.
            </p>
          </div>
          <div className="buttonContainer flex justify-center py-2">
            <div className="w-[71%]  ">
              <button className="tracking-tighter animate-pulse cursor-pointer w-fit font-bold text-[#FF0000] shadow-white/50  shadow-lg bg-[white] rounded-lg  px-3 py-1">
                Hire For Work
              </button>
            </div>
          </div>
        </div>
        <div className="navContainer flex  justify-between items-center -red-600">
          <div className="leftSide w-fit fixed h-fit z-10  top-80 leading-none flex flex-col gap-0.5  text-white tracking-tighter font-bold  ">
            <a className="hover:text-[#FF0000] transition ease-in-out duration-300  cursor-pointer w-fit">
              HOME
            </a>
            <a className="cursor-pointer  w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              ABOUT ME
            </a>
            <a className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              SKILLS
            </a>
            <a className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              RECENT WORK
            </a>
            <a className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              RESUME
            </a>
            <a className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              EDUCATION
            </a>
          </div>
          <div className="center flex w-full justify-center">
            <div className="middle z-10 w-75">
              <img className="" src="./src/ps-bg-removed.png" alt="" />
            </div>
            <div className="blurDot size-120 -z-0 rounded-full blur-3xl text-[#FF0000] absolute bg-black/40">
              O
            </div>
          </div>

          <div className="rightSide flex flex-col items-end gap-0.5 w-fit fixed right-9 z-10 h-fit top-85 leading-none text-white tracking-tighter font-bold ">
            <a className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              GIT-HUB
            </a>
            <a className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              LINKEDIN
            </a>
            <a className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              X
            </a>
            <a className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
