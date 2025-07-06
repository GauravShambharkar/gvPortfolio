import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-[95%] border  mx-auto bg-[#CBCBCB]">
        <div className="headerContainer  ">
          <h1 className=" text-center text-9xl font-extrabold text-[#FF0000] tracking-tighter ">
            MYSELF GAURAV,
          </h1>
          <div className="paraContainer  flex justify-center ">
            <p className="w-[71%]  leading-none text-[#676767]">
              I am a{" "}
              <span className="text-[#000000] font-light">
                FrontEnd Developer
              </span>{" "}
              passionate about crafting dynamic and user-centric web apps.{" "}
              <br /> With experience in modern technologies, I thrive on
              building scalable and intuitive web solutions. <br /> I embrace
              challenges as opportunities to learn and grow as a developer.
            </p>
          </div>
          <div className="buttonContainer flex justify-center py-2">
            <div className="w-[71%]  ">
              <button className="tracking-tighter animate-pulse cursor-pointer w-fit font-bold text-[#FF0000] shadow-red-500/50  shadow-lg bg-[white] rounded-lg  px-3 py-1">
                Ready For Work
              </button>
            </div>
          </div>
        </div>
        <div className="navContainer flex  justify-between items-center -red-600">
          <div className="leftSide w-fit fixed h-fit z-10  top-80 leading-none flex flex-col gap-0.5  text-white tracking-tighter font-bold  ">
            <h4 className="hover:text-[#FF0000] transition ease-in-out duration-300  cursor-pointer w-fit">
              HOME
            </h4>
            <h4 className="cursor-pointer  w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              ABOUT ME
            </h4>
            <h4 className="cursor-pointer  w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              SKILLS
            </h4>
            <h4 className="cursor-pointer  w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              RECENT WORK
            </h4>
            <h4 className="cursor-pointer  w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              RESUME
            </h4>
            <h4 className="cursor-pointer  w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              EDUCATION
            </h4>
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
            <h4 className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              GIT-HUB
            </h4>
            <h4 className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              LINKEDIN
            </h4>
            <h4 className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              X
            </h4>
            <h4 className="cursor-pointer w-fit hover:text-[#FF0000] transition ease-in-out duration-300 ">
              EMAIL
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
