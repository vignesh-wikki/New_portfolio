import "./App.css";
import Nav from "./Headers/Nav";
import logo from "./Screenshot (185).png";
import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "./darkmode/Switcher";
import emailIcon from "./assets/love-letter.png";
import emailjs from "@emailjs/browser";
import Animate from "./Animate";
function Contact() {
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0ptt2s6",
      "template_027y6dj",
      e.target,
      "Vi9iqGhmL_RmVCI7n"
    );
  };

  return (
    <>
      <div className={`w-full h-full ${states.bg} `}>
        <Nav />
        <Animate>
          <div className="p-[2rem] flex pt-20 justify-center">
            <img src={logo} alt="Logo" />
          </div>
        </Animate>
        <Animate>
          <div className="w-full h-full flex justify-center  flex-wrap">
            <Animate>
              {" "}
              <div className=" w-[16rem] h-[5.5rem] mx-3  mb-2 bg-[#fef4f5] flex p-4 rounded-xl">
                <img src={emailIcon} alt="email" className=" m-1 w-10  h-10" />
                <Animate>
                  <p className="pt-4 py-4 text-gray-500">
                    vignesha445@gmail.com
                  </p>
                </Animate>
              </div>
            </Animate>

            <Animate>
              <div className=" w-[16rem] h-[5.5rem] mb-2 mx-3    bg-[#f2f7fb] flex p-4  rounded-xl">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3137/3137807.png"
                  alt="email"
                  className=" m-1 w-10  h-10"
                />
                <Animate>
                  <p className="pt-4 py-4 text-gray-500">+917639851567</p>
                </Animate>
              </div>
            </Animate>
          </div>
        </Animate>
        <div className="w-full h-full">
          <div className="flex justify-center p-[2rem]">
         
            <form className="w-full max-w-sm" onSubmit={sendEmail}>
             <Animate> <div className="md:flex md:items-center mb-6">
                
                  <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                      Full Name
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      type="text"
                      name="user_name"
                      placeholder="Vignesh Shivan"
                      required
                    />
                  </div>
             
              </div></Animate>

              <Animate> <div className="md:flex md:items-center mb-6">
                
                  {" "}
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      required
                    >
                      Email
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      name="user_email"
                      type="email"
                      placeholder="wikki@gmail.com"
                    />
                  </div>
              
              </div></Animate>

              <Animate> <div className="md:flex md:items-center mb-6">
           
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      required
                    >
                      Your message
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <textarea
                      rows="8"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your thoughts here..."
                      name="message"
                    ></textarea>
                  </div>
                
              </div></Animate>

              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                 
                    {" "}
                   <Animate><button
                      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      onSubmit={sendEmail}
                    >
                      Send mail
                    </button></Animate> 
                  
                </div>
              </div>
            </form>
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

export default Contact;
