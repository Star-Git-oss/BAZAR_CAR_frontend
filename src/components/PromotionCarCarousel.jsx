import SignInput from "./SignInput";
import Navbar from "./Navbar";
import MasonrySection from "./Masonry";
import PreownedCarousel from "./PreownedCarousel";
import Carousel from "react-multi-carousel";
import SellCard from "./SellCard";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import Footer from "./Footer";
import NavSmall from "./NavSmall";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { vehicleOpen } from "../action/vehicle";

const PromotionCarCarousel = () => {
  const src = ["./inicio1.png", "./inicio2.png", "./inicio3.png"];
  const dispatch = useDispatch();
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
      breakpoint: { max: 1024, min: 664 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  useEffect(() => {
    dispatch(vehicleOpen());
  }, []);
  return (
    <>
      <div className="w-full px-6 mb-8 rounded-lg border-gray-400 border-[1px]">
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
    </>
  );
};
export default PromotionCarCarousel;
