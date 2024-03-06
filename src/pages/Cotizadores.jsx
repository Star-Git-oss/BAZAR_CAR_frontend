import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignInput from "../components/SignInput";
import Navbar from "../components/Navbar";
import PromotionCarCarousel from "../components/PromotionCarCarousel";
import PreownedCarousel from "../components/PreownedCarousel";
import Carousel from "react-multi-carousel";
import SellCard from "../components/SellCard";
import "react-multi-carousel/lib/styles.css";
import FooterSmall from "../components/FooterSmall";
import FeaturedCarCarousel from "../components/FeaturedCarCarousel";
import { RequestTabs } from "../components/RequestTabs";
import "../components/Tab.scss";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Contizadores = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   let isLogged = localStorage.getItem("isLogged");
  //   let freetime = localStorage.getItem("freetime");
  //   let status = localStorage.getItem("membership");
  //   if (isLogged !== "true") navigate("/signin");
  //   else if (freetime !== "true" && status !== "active") navigate("/system");
  // }, []);
  return (
    <div className="min-h-screen relative bg-gray-100 h-fit">
      <Navbar />
      <FloatingWhatsApp
        accountName={"52 1 5616002085"}
        darkMode={true}
        allowEsc={true}
        avatar="./highLightTitle.png"
        statusMessage="Bienvenido a nuestro servicio."
        chatMessage="Hola, ¿en qué puedo ayudarle?"
        phoneNumber={"52 1 5616002085"}
        onSubmit={(event, formValue) => clickSubmit(event, formValue)}
      />
      <div className="bg-gray-100 w-full h-full md:p-4 lg:p-8 flex justify-center">
        <div className="w-11/12 sm:w-5/6 md:w-4/5">
          <div className="bg-inherit w-full h-36 sm:h-36 md:h-36" />
          <p className="text-lg md:text-2xl my-4 lg:my-8 text-gray-800">
            Solicitud de Cotización
          </p>
          {/* <div className="w-full h-full"> */}
            <RequestTabs />
          {/* </div> */}
        </div>
      </div>
      {/* <FooterSmall /> */}
      <div className="absolute bottom-0 w-full bg-white h-6 border-[1px] border-gray-200 flex justify-between px-12 lg:px-40">
        <p className="text-xs">BAM 2024</p>
        <div className="flex w-fit">
          <i className="text-blue-800 fa fa-car mr-2"></i>
          <p className="text-xs"> Quotation Tool</p>
        </div>
      </div>
    </div>
  );
};
export default Contizadores;
