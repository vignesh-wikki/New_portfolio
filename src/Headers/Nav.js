import React, { useEffect } from "react";
import { useState, useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../darkmode/Switcher";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";
function Nav() {
 

  const state1 = {
    text: "text-black",
    bg: "bg-[]",
    logo: "#d47395",
    icon_color: "black",
  };

  const state2 = {
    text: "text-white",
    logo: "black",
    icon_color: "white",
  };
 const [themed, setThemed] = useState(() => false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [states, setStates] = useState(state1);

  function onClick() {
    themed === false ? setThemed(true) : setThemed(false);

    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
      setStates(state1);
    } else {
      theme.dispatch({ type: "DARKMODE" });
      setStates(state2);
    }
  }

  useEffect(()=>{
    
  })

  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  //const [Theme,setTheme] = useState(localStorage.getItem('theme') || 'light');
  //
  //const handleCallback = () =>{
  //
  //  Theme === 'light' ? setTheme("dark") : setTheme("light")
  //  callback(Theme)
  //
  //const context = createContext(callback);

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: `${states.logo}`,
    },
  };

  return (
    <div
      className={` fixed  bg-black dark:black flex align-middle justify-start ps-[10rem] z-20 h-[4rem] w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20`}
    >
      <div className="pt-4 w-80 h-full flex justify-between">
       
          <motion.svg
          href="/"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="mb-2 item cursor-pointer"
          >
            <motion.path
              d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        
        <NavLink
          to="/projects"
          className={`${states.text} invisible md:visible text-xl cursor-pointer hover:decoration-black`}
        >
          Projects
        </NavLink>
        <NavLink
          to="https://github.com/vignesh-wikki"
          className={`${states.text} invisible md:visible text-xl cursor-pointer hover:decoration-black`}
        >
          <i class="fa fa-github"></i> Source
        </NavLink>
        <NavLink
          to="/contact"
          className={`${states.text} invisible md:visible text-xl cursor-pointer hover:decoration-black`}
        >
          Contact
        </NavLink>
      </div>

      <div className="pt-5  absolute right-8 md:invisible sm:visible ">
        <button onClick={toggleNav} className="btn ">
          <i
            style={{
              fontSize: "24",
              color: `${states.icon_color}`,
            }}
            className="fa "
          >
            &#xf0c9;
          </i>
        </button>
      </div>
      <div className=" absolute right-20 pt-4">
        <DarkModeToggle checked={themed} onChange={() => onClick()} size={56} />
      </div>

      {toggleMenu && (
        <div className="mt-16 bg-white absolute top-1 right-8 p-8">
          <NavLink
            className=" hover:bg-cyan-100 hover:rounded-md block cursor-pointer p-2"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:bg-cyan-100 hover:rounded-md block cursor-pointer p-2"
            to="/projects"
          >
            Projects
          </NavLink>

          <NavLink
            className="hover:bg-cyan-100 hover:rounded-md block cursor-pointer p-2"
            to="https://github.com/vignesh-wikki"
          >
            Source
          </NavLink>
          <NavLink
            className="hover:bg-cyan-100 hover:rounded-md block cursor-pointer p-2"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Nav;
