import { useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    let isLogged = localStorage.getItem("isLogged");
    if (isLogged !== "true") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleMenuClick = () => {
    setMenu((prev) => !prev);
  };
  const handleUsadosClick = () => {
    if(isLoggedIn) navigate("/semi");
    else toast.error("Ha cerrado la sesión correctamente.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
      draggable: true,
    });
  };
  const handleFinanceClick = () => {
    if(isLoggedIn) navigate("/finance");
    else toast.error("Ha cerrado la sesión correctamente.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
      draggable: true,
    });
  };
  const handleGarantClick = () => {
    if(isLoggedIn) navigate("/garantia");
    else toast.error("Ha cerrado la sesión correctamente.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
      draggable: true,
    });
  };
  const handleIniciarClick = () => {
    if (!isLoggedIn) navigate("/signin");
    else {
      localStorage.setItem("isLogged", "false");
      setIsLoggedIn(false);
      toast.info("Ha cerrado la sesión correctamente.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        draggable: true,
      });
    }
  };

  return (
    // <div className="w-full fixed">
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <div
        className="bg-white fixed w-full h-24 sm:h-28 md:h-32 mx-auto flex flex-row justify-between md:justify-evenly px-8 sm:px-20 md:px-4 pt-6 items-center border-sky-950  border-t-0 rounded-b-2xl shadow-2xl shadow-gray-400"
        style={{ zIndex: 9999 }}
      >
        <img
          src="./Logo bazar 1.png"
          className="w-[230px] h-[55px] cursor-pointer sm:mb-4"
          alt="logo"
          onClick={handleLogoClick}
        />
        <div className="transition-transform relative w-2 h-20">
          <XIcon
            className={`h-10 md:hidden absolute -translate-x-1/2 -translate-y-1/2 top-1/2 ${
              menu ? "visible" : "invisible"
            }`}
            onClick={handleMenuClick}
          />
          <MenuIcon
            className={`h-10 md:hidden absolute -translate-x-1/2 -translate-y-1/2 top-1/2 ${
              menu ? "invisible" : "visible"
            }`}
            onClick={handleMenuClick}
          />
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
              {isLoggedIn ? "Cerrar sesión." : "INCIAR SESION"}
            </button>
            <img
              src="./Boton-Whatsapp.png"
              className="w-[200px] h-[55px]"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
