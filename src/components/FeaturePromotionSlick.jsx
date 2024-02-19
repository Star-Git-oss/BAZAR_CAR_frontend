import "./slick/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { SliderComp } from "./slick/SliderComp";
import SellCard from "./SellCard";

const selldata = [
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
    title: "1",
    price: "$200",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
    title: "2",
    price: "$300",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
    title: "3",
    price: "$400",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
    title: "4",
    price: "$500",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
    title: "5",
    price: "$600",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
    title: "6",
    price: "$700",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
    title: "7",
    price: "$800",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
    title: "8",
    price: "$900",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
    title: "9",
    price: "$1000",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
    title: "10",
    price: "$1100",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
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

export default function FeaturePromotionSlick() {
  return (
    <div className="w-full">
      {/* <div className="flex justify-between items-center mx-8">
        <SliderComp
          autoplay={true}
          autoplaySpeed={3000}
          slideNum={6}
          data={selldata}
          label={"Travel"}
        />
      </div>
      <div className="h-16 flex justify-between items-center mx-8 mt-2 px-4">
        <p className="text-blue-800 font-bold">AUTOS DESTACADOS</p>
      </div>
      <div className="flex justify-between items-center mx-8 mb-4">
        <SliderComp
          autoplay={true}
          autoplaySpeed={4000}
          slideNum={6}
          data={selldata}
          label={"Tours"}
          // heading={"Lisbon Tours"}
          // subheading={"Check out the fun in Lisbon!"}
        />
      </div> */}
      <Carousel
        className="pb-6"
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
  );
}
