import SignInput from "../components/SignInput";
import Navbar from "../components/Navbar";
import MasonrySection from "../components/Masonry";
import PreownedCarousel from "../components/PreownedCarousel";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import Footer from "../components/Footer";
import PromotionCarCarousel from "../components/PromotionCarCarousel";
import FeaturedCarCarousel from "../components/FeaturedCarCarousel";
import { useEffect, useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Calculate from "../components/Calculate";
import SearchBox from "../components/SearchBox";
import PromotionCarCarouselLanding from "../components/PromotionCarCarouselLanding";

const Landing = () => {
  const [username, setUsername] = useState("");
  const [brand, setBrand] = useState("");
  const [auto, setAuto] = useState("");
  const [yearMin, setYearMin] = useState("");
  const [yearMax, setYearMax] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [searchEvent, setSearchEvent] = useState(true);
  // const handleKeyDown = (e) => {
  //   console.log(e.target.value);
  //   if (e.key === "Enter") setSearch(e.target.value);
  // }
  const handleWhatsAppClick = () => {
    console.log("handleWhatsAppClick");
  };
  const clickSubmit = (event, formValue) => {
    console.log(event.target, formValue);
  };
  useEffect(() => {
    let isLogged = localStorage.getItem("isLogged");
    let username = localStorage.getItem("username");
    // if (isLogged !== "true") {
    //   toast.warning("Inicia sesión para obtener más información.", {
    //     position: "bottom-right",
    //     autoClose: 5000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     theme: "colored",
    //     draggable: true,
    //   });
    // }
    if (username) {
      setUsername(username);
    }

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
    // if (str === "uploadsuccess") {
    //   toast.success(
    //     "Enhorabuena. Ha cargado correctamente la información de su vehículo.",
    //     {
    //       position: "bottom-right",
    //       autoClose: 5000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       theme: "colored",
    //       draggable: true,
    //     }
    //   );
    // }
    // else if (str === "uploadsuccesslogo") {
    //   toast.success(
    //     "Enhorabuena. Ha cargado correctamente su logotipo favorito.",
    //     {
    //       position: "bottom-right",
    //       autoClose: 5000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       theme: "colored",
    //       draggable: true,
    //     }
    //   );
    // }
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-white w-5/6 h-20 md:h-28 relative"></div>
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
      <FloatingWhatsApp
        accountName={"52 1 5616002085"}
        onClick={handleWhatsAppClick}
        darkMode={true}
        allowEsc={true}
        avatar="./logo icono1.png"
        statusMessage="Bienvenido a nuestro servicio."
        chatMessage="Hola, ¿en qué puedo ayudarle?"
        phoneNumber={"52 1 5616002085"}
        onSubmit={(event, formValue) => clickSubmit(event, formValue)}
      />
      <SearchBox
          brand={brand}
          setBrand={setBrand}
          auto={auto}
          setAuto={setAuto}
          yearMin={yearMin}
          setYearMin={setYearMin}
          yearMax={yearMax}
          setYearMax={setYearMax}
          priceMin={priceMin}
          setPriceMin={setPriceMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
          searchEvent={searchEvent}
          setSearchEvent={setSearchEvent}
        />
      <div className="w-full">
        <PreownedCarousel />
        {/* <Calculate /> */}
        
      </div>
      <MasonrySection />
      {/* <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4 shadow-xl shadow-gray-200"> */}
      <div className="md:h-24 flex flex-col-reverse md:flex-row justify-between items-center mx-8 mt-16 mb-4 gap-2 md:gap-0 md:mb-0 md:mt-2 px-4">
        <p className="text-blue-800 font-bold md:mb-0 text-center md:text-left text-md sm:text-lg md:mt-8">
          AUTOS EN PROMOCION
        </p>
        {/* <div className="flex items-center relative w-fit">
          <SignInput
            style={"mb-0"}
            placeholder={"BUSCA TU AUTO..."}
            width={"w-[250px]"}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <img
            src="./buscar-lupa.png"
            className="absolute right-2 w-6 h-6 lg:mr-4"
            alt="buscar-lupa"
          />
        </div> */}
      </div>
      <div className="w-full px-8">
        <PromotionCarCarouselLanding
          brand={brand}
          auto={auto}
          yearMin={yearMin}
          yearMax={yearMax}
          priceMin={priceMin}
          priceMax={priceMax}
          searchEvent={searchEvent}
        />
      </div>
      {/* <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4">
        <p className="text-blue-800 font-bold">AUTOS DESTACADOS</p>
      </div>
      <div className="w-full px-8">
        <FeaturedCarCarousel search={search} />
      </div> */}
      <Footer />
    </>
  );
};
export default Landing;
