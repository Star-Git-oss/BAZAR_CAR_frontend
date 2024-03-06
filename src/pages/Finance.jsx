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
import { vehicleOpen } from "../action/vehicle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Finance = () => {
  const src = [
    "./financiamiento.png",
    "./financiamiento2.png",
    "./financiamiento3.png",
  ];
  const handleSolictaClick = () => {
    console.log("handleSolictaClick");
  };
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleKeyDown = (e) => {
    console.log(e.target.value);
    if (e.key === "Enter") setSearch(e.target.value);
  };

  const [promotionData, setPromotionData] = useState([]);
  const [featuredData, setFeaturedData] = useState([]);
  useEffect(() => {
    dispatch(
      vehicleOpen({ search: search !== undefined ? search : "", num: 12 })
    )
      .then((res) => {
        setPromotionData([...res.data]);

        if (search.length > 0) {
          const toastMessage = (
            <>
              <p>AUTOS EN PROMOCION:</p>
              <p>&nbsp;&nbsp;&nbsp;Totales: {res.result.total}</p>
              <p>&nbsp;&nbsp;&nbsp;Resultado: {res.result.count}</p>
            </>
          );

          if (res.result.count > 0) {
            toast.info(toastMessage, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              theme: "colored",
              draggable: true,
            });
          } else {
            toast.error(toastMessage, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              theme: "colored",
              draggable: true,
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "No se puede comunicar con el servidor. Por favor, compruebe su conexión.",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            theme: "colored",
            draggable: true,
          }
        );
      });
    dispatch(
      vehicleOpen({ search: search !== undefined ? search : "", num: 12 })
    )
      .then((res) => {
        setFeaturedData([...res.data]);

        if (search.length > 0) {
          const toastMessage = (
            <>
              <p>AUTOS DESTACADOS:</p>
              <p>&nbsp;&nbsp;&nbsp;Totales: {res.result.total}</p>
              <p>&nbsp;&nbsp;&nbsp;Resultado: {res.result.count}</p>
            </>
          );

          if (res.result.count > 0) {
            toast.info(toastMessage, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              theme: "colored",
              draggable: true,
            });
          } else {
            toast.error(toastMessage, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              theme: "colored",
              draggable: true,
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "No se puede comunicar con el servidor. Por favor, compruebe su conexión.",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "colored",
            draggable: true,
          }
        );
      });
  }, [search]);
  return (
    <>
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
        <PromotionCarCarousel search={search} promotionData={promotionData} />
      </div>
      <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4">
        <p className="text-blue-800 font-bold">AUTOS DESTACADOS</p>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        {/* <div className="w-full px-6"> */}
        <FeaturedCarCarousel search={search} featuredData={featuredData} />
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
};
export default Finance;
