import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Nav from "./Headers/Nav";
import logo from "./Screenshot (185).png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ThemeContext } from "./darkmode/Switcher";
import { useNavigate } from "react-router-dom";
import Animate from "./Animate"


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

  const onButtonClick = () => {
   
    fetch("Vignesh-resume.pdf").then((response) => {
      response.blob().then((blob) => {
       
        const fileURL = window.URL.createObjectURL(blob);
     
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
        <div className="p-[1.5rem]">
          <div className="flex pt-20 justify-center">
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex justify-center ">
            <div className=" pt-2 flex align-middle justify-center  w-[31rem] h-10  text-black backdrop-blur-sm bg-white/30  rounded-md overflow-hidden shadow-lg">
              <p className={`${states.text}  font-medium`}>
              <Animate>  Hello, I'm a Fullstack Developer!</Animate>
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
                <Animate>  3rd year B.Tech. CSBS undergraduate</Animate>
                  <span className="text-[#d47395]"> <Animate>(Fullstack Developer)</Animate></span>
                </h4>
<Animate>
                <div className="mt-3 w-36 h-36  overflow-hidden">
                  <img
                    className=" w-36 h-36 rounded-[90px]"
                    src={
                      "https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
                    }
                    alt="avatar"
                  />
                </div></Animate>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[31rem] mt-3">
              <div className="text-[#525252] font-medium text-2xl w-16  border-b-[5px] border-[#525252]">
                <h1 className={`${states.text} `}><Animate>About</Animate></h1>
              </div>
              <Animate>
              <p className={`mt-5 ${states.text} `}>
                Hello! 👋 I am Vignesh a 3rd year Computer Science and Business
                System undergraduate at KSR College of Technology, Tamilnadu, India.
                I enjoy taking complex problems and turning them into simple and
                beautiful webpages, I also love the logic and structure of
                coding and always strive to write elegant and efficient code
                whether it be C++, Python, HTML, CSS or JavaScript. When I'm not
                coding, you'll find me watching movies, hanging out with my
                friends and exploring the beauty of World.
              </p></Animate>
              <div className=" flex justify-center pt-3 pb-3 border-none ">
                <button
                  onClick={NaviToProject}
                  className=" hover:bg-teal-800 text-lg text-white  w-44 h-10 rounded-lg bg-[#319795] "
                >
                  My projects
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[31rem] mt-3">
              <div
                className={`${states.text} text-[#525252] font-medium text-2xl w-8  border-b-[5px] border-[#525252]`}
              >
                <h1 className=""><Animate>Bio</Animate></h1>
              </div>
              <div className="mt-5 ">
              <Animate>
                <span
                  className={`${states.text} text-lg font-bold text-[#525252] pe-5`}
                >
                 2003
                </span>
                <span className={`${states.text} `}>
                Born in Namakkal, India.
                </span></Animate>
              </div>
              <div className="mt-1">
              <Animate>
                <span
                  className={`${states.text} text-lg font-bold text-[#525252] pe-5`}
                >
                  2021
                </span>
                <span className={`${states.text}`}>
                  Started B.tech. in CSBS at KSRCT.
                </span></Animate>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[31rem] mt-3"><Animate>
              <div
                className={`${states.text} text-[#525252] font-medium text-2xl w-8  border-b-[5px] border-[#525252]`}
              >
                <h1 className={`${states.text} w-8`}>I ♥</h1>
              </div>
              <div className={`${states.text} mt-5 ms-8 `}>
                Coding, Music, Movies , Photography.
              </div></Animate>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[31rem] mt-3"><Animate>
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
                  <li>Intra College competitive programming contest</li>
                  
                </ul>
              </div></Animate>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[31rem] mt-3"><Animate>
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
              </div></Animate>
            </div>
          </div>
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
