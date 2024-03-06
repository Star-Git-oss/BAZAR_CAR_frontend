import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignInput from "../components/SignInput";
import Navbar from "../components/Navbar";
import "react-multi-carousel/lib/styles.css";
import FooterSmall from "../components/FooterSmall";
import PromotionCarCarousel from "../components/PromotionCarCarousel";
import FeaturedCarCarousel from "../components/FeaturedCarCarousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { vehicleOpen } from "../action/vehicle";
import Footer from "../components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Semi = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 2024 },
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
  //   {
  //     src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  //     title: "1",
  //     price: "$200",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  //     title: "2",
  //     price: "$300",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  //     title: "3",
  //     price: "$400",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  //     title: "4",
  //     price: "$500",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  //     title: "5",
  //     price: "$600",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  //     title: "6",
  //     price: "$700",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  //     title: "7",
  //     price: "$800",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  //     title: "8",
  //     price: "$900",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  //     title: "9",
  //     price: "$1000",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  //     title: "10",
  //     price: "$1100",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  //     title: "11",
  //     price: "$1200",
  //   },
  // ];
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
        src="./seminuevos.png"
        className="w-full min-h-[400px] object-cover"
        alt="seminuevos"
      />
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
        <PromotionCarCarousel search={search} promotionData={promotionData} />
      </div>
      <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4">
        <p className="text-blue-800 font-bold text-md md:text-xl">
          AUTOS DESTACADOS
        </p>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        <FeaturedCarCarousel search={search} featuredData={featuredData} />
      </div>
      <Footer />
    </>
  );
};
export default Semi;
