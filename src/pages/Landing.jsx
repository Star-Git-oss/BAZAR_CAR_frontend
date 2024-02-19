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

const Landing = () => {
  const src = ["./inicio1.png", "./inicio2.png", "./inicio3.png"];
  const selldata = [
    {
      src: "ejemplo de banner1.png",
      title: "1",
      price: "$200",
    },
    {
      src: "ejemplo de banner1.png",
      title: "2",
      price: "$300",
    },
    {
      src: "ejemplo de banner1.png",
      title: "3",
      price: "$400",
    },
    {
      src: "ejemplo de banner1.png",
      title: "4",
      price: "$500",
    },
    {
      src: "ejemplo de banner1.png",
      title: "5",
      price: "$600",
    },
    {
      src: "ejemplo de banner1.png",
      title: "6",
      price: "$700",
    },
    {
      src: "ejemplo de banner1.png",
      title: "7",
      price: "$800",
    },
    {
      src: "ejemplo de banner1.png",
      title: "8",
      price: "$900",
    },
    {
      src: "ejemplo de banner1.png",
      title: "9",
      price: "$1000",
    },
    {
      src: "ejemplo de banner1.png",
      title: "10",
      price: "$1100",
    },
    {
      src: "ejemplo de banner1.png",
      title: "11",
      price: "$1200",
    },
  ];
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
  return (
    <>
      <Navbar />
      <div className="bg-white w-5/6 h-24"></div>
      {/* <img src="./inicio 1.png" className="w-full" alt="inicio 1"></img> */}
      <PreownedCarousel src={src} />
      <MasonrySection />
      {/* <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4 shadow-xl shadow-slate-200"> */}
      <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4">
        <p className="text-blue-800 font-bold">AUTOS EN PROMOCION</p>
        <div className="flex items-center relative w-fit -z-10">
          <SignInput
            style={"mb-0"}
            placeholder={"BUSCA TU AUTO..."}
            width={"w-[250px]"}
          />
          <img
            src="./buscar-lupa.png"
            className="absolute right-2 w-6 h-6 lg:mr-4"
            alt="buscar-lupa"
          />
        </div>
      </div>
      <div className="w-full px-6">
        <Carousel
          className="pb-6 h-96"
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          dotListClass="custom-dot-list-style"
          slidesToSlide={1}
        >
          {selldata.map((item) => (
            <SellCard
              src={item.src}
              key={item.src + item.title + item.price}
              title={item.title}
              price={item.price}
            />
          ))}
        </Carousel>
      </div>
      <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4">
        <p className="text-blue-800 font-bold">AUTOS DESTACADOS</p>
      </div>
      <div className="w-full px-6 mb-8">
        <Carousel
          className="pb-6 h-96"
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          dotListClass="custom-dot-list-style"
          slidesToSlide={1}
        >
          {selldata.map((item) => (
            <SellCard
              src={item.src}
              key={item.src + item.title + item.price}
              title={item.title}
              price={item.price}
            />
          ))}
        </Carousel>
      </div>
      <Footer />
    </>
  );
};
export default Landing;
