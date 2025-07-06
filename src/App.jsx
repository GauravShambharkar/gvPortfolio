import "./App.css";

function App() {
  return (
    <>
      <div className="w-[95%] border mx-auto bg-[#CBCBCB]">
        <div className="headerContainer border ">
          <h1 className=" text-center text-9xl font-extrabold text-[#FF0000] tracking-tighter ">
            MYSELF GAURAV,
          </h1>
          <div className="paraContainer border flex justify-center ">
            <p className="w-[71%] border leading-none text-[#676767]">
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
            <div className="w-[71%] border ">
              <h4 className="tracking-tighter w-fit font-bold text-[#fe6c6c] bg-[white] rounded-lg border px-3 py-1">
                Ready For Work
              </h4>
            </div>
          </div>
        </div>
        <div className="navContainer flex border justify-between items-center border-red-600">
          <div className="leftSide w-fit fixed h-fit z-10 top-80 leading-none text-left text-white tracking-tighter font-bold border ">
            <h4 className="text-red-500">HOME</h4>
            <h4>ABOUT ME</h4>
            <h4>SKILLS</h4>
            <h4>RECENT WORK</h4>
            <h4>RESUME</h4>
            <h4>EDUCATION</h4>
          </div>
          <div className="center flex w-full justify-center">
            <div className="middle border z-10 w-81">
              <img
                className="shadow-2xs grayscale"
                src="./src/ps-bg-removed.png"
                alt=""
              />
            </div>
            <div className="blurDot size-120 -z-0 rounded-full blur-3xl text-[#FF0000] absolute bg-black/30">
              .
            </div>
          </div>

          <div className="rightSide w-fit fixed right-9 z-10 h-fit top-85 leading-none text-right text-white tracking-tighter font-bold border">
            <h4>GIT-HUB</h4>
            <h4>LINKEDIN</h4>
            <h4>X</h4>
            <h4>EMAIL</h4>
          </div>
        </div>
      </div>

      <div className="w-[95%] h-screen border flex items-center mx-auto">
        <h1 className="text-left border text-9xl font-extrabold absolute top-165 text-[#FF0000] tracking-tighter ">
          ABOUT ME,
        </h1>
        <div className="border w-[97%] mx-auto h-[95%]  ">
          <h2>hellow this is an about page</h2>
        </div>
      </div>

      <div className="w-[95%] h-screen border mx-auto">
        <h1 className="text-right border text-9xl font-extrabold absolute right-9 top-330 text-[#FF0000] tracking-tighter ">
          SKILLS,
        </h1>
      </div>
    </>
  );
}

export default App;
