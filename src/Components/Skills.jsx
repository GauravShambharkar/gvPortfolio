import React from "react";

const Skills = () => {
  return (
    <>
      <div className="w-[95%] h-screen  flex items-center justify-center relative mx-auto">
        <h1 className="text-right  text-8xl font-extrabold absolute right-0  -top-7 text-[#FF0000] tracking-tighter ">
          SKILLS,
        </h1>
        <div className=" w-[87%]  mx-auto h-[75%] flex items-center justify-center gap-10 flex-col  ">
          <div className="">
            <h1 className="text-5xl font-bold text-center tracking-tighter text-[#2d2d2d]">
              SKILLS WHICH I HAVE{" "}
              <span className="bg-red-500 text-white">IMPLIMENTED</span> IN MY{" "}
              <br />
              <span className="underline">RECENT PROJECTS</span>!!
            </h1>
          </div>
          <div className=" px-10 border flex-wrap gap-3 w-[70%] flex items-center justify-center  ">
            {[
              "HTML5",
              "CSS",
              "JAVASCRIPT",
              "REACTJS",
              "TAILWIND",
              "NODEJS",
              "EXPRESSJS",
              "MONGODB",
              "SQL",
              "GIT",
              "Oracle",
            ].map((item, id) => {
              return (
                <>
                  <h3
                    key={id}
                    className="text-black bg-white px-2 flex relative items-center cursor-pointer h-8 rounded-lg hover:bg-[#e7e7e7] transition ease-in-out duration-500 hover:-translate-y-1"
                  >
                    {item}
                    <div className="size-1 animate-ping absolute bg-red-500 top-0 right-0 rounded-full text-red-500"></div>
                  </h3>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
