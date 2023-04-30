import "./App.css";
import Nav from "./Headers/Nav";
import logo from "./Screenshot (185).png";
import React, { useState, useContext, useEffect} from "react";
import { ThemeContext } from "./darkmode/Switcher";

import emailjs from "@emailjs/browser";
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
    )
    
  };

  return (
    <>
      <div className={`w-full h-full ${states.bg} `}>
        <Nav />

        <div className="p-[2rem] flex pt-20 justify-center">
          <img src={logo} alt="Logo" />
        </div>

        <div className="w-full h-full">
        <div className="flex justify-center p-[2rem]">
        <form className="w-full max-w-sm" onSubmit={sendEmail} >
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        Full Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" name="user_name" placeholder="Vignesh Shivan" required/>
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" required>
        Email
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="user_email"  type="email" placeholder="wikki@gmail.com"/>
    </div>
  </div>



  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
       <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" required>
       Your message
      </label>
    </div>
    <div className="md:w-2/3">
    <textarea rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." name="message"></textarea>
    </div>
  </div>




  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" onSubmit={sendEmail}>
        Send mail
      </button>
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
