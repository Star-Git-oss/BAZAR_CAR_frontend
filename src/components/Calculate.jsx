import SignInput from "../components/SignInput";
import Navbar from "../components/Navbar";
import MasonrySection from "../components/Masonry";
import PreownedCarousel from "../components/PreownedCarousel";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import Footer from "../components/Footer";
import PromotionCarCarousel from "../components/PromotionCarCarousel";
import FeaturedCarCarousel from "../components/FeaturedCarCarousel";
import { useEffect, useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
// import "./Calculate.scss";

const Calculate = () => {
  const [monto, setMonto] = useState(0);
  // const animateText = (element) => {
  //   element.classList.add("animated");
  //   setTimeout(() => {
  //     element.classList.remove("animated");
  //   }, 1000);
  // };

  const calcularPrestamo = () => {
    let monto = parseFloat(document.getElementById("monto").value);
    let plazo = parseInt(document.getElementById("plazo").value);
    let tasaInteresAnual = 0.19;
    let enganchePorcentaje = parseFloat(
      document.getElementById("enganche").value
    );

    if (
      isNaN(monto) ||
      isNaN(plazo) ||
      isNaN(tasaInteresAnual) ||
      isNaN(enganchePorcentaje) ||
      monto <= 0 ||
      plazo <= 0 ||
      tasaInteresAnual <= 0 ||
      enganchePorcentaje < 0 ||
      enganchePorcentaje > 100
    ) {
      document.getElementById("result").innerHTML =
        "<p>Por favor, ingresa valores válidos.</p>";
      return;
    }

    let tasaInteresMensual = tasaInteresAnual / 12 / 100;
    let apertura = monto * 0.03;
    let mensualidad =
      (monto * tasaInteresMensual) /
      (1 - Math.pow(1 + tasaInteresMensual, -plazo));
    let enganche = apertura + monto * (enganchePorcentaje / 100);

    document.getElementById("result").innerHTML = `
        <div class="lol">
            <p>Mensualidad: $<span class="animated">${mensualidad.toFixed(
              2
            )}</span></p>
            <p>Enganche: $<span class="animated">${enganche.toFixed(
              2
            )}</span></p>
        <div>
    `;

    // Llamar a la función para animar los montos
    // animateText(
    //   document.getElementById("result").querySelectorAll(".animated")
    // );
  };
  return (
    <>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 shadow-lg left-1/2 md:left-[80%] md:-right-[10%] mt-[2px] md:mt-4 flex flex-col w-[400px] h-fit rounded-lg bg-white/[0.6] z-50 alert alert-light p-8 gap-2">
        <h2 className="text-lg w-full text-center mb-2">
          Cotización Plan Seminuevos
        </h2>
        <label htmlFor="monto">* Monto Total del Automóvil (MXN)</label>
        <input
          className="outline-none border-[1px] border-gray-500 rounded-lg pl-2"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          type="number"
          id="monto"
          min="0"
          step="1000"
        />
        <label htmlFor="plazo">
          * Plazo del Crédito (meses){" "}
          <select id="plazo">
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
            <option value="36">36 meses</option>
            <option value="48">48 meses</option>
          </select>
        </label>
        <h6>* Tasa Anual 19%</h6>
        <h6>* Costo por apertura 3%</h6>
        <div className="w-full flex gap-2">
          <label htmlFor="enganche">* Porcentaje de Enganche (%)</label>
          <input className="outline-none border-[1px] border-gray-500 rounded-lg pl-2" type="number" id="enganche" min="10" max="80" step="1" />
        </div>
        <button
          className="bg-blue-700 p-2 hover:bg-blue-500 transition-colors duration-300 ease-in-out rounded-md text-white my-2"
          // onclick="calcularPrestamo()"
          onClick={calcularPrestamo}
        >
          Calcular
        </button>
        <div
          className="w-full h-fit animate-pulse animate-number animation duration-1000 ease-in-out infinite"
          id="result"
          style={{ animation: "expand" }}
        ></div>
      </div>
    </>
  );
};
export default Calculate;
