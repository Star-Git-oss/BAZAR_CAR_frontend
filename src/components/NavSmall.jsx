import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignInput from "../components/SignInput";

const NavSmall = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
  }

  return (
    // <div className="w-full fixed">
      <div className="bg-white fixed w-full h-32 mx-auto flex md:flex-row justify-between px-4 items-center border-sky-950  border-t-0 rounded-b-2xl shadow-2xl shadow-gray-400 z-20">
        <img
          src="./Logo bazar 1.png"
          className="w-[230px] h-[55px] cursor-pointer"
          alt="logo"
          onClick={handleLogoClick}
        />
        <div className="flex items-center relative w-fit">
          <SignInput style={"mb-0"} placeholder={"Buscar por marca o modelo..."} width={"w-[300px] md:w-[500px]"}/>
          <img src="./buscar-lupa.png" className="absolute right-2 w-6 h-6 lg:mr-4 focus:border-blue-800" alt="buscar-lupa"></img>
        </div>
      </div>
    // </div>
  );
};
export default NavSmall;
