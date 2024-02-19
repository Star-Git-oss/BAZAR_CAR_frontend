const Footer = () => {
  return (
    <div className="w-full md:h-60 flex flex-col md:flex-row bg-blue-900 justify-between items-center">
      <div className="w-3/4 md:w-1/3 pl-2 flex flex-col md:items-start items-center p-10">
        <img
          src="./logo pie de p1.png"
          className="w-[300px] h-[75px]"
          alt="123"
        />
        <p className="w-72 text-center text-white mx-2">
          Una plataforma para venta y compra de autos "Sin Tanto Rollo
        </p>
        <img
          src="./redes2.png"
          className="w-[350px] h-[75px] -ml-5"
          alt="123"
        />
      </div>
      <div className="w-3/4 md:w-1/3 flex flex-col items-center justify-center border-t-[1px] md:border-l-[1px] md:border-t-0 border-white md:h-2/3 p-10 gap-4 md:gap-0">
        <p className="text-white text-center">¿Quienes somos?</p>
        <p className="text-white text-center">Términos y condiciones</p>
        <p className="text-white text-center">Blog</p>
        <p className="text-white text-center">Ubicacion</p>
        <p className="text-white text-center">Preguntas Frecuentes</p>
      </div>
      <div className="w-3/4 md:w-1/3 flex flex-col items-center justify-center border-t-[1px] md:border-l-[1px] md:border-t-0 border-white md:h-2/3 p-10 gap-4 md:gap-0">
        <p className="w-full text-white text-center md:text-left">Contacto:</p>
        <p className="w-full text-white text-center md:text-left">Ventas: 5516181864</p>
        <p className="w-full text-white text-center md:text-left">Garantía: 5592198800</p>
        <p className="w-full text-white text-center md:text-left">Direccion oficinas:</p>
        <p className="w-full text-white text-center md:text-left">reforma 406 piso 4, Col.Juarez</p>
        <p className="w-full text-white text-center md:text-left">Alcaldía Cuahutemoc CDMX</p>
      </div>
    </div>
  );
};
export default Footer;
