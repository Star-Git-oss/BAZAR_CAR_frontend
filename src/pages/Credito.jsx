import SignInput from "../components/SignInput";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import NavSmall from "../components/NavSmall";
import { useState } from "react";

const Credito = () => {
  const src = ["./inicio1.png", "./inicio2.png", "./inicio3.png"];
  const [price, setPrice] = useState("");
  const [mensualidad, setMensualidad] = useState("");
  const [plazo, setPlazo] = useState("");
  const [enganche, setEnganche] = useState("");
  const selldata = [
    "ejemplo de banner1.png",
    "ejemplo de banner1.png",
    "ejemplo de banner1.png",
    "ejemplo de banner1.png",
    "ejemplo de banner1.png",
  ];
  const handleSolcitudClick = () => {
    console.log("handleSolcitudClick");
  };
  return (
    <>
      <NavSmall />
      <div className="bg-white w-5/6 h-32"></div>
      <div className="flex flex-col md:flex-row h-fit md:h-[600px] justify-between gap-12 md:gap-0 m-12">
        <div className="w-full md:w-1/3 flex flex-col gap-4 justify-evenly items-center">
          <SignInput type={"outlined"} value={price} onChange={setPrice} />
          {/* <select className="outline-[1px] outline-black outline-offset-8 border-[1px] border-gray-300">
            <option value={0}>ENGANCHE (Resultado del 10% Minimo)0</option>
            <option value={1}>ENGANCHE (Resultado del 10% Minimo)1</option>
            <option value={2}>ENGANCHE (Resultado del 10% Minimo)2</option>
          </select> */}
          <SignInput type={"outlined"} value={plazo} onChange={setPlazo} />
          <SignInput
            type={"outlined"}
            value={enganche}
            onChange={setEnganche}
          />
          <SignInput
            type={"outlined"}
            value={mensualidad}
            onChange={setMensualidad}
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-end justify-center gap-10">
          <img
            className="w-5/6 h-auto"
            src="financiamiento.png"
            alt="tomas1"
          />
          <button
            className="w-1/3 h-[50px] bg-green-700 rounded-md text-white mr-0 md:mr-[200px]"
            onClick={handleSolcitudClick}
          >
            Solcitud en linea
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start border-[1px] p-4 border-gray-300 rounded-xl mx-12 mb-10">
        <p className="text-xl md:text-2xl">Requisitos:</p>
        <p className="text-lg md:text-xl">Si tu solcitud es autorizada por la finaiera te solcitareme los sigureisn requreij</p>
        <p className="text-md md:text-lg">-INE ETJ KAKG</p>
        <p className="text-md md:text-lg">-Firjtl kslg lskmwie</p>
        <p className="text-md md:text-lg">-Comprwoi sgiuoqosj qwjpo afap ajfaksjl</p>
        <p className="text-md md:text-lg">-3 sdowg oshfp ahfnanh qowr o </p>
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
export default Credito;
