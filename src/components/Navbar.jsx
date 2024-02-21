import { useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleMenuClick = () => {
    setMenu((prev) => !prev);
  };
  const handleIniciarClick = () => {
    navigate("/signin");
  };
  const handleUsadosClick = () => {
    navigate("/semi");
  };
  const handleFinanceClick = () => {
    navigate("/finance");
  };
  const handleGarantClick = () => {
    navigate("/garantia");
  };

  return (
    // <div className="w-full fixed">
    <div className="bg-white fixed w-full h-24 sm:h-28 md:h-32 mx-auto flex flex-row justify-between md:justify-evenly px-8 sm:px-20 md:px-4 pt-6 items-center border-sky-950  border-t-0 rounded-b-2xl shadow-2xl shadow-slate-400" style={{zIndex: 9999}}>
      <img
        src="./Logo bazar 1.png"
        className="w-[230px] h-[55px] cursor-pointer sm:mb-4"
        alt="logo"
        onClick={handleLogoClick}
      />
      <div className="transition-transform relative w-2 h-20">
        <XIcon className={`h-10 md:hidden absolute -translate-x-1/2 -translate-y-1/2 top-1/2 ${menu ? "visible" : "invisible"}`} onClick={handleMenuClick} />
        <MenuIcon className={`h-10 md:hidden absolute -translate-x-1/2 -translate-y-1/2 top-1/2 ${menu ? "invisible" : "visible"}`} onClick={handleMenuClick} />
      </div>
      <div
        className={`absolute right-0 drop-shadow-xl ${
          menu ? "" : "translate-x-96"
        } top-20 sm:top-24 transition transform ease-in-out delay-200 bg-white p-8 rounded-b-xl md:rounded-none md:p-0 md:bg-inherit md:relative flex flex-col md:flex-row md:w-4/5 w-fit md:justify-evenly items-center md:contents`}
      >
        <img
          src="./icono2 usados.png"
          className="w-[90px] h-[90px] cursor-pointer"
          alt="logo"
          onClick={handleUsadosClick}
        />
        <img
          src="./financiamiento1.png"
          className="w-[110px] h-[90px] cursor-pointer mt-2"
          alt="logo"
          onClick={handleFinanceClick}
        />
        <img
          src="./icono1 Garantia.png"
          className="w-[97px] h-[90px] cursor-pointer"
          alt="logo"
          onClick={handleGarantClick}
        />
        <div className="w-fit">
          <button
            className="w-[185px] h-[40px] ml-[6px] bg-blue-700 rounded-md text-white"
            onClick={handleIniciarClick}
          >
            INCIAR SESION
          </button>
          <img
            src="./Boton-Whatsapp.png"
            className="w-[200px] h-[55px]"
            alt="logo"
          />
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Navbar;
