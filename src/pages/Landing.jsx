import SignInput from "../components/SignInput";
import Navbar from "../components/Navbar";
import MasonrySection from "../components/Masonry";
import PreownedCarousel from "../components/PreownedCarousel";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import Footer from "../components/Footer";
import PromotionCarCarousel from "../components/PromotionCarCarousel";
import FeaturedCarCarousel from "../components/FeaturedCarCarousel";
import { useEffect } from "react";
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Landing = () => {

  useEffect(() => {
    let isLogged = localStorage.getItem("isLogged");
    if (isLogged !== "true") {
      toast.warning("Inicia sesión para obtener más información.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        draggable: true,
      });
    };

    const currentURL = window.location.href;
    const urlParams = new URLSearchParams(currentURL);

    // Get the value of a specific query parameter
    const queryParamValue = urlParams.get("query");
    console.log("Query parameter value:", queryParamValue);

    let str = "";

    // Get all query parameters
    for (const param of urlParams) {
      let index = param[0].indexOf("?");
      str = param[0].slice(index + 1, param[0].length);
    }
    if(str === "uploadsuccess") {
      toast.success("Enhorabuena. Ha cargado correctamente la información de su vehículo.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        draggable: true,
      });
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-white w-5/6 h-24"></div>
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
      <PreownedCarousel />
      <MasonrySection />
      {/* <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4 shadow-xl shadow-gray-200"> */}
      <div className="h-16 flex flex-col-reverse md:flex-row justify-between items-center mx-8 mt-16 mb-4 gap-2 md:gap-0 md:mb-0 md:mt-2 px-4">
        <p className="text-blue-800 font-bold md:mb-0">AUTOS EN PROMOCION</p>
        <div className="flex items-center relative w-fit">
          <SignInput
            style={"mb-0"}
            placeholder={"BUSCA TU AUTO..."}
            width={"w-[250px]"}
          />
          <img
            src="./buscar-lupa.png"
            className="absolute right-2 w-6 h-6 lg:mr-4"
            alt="buscar-lupa"
          />
        </div>
      </div>
      <div className="w-full px-8">
        <PromotionCarCarousel />
      </div>
      <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4">
        <p className="text-blue-800 font-bold">AUTOS DESTACADOS</p>
      </div>
      <div className="w-full px-8">
        <FeaturedCarCarousel />
      </div>
      <Footer />
    </>
  );
};
export default Landing;
