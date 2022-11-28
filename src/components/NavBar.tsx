import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const actionBtnAboutMe = () => {
    window.open("https://lnkd.in/eHUTHrXD", "_blank")
  }

  const actionBtnHome = () => {
    navigate('/');
  }

  return (
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
      <div className="justify-end items-center sm:hidden w-8">
        <img id="menu" alt='hambuger menu' src="./assets/menu-light.png" />				
      </div>      
    </div>
  )
}

export default NavBar;