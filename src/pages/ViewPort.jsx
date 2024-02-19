import SignInput from "../components/SignInput";
import Navbar from "../components/Navbar";
import MasonrySection from "../components/Masonry";
import PreownedCarousel from "../components/PreownedCarousel";
import Carousel from "react-multi-carousel";
import SellCard from "../components/SellCard";
import "react-multi-carousel/lib/styles.css";
import FeaturePromotionSlick from "../components/FeaturePromotionSlick";
import "../components/slick/styles.css";
import Footer from "../components/Footer";
import NavSmall from "../components/NavSmall";

const ViewPort = () => {
  const src = ["./inicio1.png", "./inicio2.png", "./inicio3.png"];
  const selldata = [
    "ejemplo de banner1.png",
    "ejemplo de banner1.png",
    "ejemplo de banner1.png",
    "ejemplo de banner1.png",
    "ejemplo de banner1.png",
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <NavSmall />
      <div className="bg-white w-5/6 h-32"></div>
      <div className="flex md:flex-row flex-col justify-between w-full gap-8 p-8">
        <div className="w-1/2">
          <p>Inicio/Autos de Renta/ Marca /Version</p>
          <div className="flex flex-col md:flex-row p-10">
            <p className="font-bold text-lg md:text-xl">Kia Sporte 2020</p>
            &nbsp;
            <p className="text-md md:text-lg">Se plus Sedan Estandar</p>
          </div>
          <img
            src="./arrendamiento3.png"
            className="right-2 w-full h-80 lg:mr-4"
            alt="arrendamiento3"
          />
          <div className="w-full mt-10">
            <Carousel
              className="pb-6 h-40"
              responsive={responsive}
              showDots={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={200000}
              dotListClass="custom-dot-list-style"
              slidesToSlide={1}
            >
              {selldata.map((item) => (
                <img src={item} key={item.src} />
              ))}
            </Carousel>
          </div>
        </div>
        <div className="w-1/2 border-[1px] border-black">
          <div>
            <div>
              <div>123</div>
              <div>456</div>
              <div>789</div>
            </div>
            <div>
              <button
                className="w-[200px] h-[50px] ml-[6px] bg-blue-900 rounded-md text-white"
                onClick={handleSolictaClick}
              >
                SOLICTA TU CRÉDITO
              </button>
            </div>
          </div>
          <textarea />
        </div>
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
export default ViewPort;
