import SignInput from "../components/SignInput";
import Navbar from "../components/Navbar";
import MasonrySection from "../components/Masonry";
import PreownedCarousel from "../components/PreownedCarousel";
import Carousel from "react-multi-carousel";
import SellCard from "../components/SellCard";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import Footer from "../components/Footer";
import NavSmall from "../components/NavSmall";
import PromotionCarCarousel from "../components/PromotionCarCarousel";
import FeaturedCarCarousel from "../components/FeaturedCarCarousel";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Landing = () => {
  // const selldata = [
  //   {
  //     src: "ejemplo de banner1.png",
  //     title: "1",
  //     price: "$200",
  //   },
  //   {
  //     src: "ejemplo de banner1.png",
  //     title: "2",
  //     price: "$300",
  //   },
  //   {
  //     src: "ejemplo de banner1.png",
  //     title: "3",
  //     price: "$400",
  //   },
  //   {
  //     src: "ejemplo de banner1.png",
  //     title: "4",
  //     price: "$500",
  //   },
  //   {
  //     src: "ejemplo de banner1.png",
  //     title: "5",
  //     price: "$600",
  //   },
  //   {
  //     src: "ejemplo de banner1.png",
  //     title: "6",
  //     price: "$700",
  //   },
  //   {
  //     src: "ejemplo de banner1.png",
  //     title: "7",
  //     price: "$800",
  //   },
  //   {
  //     src: "ejemplo de banner1.png",
  //     title: "8",
  //     price: "$900",
  //   },
  //   {
  //     src: "ejemplo de banner1.png",
  //     title: "9",
  //     price: "$1000",
  //   },
  //   {
  //     src: "ejemplo de banner1.png",
  //     title: "10",
  //     price: "$1100",
  //   },
  //   {
  //     src: "ejemplo de banner1.png",
  //     title: "11",
  //     price: "$1200",
  //   },
  // ];
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 6,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 3,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };
  return (
    <>
      <Navbar />
      <div className="bg-white w-5/6 h-24"></div>
      {/* <img src="./inicio 1.png" className="w-full" alt="inicio 1"></img> */}
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
