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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterSmall from "../components/FooterSmall";
import { useDispatch } from "react-redux";
import { vehicleGroupOpen } from "../action/vehicle";

const ViewPort = () => {
  const src = ["./inicio1.png", "./inicio2.png", "./inicio3.png"];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [description, setDescriptionInfo] = useState("");
  const [mainImg, setMainImg] = useState("");
  const [selldata, setSellData] = useState([]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    const currentURL = window.location.href;
    const urlParams = new URLSearchParams(currentURL);

    // Get the value of a specific query parameter
    const queryParamValue = urlParams.get("query");
    console.log("Query parameter value:", queryParamValue);

    let str = "";

    // Get all query parameters
    for (const param of urlParams) {
      let index = param[0].indexOf("?");
      str = param[0].slice(index + 2, param[0].length);
    }
    dispatch(vehicleGroupOpen({ str }))
      .then((res) => {
        setSellData(prev => res);
        setMainImg(res[res.length-1]);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleContactarClick = () => {
    console.log("handleContactarClick");
  };
  const handleCotizadorClick = () => {
    console.log("handleCotizadorClick");
    navigate("/credito");
  };
  const handleRentaClick = () => {
    console.log("handleRentaClick");
    navigate("/renta");
  };
  const handleImgClick = (item) => {
    setMainImg(item);
  }
  useEffect(() => {
    let isLogged = localStorage.getItem("isLogged");
    if (isLogged !== "true") navigate("/signin");
  }, []);
  return (
    <>
      <NavSmall />
      <div className="bg-white w-5/6 h-32"></div>
      <div className="flex md:flex-row flex-col justify-between h-full+ w-full gap-8 p-8">
        <div className="w-full md:w-1/2">
          <p>Inicio/Autos de Renta/ Marca /Version</p>
          <div className="flex flex-col md:flex-row p-10">
            <p className="font-bold text-lg md:text-xl">Kia Sporte 2020</p>
            &nbsp;
            <p className="text-md md:text-lg">Se plus Sedan Estandar</p>
          </div>
          <img
            src={"http://localhost:5005/uploads/" + mainImg}
            className="right-2 h-auto w-full lg:mr-4"
            alt="arrendamiento3"
          />
          <div className="w-full mt-10">
            <Carousel
              className="pb-6 h-40"
              responsive={responsive}
              showDots={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={200000}
              dotListClass="custom-dot-list-style"
              slidesToSlide={1}
            >
              {selldata.map((item) => (
                <img
                  src={"http://localhost:5005/uploads/" + item}
                  onClick={() => handleImgClick(item)}
                  key={item.src}
                  className="w-full h-full object-cover"
                />
              ))}
            </Carousel>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md: border-[1px] border-black pb-4">
          <div className="flex flex-row w-full h-52 gap-4 p-4 md:p-6 lg:px-12 lg:py-6">
            <div className="w-1/3 h-full justify-between flex flex-col">
              <div className="">
                <p className="w-full text-left text-sm text-sky-900">
                  Precio de Contado
                </p>
                <p className="w-full text-left text-md md:text-lg font-bold">
                  $220,000.00
                </p>
              </div>
              <div className="">
                <p className="w-full text-left text-sm md:text-md">
                  Kilometraje:
                </p>
                <p className="w-full text-left text-sm md:text-md font-bold">
                  56000
                </p>
              </div>
              <div className="">
                <p className="w-full text-left text-sm md:text-md">
                  Transmisíon
                </p>
                <p className="w-full text-left text-sm md:text-md font-bold">
                  Estandar
                </p>
              </div>
            </div>
            <div className="w-2/3 flex flex-col justify-between items-end pr-4 gap-4">
              <button
                className="w-full h-[50px] ml-[6px] bg-green-700 rounded-md text-white max-w-[400px]"
                onClick={handleContactarClick}
              >
                Contactar a vendedor
              </button>
              <button
                className="w-full h-[50px] ml-[6px] bg-red-700 rounded-md text-white max-w-[400px]"
                onClick={handleCotizadorClick}
              >
                Cotizador crédito buen buro
              </button>
              <button
                className="w-full h-[50px] ml-[6px] bg-blue-300 rounded-md text-white max-w-[400px]"
                onClick={handleRentaClick}
              >
                Cotizador renta con opcion a compra
              </button>
            </div>
          </div>
          <textarea
            className="col-span-4 w-5/6 p-4 h-5/6 max-h-[500px] bg-gray-300 mt-4 lg:ml-4 rounded-2xl"
            maxLength={"5000"}
            value={description}
            placeholder="DESCRIPCÍON   (Caracteristicas DEL VENDEDOR)"
            onChange={(e) => setDescriptionInfo(e.target.value)}
          />
        </div>
      </div>

      <FooterSmall />
    </>
  );
};
export default ViewPort;
