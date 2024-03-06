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
import { useDispatch } from "react-redux";
import PromotionCarCarouselLanding from "../components/PromotionCarCarouselLanding";
import { vehicleOpenLanding } from "../action/vehicle";

const Landing = () => {
  const [username, setUsername] = useState("");
  const [brand, setBrand] = useState("Marcas");
  const [auto, setAuto] = useState("Auto");
  const [yearMin, setYearMin] = useState("Año desde");
  const [yearMax, setYearMax] = useState("Año hasta");
  const [priceMin, setPriceMin] = useState("Precio desde");
  const [priceMax, setPriceMax] = useState("Precio hasta");
  const [searchEvent, setSearchEvent] = useState(true);
  const [data, setData] = useState([]);

  const src = ["./inicio1.png", "./inicio2.png", "./inicio3.png"];
  const dispatch = useDispatch();
  const handleWhatsAppClick = () => {
    console.log("handleWhatsAppClick");
  };
  const clickSubmit = (event, formValue) => {
    console.log(event.target, formValue);
  };

  useEffect(() => {
    let brandValue = brand,
      autoValue = auto,
      yearMinValue = yearMin,
      yearMaxValue = yearMax,
      priceMinValue = priceMin,
      priceMaxValue = priceMax;
    if (brandValue === "Marcas") brandValue = "";
    if (yearMinValue.length > 4) yearMinValue = "0";
    if (yearMaxValue.length > 4) yearMaxValue = "100000";
    if (
      priceMinValue === "Precio desde" ||
      priceMinValue === "Sin precio mínimo"
    )
      priceMinValue = "0";
    else if (priceMinValue === "$50,000") priceMinValue = "50000";
    else priceMinValue = "0";
    if (
      priceMaxValue === "Precio hasta" ||
      priceMaxValue === "Sin precio máximo."
    )
      priceMaxValue = "100000000000";
    else if (priceMaxValue === "$60,000") priceMaxValue = "60000";
    else if (priceMaxValue === "$70,000") priceMaxValue = "70000";
    else if (priceMaxValue === "$80,000") priceMaxValue = "80000";
    else if (priceMaxValue === "$90,000") priceMaxValue = "90000";
    else if (priceMaxValue === "< $90,000") priceMaxValue = "90000";
    else priceMaxValue = "100000000000";

    console.log(
      "   brandValue: ",
      brandValue,
      "   autoValue: ",
      autoValue,
      "   yearMinValue: ",
      yearMinValue,
      "   yearMaxValue: ",
      yearMaxValue,
      "   priceMinValue: ",
      priceMinValue,
      "   priceMaxValue: ",
      priceMaxValue
    );
    dispatch(
      vehicleOpenLanding({
        brand: brandValue,
        auto: autoValue,
        yearMin: yearMinValue,
        yearMax: yearMaxValue,
        priceMin: priceMinValue,
        priceMax: priceMaxValue,
      })
    )
      .then((res) => {
        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchEvent]);
  useEffect(() => {
    let isLogged = localStorage.getItem("isLogged");
    let username = localStorage.getItem("username");
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
        avatar="./highLightTitle.png"
        statusMessage="Bienvenido a nuestro servicio."
        chatMessage="Hola, ¿en qué puedo ayudarle?"
        phoneNumber={"52 1 5616002085"}
        onSubmit={(event, formValue) => clickSubmit(event, formValue)}
      />
      <div className="w-full h-fit overflow-hidden relative mb-4">
        <PreownedCarousel src={src} />
        {/* <Calculate /> */}
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
        <PromotionCarCarouselLanding data={data} />
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
