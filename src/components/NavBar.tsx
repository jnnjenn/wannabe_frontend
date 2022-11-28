import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const actionBtnAboutMe = () => {
    window.open("https://lnkd.in/eHUTHrXD", "_blank")
  }

  const actionBtnHome = () => {
    navigate('/');
  }

  return (
    <>
      <div className="z-40 mobile:px-10 lg:px-[10vw] lg:text-[26px] lg:h-[80px] mobile:h-[70px] w-[100vw] flex text-5xl items-center justify-between shadow-md fixed bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="mobile:w-10 lg:w-[3vmax] md:w-10 txt-main font-bold">
          SWAPI
        </div>
        <ul className="lg:justify-around md:justify-between items-center sm:flex hidden">
          <li className="list-none inline-block mx-4 hover:border-b-4 border-yellow-300 cursor-pointer p-2 transition-all txt-dark " onClick={actionBtnHome}>Home</li>
          <li className="list-none inline-block mx-4 hover:border-b-4 border-yellow-300 cursor-pointer p-2 transition-all txt-dark " onClick={actionBtnAboutMe}>About Me</li>
          <li className="list-none">
            <button className="text-center justify-center flex cursor-wait">
              <img className="w-[50px]" src="../../../assets/logo_jo_icon.png" alt="Jenniffer Orjuela | FullStack Software Engineer" id="icon" />
            </button>
          </li>
        </ul>
        <div className="justify-end items-center text-white sm:hidden w-8 cursor-pointer" onClick={() => setIsNavOpen((prev) => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>				
        </div>      
      </div>

      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          <li className="list-none border-b-4 border-yellow-300">
            <button className="text-center justify-center flex cursor-wait">
              <img className="w-[300px]" src="../../../assets/logo_jo.png" alt="Jenniffer Orjuela | FullStack Software Engineer" id="icon" />
            </button>
          </li>
          <li>
            <button  onClick={actionBtnHome}>
              Home
            </button>
          </li>
          <li>
            <button  onClick={actionBtnHome}>
              About Me
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBar;