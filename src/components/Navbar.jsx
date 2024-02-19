import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignInput from "../components/SignInput";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
  }
  const handleIniciarClick = () => {
    navigate('/signin');
  };
  const handleUsadosClick = () => {
    navigate('/semi');
  };
  const handleFinanceClick = () =>{
    navigate('/finance');
  }
  const handleGarantClick = () => {
    navigate('/garantia');
  }

  return (
    // <div className="w-full fixed">
      <div className="bg-white fixed w-full w-5/6 h-32 mx-auto flex flex-row justify-evenly px-4 items-center border-sky-950  border-t-0 rounded-b-2xl shadow-2xl shadow-slate-400 z-20">
        <img
          src="./Logo bazar 1.png"
          className="w-[230px] h-[55px] cursor-pointer"
          alt="logo"
          onClick={handleLogoClick}
        />
        <img
          src="./icono2 usados.png"
          className="w-[120px] h-[120px] cursor-pointer"
          alt="logo"
          onClick={handleUsadosClick}
        />
        <img
          src="./financiamiento1.png"
          className="w-[150px] h-[120px] cursor-pointer"
          alt="logo"
          onClick={handleFinanceClick}
        />
        <img
          src="./icono1 Garantia.png"
          className="w-[130px] h-[120px] cursor-pointer"
          alt="logo"
          onClick={handleGarantClick}
        />
        <div className="w-fit">
          <button
            className="w-[185px] h-[50px] ml-[6px] bg-blue-700 rounded-md text-white"
            onClick={handleIniciarClick}
          >
            INCIAR SESION
          </button>
          <img
            src="./Boton-Whatsapp.png"
            className="w-[200px] h-[60px]"
            alt="logo"
          />
        </div>
      </div>
    // </div>
  );
};
export default Navbar;
