import React from "react";

const Footer = () => {
  return (
    <div className="w-full md:h-60 flex flex-col md:flex-row bg-blue-900 justify-between items-center py-10 md:p-10">
      <div className="w-3/4 md:w-1/3 flex flex-col items-center">
        <img
          src="./logo pie de p1.png"
          className="max-w-[300px] w-11/12 h-auto object-cover"
          alt="123"
        />
        <p className="w-3/4 max-w-72 text-center text-white text-sm md:text-md">
          Una plataforma para venta y compra de autos "Sin Tanto Rollo
        </p>
        <img
          src="./redes2.png"
          className="max-w-[350px] w-11/12 h-auto object-cover mb-10 md:mb-0"
          alt="123"
        />
      </div>
      <div className="w-3/4 md:w-1/3 flex flex-col items-center justify-center border-t-[1px] md:border-l-[1px] md:border-t-0 border-white md:h-2/3 py-10 md:p-10" style={{gap: "4px"}}>
        <a href="/#/quienes" className="text-white text-center cursor-pointer text-sm md:text-md">¿Quienes somos?</a>
        <a href="/#/terminos" className="text-white text-center cursor-pointer text-sm md:text-md">Términos y condiciones</a>
        <a href="#" className="text-white text-center cursor-pointer text-sm md:text-md">Blog</a>
        <a href="#" className="text-white text-center cursor-pointer text-sm md:text-md">Ubicacion</a>
        <a href="#" className="text-white text-center cursor-pointer text-sm md:text-md">Preguntas Frecuentes</a>
      </div>
      <div className="w-3/4 md:w-1/3 flex flex-col items-center justify-center border-t-[1px] md:border-l-[1px] md:border-t-0 border-white md:h-2/3 py-10 md:p-10 gap-4 md:gap-0">
        <p className="w-full text-white text-center md:text-center text-sm md:text-md">Contacto:</p>
        <p className="w-full text-white text-center md:text-center text-sm md:text-md">Ventas: 5516181864</p>
        <p className="w-full text-white text-center md:text-center text-sm md:text-md">Garantía: 5592198800</p>
        <p className="w-full text-white text-center md:text-center text-sm md:text-md">Direccion oficinas:</p>
        <p className="w-full text-white text-center md:text-center text-sm md:text-md">reforma 406 piso 4, Col.Juarez</p>
        <p className="w-full text-white text-center md:text-center text-sm md:text-md">Alcaldía Cuahutemoc CDMX</p>
      </div>
    </div>
  );
};
export default Footer;
