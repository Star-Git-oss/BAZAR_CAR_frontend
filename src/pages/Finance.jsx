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
  const selldata = [
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      title: "1",
      price: "$200",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      title: "2",
      price: "$300",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      title: "3",
      price: "$400",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      title: "4",
      price: "$500",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      title: "5",
      price: "$600",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      title: "6",
      price: "$700",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      title: "7",
      price: "$800",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      title: "8",
      price: "$900",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      title: "9",
      price: "$1000",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      title: "10",
      price: "$1100",
    },
    {
      src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
      title: "11",
      price: "$1200",
    },
  ];
  const handleSolictaClick = () => {
    console.log("handleSolictaClick");
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
      {/* <img
        src="./financiamiento.png"
        className="w-full"
        alt="financiamiento"
      ></img> */}
      {/* <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4 shadow-xl shadow-gray-200"> */}
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
          <SignInput placeholder={"BUSCA TU AUTO..."} />
          <img
            src="./buscar-lupa.png"
            className="absolute right-2 top-2 w-6 h-6 lg:mr-4"
            alt="buscar-lupa"
          ></img>
        </div>
      </div>
      <div className="flex justify-between items-center mx-8">
        {/* <div className="w-full px-6">
          <Carousel
            className="pb-6"
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            dotListClass="custom-dot-list-style"
            slidesToSlide={1}
          >
            {selldata.map((item) => (
              <SellCard
                src={item.src}
                key={item.src + item.title + item.price}
                title={item.title}
                price={item.price}
              />
            ))}
          </Carousel>
        </div> */}
        <PromotionCarCarousel />
      </div>
      <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4">
        <p className="text-blue-800 font-bold">AUTOS DESTACADOS</p>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        {/* <div className="w-full px-6"> */}
          <FeaturedCarCarousel />
        {/* </div> */}
      </div>
      <FooterSmall />
    </>
  );
};
export default Finance;
