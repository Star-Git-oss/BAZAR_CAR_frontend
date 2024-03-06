import SignInput from "../components/SignInput";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import NavSmall from "../components/NavSmall";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Renta = () => {
  const src = ["./inicio1.png", "./inicio2.png", "./inicio3.png"];
  const [price, setPrice] = useState("");
  const [renta, setRenta] = useState("");
  const handleSolcitudClick = () => {
    console.log("handleSolcitudClick");
  };
  const navigate = useNavigate();
  // useEffect(() => {
  //   let isLogged = localStorage.getItem("isLogged");
  //   let freetime = localStorage.getItem("freetime");
  //   let status = localStorage.getItem("membership");
  //   if(isLogged !== "true") navigate("/signin");
  //   else if(freetime !== "true" || status !== "active") navigate("/system");
  // }, []);
  return (
    <>
      <NavSmall />
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
      <div className="bg-white w-5/6 h-32"></div>
      <div className="flex flex-col md:flex-row h-fit md:h-[600px] justify-between gap-12 md:gap-0 m-12">
        <div className="w-full md:w-1/3 flex flex-col gap-4 justify-evenly items-center">
          <SignInput type={"outlined"} value={price} onChange={setPrice} />
          <SignInput type={"outlined"} value={renta} onChange={setRenta} />
          <button
            className="w-1/3 h-[50px] bg-green-700 rounded-md text-white"
            onClick={handleSolcitudClick}
          >
            Solcitud en linea
          </button>
        </div>
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-end justify-center gap-10">
          <img className="w-5/6 h-auto" src="financiamiento.png" alt="tomas1" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start border-[1px] p-4 border-gray-300 rounded-xl mx-12 mb-10">
        <p className="text-xl md:text-2xl">Requisitos:</p>
        <p className="text-lg md:text-xl">
          Al tu solcitud es autorizada por la finaiera te solcitareme los
          sigureisn requreij
        </p>
        <p className="text-md md:text-lg">-INE ETJ KAKG</p>
        <p className="text-md md:text-lg">-Firjtl kslg lskmwie</p>
        <p className="text-md md:text-lg">
          -Comprwoi sgiuoqosj qwjpo afap ajfaksjl
        </p>
      </div>
      <div className="w-full h-60 bg-blue-900 flex justify-between items-center">
        <img
          src="./logo pie de p1.png"
          className="w-[600px] h-[150px]"
          alt="123"
        />
      </div>
    </>
  );
};
export default Renta;
