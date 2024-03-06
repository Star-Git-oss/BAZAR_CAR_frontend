import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Quienes = () => {
  return (
    <>
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
      <div className="bg-[url('./wallpaper.png')] w-full h-screen py-4 bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
        <div className="bg-white/[0.9] w-11/12 h-5/6 p-8 flex flex-col justify-start items-center overflow-auto rounded-lg gap-4">
          <p className="text-xl md:text-2xl lg:text-3xl text-red-600 text-center font-bold mt-12">
            ¿Quienes somos?
          </p>
          <p className="text-sm md:text-md lg:text-lg h-fit text-center max-w-[800px]">
            Somos una empresa de venta, arrendamiento y compra de vehículos
            seminuevos. Proponemos un mercado con mayor apertura para
            vendedores, con uso de herramientas digitales.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-red-600 text-center font-bold mt-12">
            Misión:
          </p>
          <p className="text-sm md:text-md lg:text-lg h-fit text-center max-w-[800px]">
            Ofrecer venta, compra y arrendamiento de automóviles seminuevos con
            una gran disponibilidad de modelos en el mercado mediante
            financiamientos, haciendo uso de medios digitales, promovidos a un
            público joven y adulto a nivel nacional.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-red-600 text-center font-bold mt-12">
            Visión:
          </p>
          <p className="text-sm md:text-md lg:text-lg h-fit text-center max-w-[800px]">
            Lograr un mercado abierto para vendedores directos con uso de
            herramientas digitales para la venta de autos seminuevos.
          </p>
        </div>
      </div>
    </>
  );
};
export default Quienes;
