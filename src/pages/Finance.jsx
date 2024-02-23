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

const Finance = () => {
  const src = [
    "./financiamiento.png",
    "./financiamiento2.png",
    "./financiamiento3.png",
  ];
  const handleSolictaClick = () => {
    console.log("handleSolictaClick");
  };
  const [search, setSearch] = useState("");
  const handleKeyDown = (e) => {
    console.log(e.target.value);
    if (e.key === "Enter") setSearch(e.target.value);
  };
  const navigate = useNavigate();
  useEffect(() => {
    let isLogged = localStorage.getItem("isLogged");
    if (isLogged !== "true") navigate("/signin");
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-white w-5/6 h-20 sm:h-24 md:h-28" />
      <PreownedCarousel src={src} />
      <div className="flex flex-wrap  justify-between items-center m-8 px-4 gap-4">
        <p className="text-blue-800 font-bold flex-auto sm:flex-grow-0 w-full md:w-auto order-3 sm:order-1 mt-4 sm:mt-0">
          AUTOS EN PROMOCION
        </p>
        <button
          className="flex-auto sm:flex-grow-0 py-2 sm:px-8 px-2 sm:mx-8 md:mx-2 md:order-2 bg-blue-900 rounded-md text-white text-sm"
          onClick={handleSolictaClick}
        >
          SOLICTA TU CRÉDITO
        </button>
        <div className="flex-auto sm:flex-grow-0 md:order-3 sm:ml-6  items-center relative z-10">
          <SignInput
            placeholder={"BUSCA TU AUTO..."}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <img
            src="./buscar-lupa.png"
            className="absolute right-2 top-2 w-6 h-6 lg:mr-4"
            alt="buscar-lupa"
          ></img>
        </div>
      </div>
      <div className="flex justify-between items-center mx-8">
        <PromotionCarCarousel search={search} />
      </div>
      <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4">
        <p className="text-blue-800 font-bold">AUTOS DESTACADOS</p>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        {/* <div className="w-full px-6"> */}
        <FeaturedCarCarousel search={search} />
        {/* </div> */}
      </div>
      <FooterSmall />
    </>
  );
};
export default Finance;
