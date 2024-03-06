import { useEffect, useState } from "react";
import SignInput from "../components/SignInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoUpload } from "../action/logo";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/joy/CircularProgress";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Logo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [version, setVirsion] = useState("");
  const [mileage, setMileage] = useState("");
  const [transmission, setTransmission] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [payMethod, setPayMethod] = useState("");
  const [logoInfo, setLogoInfo] = useState("");
  const [selectedImage, setSelectedImage] = useState([]);

  const handleGuardarClick = () => {
    setLoading(true);
    if (
      // brand !== "" &&
      // year !== "" &&
      // version !== "" &&
      // mileage !== "" &&
      // transmission !== "" &&
      // whatsApp !== "" &&
      // price !== "" &&
      // payMethod !== "" &&
      // logoInfo !== "" &&
      selectedImage.length !== 0
    ) {
      const id = localStorage.getItem("id");
      const formData = new FormData();
      for (let i = 0; i < selectedImage.length; i++) {
        formData.append("files", selectedImage[i]);
      }

      formData.append("id", id);
      // formData.append("brand", brand);
      // formData.append("year", year);
      // formData.append("version", version);
      // formData.append("mileage", mileage);
      // formData.append("transmission", transmission);
      // formData.append("whatsApp", whatsApp);
      // formData.append("price", price);
      // formData.append("payMethod", payMethod);
      // formData.append("logoInfo", logoInfo);

      try {
        dispatch(logoUpload(formData))
          .then((res) => navigate("/" + "?" + "uploadsuccesslogo"))
          .catch((err) => setLoading(false));
      } catch (error) {
        console.error("Error uploading file", error);
        setLoading(false);
      }
    } else {
      toast.error("Rellene todos los datos.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        draggable: true,
      });
    }
  };
  const handleCancelarClick = () => {
    navigate("/");
  };
  useEffect(() => {
    let isLogged = localStorage.getItem("isLogged");
    let freetime = localStorage.getItem("freetime");
    let status = localStorage.getItem("membership");
    console.log("isLogged, freetime, status", isLogged, freetime, status);
    if (isLogged !== "true") navigate("/signin");
    else if (freetime !== "true" && status !== "active") navigate("/system");
    else {
      toast.success("Se ha conectado con éxito.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
        draggable: true,
      });
    }
  }, []);
  // const handleMethodChange = (event) => {
  //   setPayMethod(event.target.value);
  // };
  const handleDragImageChange = (event) => {
    setSelectedImage((prev) => [...prev, ...event.target.files]);
  };
  const handleDeleteClick = (index) => {
    setSelectedImage([
      ...selectedImage.slice(0, index),
      ...selectedImage.slice(index + 1, selectedImage.length),
    ]);
  };

  return (
    <div className="bg-[url('./wallpaper.png')] w-full min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center">
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
      <div className="bg-white/[0.6] w-5/6 max-w-[1400px] gap-12 flex flex-col justify-around rounded-lg my-20">
        <p className="w-full text-center md:text-left lg:text-2xl text-xl text-blue-900 font-bold md:ml-14 mt-12">
          Presentación del logotipo
        </p>
        <div className="md:ml-14 -mt-4">
          <p className="w-full text-center md:text-left xl:text-2xl lg:text-xl text-blue-900 font-bold">
            Su logotipo favorito
          </p>
          <p className="w-full text-center md:text-left text-md text-blue-800">
            Cargue su logotipo.
          </p>
        </div>
        <div className="flex justify-evenly mb-8">
          {/* <img
            src="avatar.png"
            alt="avatar"
            className="w-[50px] h-[50px] ml-8 lg:ml-0 hidden lg:block"
          /> */}
          <div className="gap-4 w-10/12 lg:mr-14">
            <div className="col-span-3 border-gray-600 border-[1px] p-4 lg:ml-4 md:mr-0 mb-4">
              <div className="ml-4 col-span-4">
                <p className="w-full text-left xl:text-2xl lg:text-xl text-blue-900 font-bold">
                  Imágenes
                </p>
                <p className="w-full text-left text-sm text-blue-900">
                  {/* Tus fotos son muy importantes para aumnetar la posibilidad de
                  venderlo */}
                </p>
              </div>
              <div className="w-full h-96 overflow-auto bg-gray-300 border-gray-600 border-[1px] border-dotted mt-4 relative z-0">
                <input
                  className="hidden w-2 h-2 left-0 top-0 cursor-pointer bg-transparent z-20"
                  type="file"
                  multiple
                  id="upload"
                  name="upload"
                  onChange={handleDragImageChange}
                />
                <label
                  htmlFor="upload"
                  className="w-full h-full flex items-center justify-center z-10"
                >
                  {selectedImage.length === 0 ? "Selecciona una foto." : ""}
                </label>
                <div className="absolute w-0 flex flex-col top-0 left-0 z-0">
                  {selectedImage.map((item, index) => {
                    console.log(index);
                    return (
                      <p
                        className="z-20 cursor-pointer w-max"
                        onClick={(e) => handleDeleteClick(index)}
                      >
                        <span className="w-10 h-10 text-red-500">X </span>
                        {item.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <div className="border-gray-600 border-[1px] lg:-mr-4 flex flex-col items-center lg:mt-0 lg:ml-0 mb-4">
              <p className="w-full text-left xl:text-2xl lg:text-xl text-blue-900 font-bold ml-2">
                Recomendaciones:
              </p>
              <img
                className="w-[200px] h-[140px]"
                src="tomas1.png"
                alt="tomas1"
              />
              <p className="text-center text-sm text-blue-900">
                Tomas las fotos Horizontales 4:3 de preferencia y menos de 3mb
              </p>
              <div className="flex justify-evenly w-full">
                <img
                  className="w-[80px] h-[80px]"
                  src="tomas2.png"
                  alt="tomas2"
                />
                <img
                  className="w-[80px] h-[80px]"
                  src="tomas3.png"
                  alt="tomas3"
                />
              </div>
              <p className="text-center text-sm text-blue-900">
                Toma las mejores fotos a tu auto frente, laterales, parte
                tarsera
              </p>
              <div className="flex justify-evenly w-full">
                <img
                  className="w-[80px] h-[80px]"
                  src="tomas4.png"
                  alt="tomas4"
                />
                <img
                  className="w-[80px] h-[80px]"
                  src="tomas5.png"
                  alt="tomas5"
                />
              </div>
              <p className="text-center text-sm text-blue-900">
                Te recomendamos fotos del interior asientos Kilometraje, llantas
              </p>
            </div> */}
            <div className="w-full col-span-4 flex justify-center pt-4 md:pt-0 md:justify-end mb-12 lg:ml-4 gap-8">
              <button
                className="w-[250px] h-[40px] bg-red-800 hover:bg-red-600 transition-colors duration-300 ease-in-out click:animate-ping rounded-md text-white"
                onClick={handleCancelarClick}
              >
                Cancelar
              </button>
              <button
                className="pushbutton w-[250px] h-[40px] bg-blue-700 hover:bg-blue-500 transition-colors duration-300 ease-in-out click:animate-ping rounded-md text-white"
                onClick={handleGuardarClick}
              >
                <div className="w-full h-full flex justify-center items-center">
                  Ahorra
                  <CircularProgress
                    size="sm"
                    style={{
                      visibility: loading ? "visible" : "hidden",
                      position: "absolute",
                      right: "50px",
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Logo;
