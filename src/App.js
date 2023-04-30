import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Nav from "./Headers/Nav";
import logo from "./Screenshot (185).png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ThemeContext } from "./darkmode/Switcher";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const state1 = { bg: "bg-[#f0e7db]", text: "text-black" };

  const state2 = {
    bg: "bg-[#202023]",
    text: "text-[#e9e9e9]",
    footer_text: "text-[#525252]",
  };

  const [states, setStates] = useState(state1);
  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  useEffect(() => {
    if (darkMode) {
      setStates(state2);
    } else {
      setStates(state1);
    }
  }, [darkMode]);

  //const callback = payload => {
  //setState(payload)
  //  console.log(state)

  //if(state === "light"){
  //  setStates(state1)
  //}else{
  //  setStates(state2)
  //}

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Vignesh-resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Vignesh-resume.pdf";
        alink.click();
      });
    });
  };

  const navigate = useNavigate();

  const NaviToProject = () => {
    navigate("/projects");
  };

  return (
    <>
      <div className={` w-full h-full ${states.bg} `}>
        <Nav />
        <div className="p-[2rem]">
          <div className="flex pt-20 justify-center">
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex justify-center ">
            <div className=" pt-2 flex align-middle justify-center  w-[31rem] h-10  text-black backdrop-blur-sm bg-white/30  rounded-md overflow-hidden shadow-lg">
              <p className={`${states.text}  font-medium`}>
                Hello, I'm a CSBS junior at KSRCT!
              </p>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className=" w-[31rem] mt-3">
              <div className={`${states.text} text-4xl font-semibold`}>
                <svg viewBox="0 0 1320 300">
                  <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                    VIGNESH
                  </text>
                </svg>
              </div>

              <div className=" mt-3 flex flex-col lg:flex-row ">
                <h4 className={`${states.text} tracking-normal pt-2`}>
                  2rd year B.Tech. CSBS undergrad{" "}
                  <span className="text-[#d47395]">(Full Stack Developer)</span>
                </h4>

                <div className="mt-3 w-24 h-24 ">
                  <img
                    className="w-full h-full rounded-[90px]"
                    src={
                      "https://img.freepik.com/premium-vector/happy-smiling-young-man-avatar-3d-portrait-man-cartoon-character-people-vector-illustration_653240-187.jpg"
                    }
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[31rem] mt-3">
              <div className="text-[#525252] font-medium text-2xl w-16  border-b-[5px] border-[#525252]">
                <h1 className={`${states.text} `}>About</h1>
              </div>
              <p className={`mt-5 ${states.text} `}>
                Hello! 👋 I am Vignesh a 2rd year Computer Science and Business
                System undergrad at KSR College of Technology, Tamilnadu, India.
                I enjoy taking complex problems and turning them into simple and
                beautiful webpages, I also love the logic and structure of
                coding and always strive to write elegant and efficient code
                whether it be C++, Python, HTML, CSS or JavaScript. When I'm not
                coding, you'll find me watching movies, hanging out with my
                friends and exploring the beauty of World.
              </p>
              <div className=" flex justify-center pt-3 pb-3 border-none ">
                <button
                  onClick={NaviToProject}
                  className=" hover:bg-teal-800 text-lg text-white  w-44 h-10 rounded-lg bg-[#319795] hover:"
                >
                  My portfolio
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[31rem] mt-3">
              <div
                className={`${states.text} text-[#525252] font-medium text-2xl w-8  border-b-[5px] border-[#525252]`}
              >
                <h1 className="">Bio</h1>
              </div>
              <div className="mt-5">
                <span
                  className={`${states.text} text-lg font-bold text-[#525252] pe-5`}
                >
                  2003
                </span>
                <span className={`${states.text}`}>
                  Born in Namakkal, India.
                </span>
              </div>
              <div className="mt-1">
                <span
                  className={`${states.text} text-lg font-bold text-[#525252] pe-5`}
                >
                  2021
                </span>
                <span className={`${states.text}`}>
                  Started B.tech. in CSBS at KSRCT.
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[31rem] mt-3">
              <div
                className={`${states.text} text-[#525252] font-medium text-2xl w-8  border-b-[5px] border-[#525252]`}
              >
                <h1 className={`${states.text}`}>I ♥</h1>
              </div>
              <div className={`${states.text} mt-5 ms-8 `}>
                Coding, Music, Movies , Photography.
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[31rem] mt-3">
              <div className="text-[#525252] font-medium text-2xl w-36  border-b-[5px] border-[#525252]">
                <h1 className={`${states.text}`}>Achievements</h1>
              </div>
              <div className={`${states.text} mt-5`}>
                <ul>
                  <span>●</span>
                  <li>Codechef </li>
                  <span>●</span>
                  <li>Hackathon</li>
                  <span>●</span>
                  <li>College competitive programming contest</li>
                  <span>●</span>
                  <li>Intra College competitive programming contes</li>
                  <span>●</span>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[31rem] mt-3">
              <div className="text-[#525252] font-medium text-2xl w-32  border-b-[5px] border-[#525252]">
                <h1 className={`${states.text}`}>On the web</h1>
              </div>

              <a
                href="https://github.com/vignesh-wikki"
                className="hover:cursor-pointer font-bold  hover:decoration-blue-700 text-[#347f80] flex align-middle justify-center  mt-3 hover:underline underline-offset-4 hover:bg-cyan-100  w-44 h-10 rounded-md"
              >
                <p className="mt-2 me-2 ">
                  <AiFillGithub />
                </p>
                <div className="mt-1">
                  <p> @Vignesh-Wikki</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/vignesh-vicky-772810224/"
                className="hover:cursor-pointer font-bold  hover:decoration-blue-700 text-base text-[#347f80] flex align-middle justify-center  mt-3 hover:underline underline-offset-4 hover:bg-cyan-100  w-44 h-10 rounded-lg"
              >
                <p className="mt-2 ms-2 me-2 ">
                  <AiFillLinkedin />
                </p>
                <div className="mt-1">
                  <p>@Vignesh-Shivan</p>
                </div>
              </a>

              <a
                href=""
                className="hover:cursor-pointer font-bold text-[#347f80] flex align-middle justify-center  mt-3 hover:underline hover:decoration-blue-700 underline-offset-4 hover:bg-cyan-100  w-44 h-10 rounded-md"
              >
                <p className="mt-2 me-2 ">
                  <AiFillGithub />
                </p>
                <div className="mt-1">
                  <p> @Vignesh-Wikki</p>
                </div>
              </a>
              <div className=" flex justify-center pt-3 pb-3 border-none ">
                <button
                  onClick={onButtonClick}
                  className=" hover:bg-teal-800 text-lg text-white  w-52 h-10 rounded-lg bg-[#319795] "
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>{" "}
          <div className=" mt-5  flex justify-center">
            <p className={`${states.footer_text}`}>
              © 2023 Vignesh. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
