import "./App.css";
import { NavLink,Navigate } from "react-router-dom";
import Nav from "./Headers/Nav";
import logo from "./Screenshot (185).png";
import Card from "./Components/Card";
import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "./darkmode/Switcher";
import SignFilter from "./assets/SignFilter.jpg";
function Projects() {
  const data1 = {
    title: "Netflix Clone",
    content:
      "My experience on this project was awsome in learning the react . And this my first project in react.",
    tag1: "React",
    tag2: "Styled components",
    img: "https://logodix.com/logo/707805.jpg",
  };
  const data2 = {
    title: "Youtube",
    content:
      "This is my first project in React Native, it is cross-platform framework. then I am a beginner level at this cross-platform app development. ",
    tag1: "React-native",
    tag2: "Styled components",
    img: "https://www.pixelstalk.net/wp-content/uploads/2016/05/Youtube-Wallpapers-HD.png",
  };

  const data3 = {
    title: "Signfilter",
    content:
      "A SignFilter is a Hand recogntion tool. This my first step into the AI and ML. And this was developed on Python3. ",
    tag1: "Artificial Intelligence",
    tag2: "Machine learning",
    img: SignFilter,
  };

  const data4 = {
    title: "New Portfolio",
    content: "My new portfolio, it was developed by React with Tailwind css.",
    tag1: "React",
    tag2: "Tailwind css",
    img: logo,
  };
  const state1 = {
    bg: "bg-[#f0e7db]",
  };

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

  return (
    <>
      <div className={`w-full h-full ${states.bg} `}>
        <Nav />

        <div className="p-[2rem] flex pt-20 justify-center">
          <img src={logo} alt="Logo" />
        </div>
        <div className="w-full h-full ">
          <div>
            <div className="flex justify-center h-full   flex-wrap">
              <NavLink to="https://netflixclone-ten-gamma.vercel.app/">
                
                <Card {...data1} />
              </NavLink>

              <NavLink to={"https://github.com/vignesh-wikki/YoutubeClone"}>
                <Card {...data2} />
              </NavLink>
              <NavLink to={"https://github.com/vignesh-wikki/SignFilter"}> <Card {...data3} /></NavLink>
             
              <NavLink to={"/"}>

                <Card {...data4} />
              </NavLink>
            </div>
          </div>
          <div
            className={`${states.footer_text} mt-3 pb-5 flex justify-center`}
          >
            <p>© 2023 Vignesh. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
