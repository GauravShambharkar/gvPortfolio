import React from "react";

const Skills = () => {
  return (
    <>
      <div className="w-[95%] h-screen  flex items-center justify-center relative mx-auto">
        <h1 className="text-right  text-8xl font-extrabold absolute right-0 -top-7 text-[#FF0000] tracking-tighter ">
          SKILLS,
        </h1>
        <div className=" w-[87%]  mx-auto h-[75%] flex items-center justify-center gap-10 flex-col  ">
          <div className="">
            <h1 className="text-5xl font-bold text-center tracking-tighter text-[#FF0000]">
              SKILLS, WHICH I HAVE{" "}
              <span className="underline text-[white]">
                IMPLIMENTED <br />
              </span>{" "}
              IN MY
              <span className="underline"> RECENT WORK</span>!!
            </h1>
          </div>
          <div className=" px-10  flex-wrap gap-3 w-[70%] flex items-center justify-center  ">
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
              "JAVA",
            ].map((item, id) => {
              return (
                <>
                  <h3
                    key={id}
                    className="text-black bg-gray-100 hover:underline  px-2 text-[14px] flex relative border border-[#6a6a6a] shadow-2xs items-center cursor-pointer h-8 hover:text-red-600 hover:bg-white rounded-md transition ease-in-out duration-500 hover:-translate-y-1"
                  >
                    {item}
                    <div className="size-1 animate-ping absolute bg-red-500 top-0 right-0 rounded-full text-[#FF0000]"></div>
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
