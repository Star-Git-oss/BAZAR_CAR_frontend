import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignInput from "../components/SignInput";
import Navbar from "../components/Navbar";
import Carousel from "react-multi-carousel";
import SellCard from "../components/SellCard";
import "react-multi-carousel/lib/styles.css";
import FooterSmall from "../components/FooterSmall";
import PromotionCarCarousel from "../components/PromotionCarCarousel";
import FeaturedCarCarousel from "../components/FeaturedCarCarousel";

const Garantia = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleKeyDown = (e) => {
    console.log(e.target.value);
    if (e.key === "Enter") setSearch(e.target.value);
  };
  // useEffect(() => {
  //   let isLogged = localStorage.getItem("isLogged");
  //   let freetime = localStorage.getItem("freetime");
  //   let status = localStorage.getItem("membership");
  //   if(isLogged !== "true") navigate("/signin");
  //   else if(freetime !== "true" && status !== "active") navigate("/system");
  // }, []);
  return (
    <>
      <Navbar />
      <div className="bg-white w-5/6 h-20 sm:h-24 md:h-28" />
      <img src="./garantia1.png" className="w-full h-auto min-h-[300px]" alt="garantia1"></img>
      {/* <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4 shadow-xl shadow-gray-200"> */}
      <div className="flex flex-col-reverse min-h-16 h-fit sm:flex-row justify-between items-center mx-8 mb-8 sm:mb-0 mt-8 sm:mt-2 px-4">
        <p className="text-blue-800 font-bold mt-8 sm:mt-0">AUTOS EN PROMOCION</p>
        <div className="flex items-center relative w-fit">
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
          ></img>
        </div>
      </div>
      <div className="flex justify-between items-center mx-8">
        <div className="w-full px-6">
          <PromotionCarCarousel search={search} />
        </div>
      </div>
      <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4">
        <p className="text-blue-800 font-bold">AUTOS DESTACADOS</p>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        <div className="w-full px-6">
          <FeaturedCarCarousel search={search} />
        </div>
      </div>
      <FooterSmall />
    </>
  );
};
export default Garantia;
