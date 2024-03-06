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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { vehicleOpen } from "../action/vehicle";
import Footer from "../components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

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
      <img
        src="./garantia1.png"
        className="w-full h-auto min-h-[300px]"
        alt="garantia1"
      ></img>
      {/* <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4 shadow-xl shadow-gray-200"> */}
      <div className="flex flex-col-reverse min-h-16 h-fit sm:flex-row justify-between items-center mx-8 mb-8 sm:mb-0 mt-8 sm:mt-2 px-4">
        <p className="text-blue-800 font-bold mt-8 sm:mt-0">
          AUTOS EN PROMOCION
        </p>
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
          <PromotionCarCarousel search={search} promotionData={promotionData} />
        </div>
      </div>
      <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4">
        <p className="text-blue-800 font-bold">AUTOS DESTACADOS</p>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        <div className="w-full px-6">
          <FeaturedCarCarousel search={search} featuredData={featuredData} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Garantia;
