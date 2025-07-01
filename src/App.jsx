import "./App.css";

function App() {
  return (
    <>
      {/* <div className="w-full h-screen bg-[#DBDBDB]  ">
        <div className="header border w-full px-12 h-fit flex flex-col ">
          <div className="box flex flex-col items-center text-center mt-5 ">
            <div className="tracking-tighter text-9xl border w-fit font-extrabold text-[#FF0000] ">
              MYSELF GAURAV,
            </div>
          </div>
          <div className="w-[55%] border text-left ml-49 text-[#676767] tracking-tighter text-l leading-none">
            I am a <span className="text-black"> software developer </span>{" "}
            passionate about crafting dynamic and user-centric web apps. With
            experience in modern technologies, I thrive on building scalable and
            intuitive web solutions. I embrace challenges as opportunities to
            learn and grow as a developer.
          </div>
        </div>
        <div className="hero  px-12 w-full h-[70%] border">
          <div className="navBar  w-fit h-fit">
            <div className="leading-none border fixed top-72 left-12 font-bold text-white  ">
              <h4 className="text-[#FF0000]">HOME</h4>
              <h4>ABOUT US</h4>
              <h4>SKILLS</h4>
              <h4>RECENT WORK</h4>
              <h4>RESUME</h4>
              <h4>EDUCATION</h4>
            </div>
            <div className="leading-none border fixed top-72 right-12 font-bold text-white  ">
              <h4 className="text-[#FF0000]">GIT-HUB</h4>
              <h4>LINKEDIN</h4>
              <h4>X WORK</h4>
            </div>
          </div>
        </div>

        <div className="w-full h-screen bg-[#DBDBDB]  ">
          <div className="tracking-tighter absolute top-163 text-9xl border font-extrabold text-[#FF0000] ">
            ABOUT US,
          </div>
        </div>
      </div> */}
      <div className="section w-full h-screen bg-[#CBCBCB] ">
        {/* //header */}
        <div className="header w-[95%] border mx-auto  ">
          <h1 className="border text-center font-bold text-9xl text-[#FF0000] tracking-tighter ">
            MYSELF GAURAV,
          </h1>
          <div className="border w-full flex justify-center text-left">
          {/* parag */}
            <div className=" border w-[71%]">
              <p className="w-fit leading-none text-[#676767]">
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
          </div>
        </div>

        {/* middle section */}

        <div className="header w-[95%] mt-1 border mx-auto flex">
          <div className="MenuContainer flex border justify-between  w-full">
            <div className="LeftMenues tracking-tighter z-10 fixed top-80 leading-none border flex flex-col justify-center font-bold text-white  ">
              <h4 className="text-[#FF0000] ">HOME</h4>
              <h4>ABOUT ME</h4>
              <h4>SKILLS</h4>
              <h4>RECENT WORK</h4>
              <h4>RESUME</h4>
              <h4>EDUCATION</h4>
            </div>
            <div className="middle_Img w-90 border flex items-center justify-center mx-auto">
              {/* <div className="flex justify-center items-center">
                <div className="blurDot size-40 rounded-full blur-3xl text-[#FF0000] absolute bg-[#FF0000]">
                  .
                </div>
              </div> */}
              <img
                className="bg-cover"
                src="https://i.pinimg.com/736x/ac/cf/4f/accf4fb26b472f897d24cb8131d6438f.jpg"
                alt=""
              />
            </div>
            <div className="RightMenues font-bold fixed top-85 z-10 right-9 text-white leading-none border flex flex-col justify-center text-right">
              <h4 className="text-[#FF0000]">GIT-HUB</h4>
              <h4>X</h4>
              <h4>LINKEDIN</h4>
            </div>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className="w-[95%] mx-auto border h-screen ">
        <h1 className="text-9xl border font-bold absolute top-168 text-[#FF0000] tracking-tighter">
          ABOUT
        </h1>
      </div>

      {/* skills section */}
      <div className="w-[95%] mx-auto border h-screen ">
        <h1 className="text-9xl border font-bold absolute top-333 right-9 text-[#FF0000] tracking-tighter">
          SKILLS
        </h1>
      </div>
    </>
  );
}

export default App;
