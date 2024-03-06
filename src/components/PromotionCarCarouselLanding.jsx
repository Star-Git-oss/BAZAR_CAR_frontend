import Carousel from "react-multi-carousel";
import SellCard from "./SellCard";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { vehicleOpen, vehicleOpenLanding } from "../action/vehicle";
import { UPLOAD_URI } from "../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PromotionCarCarouselLanding = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1580 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    ipad: {
      breakpoint: { max: 1580, min: 1324 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 1164 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    semitablet: {
      breakpoint: { max: 1164, min: 964 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 964, min: 768 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    imobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <div className="w-full px-6 mb-8 rounded-lg border-gray-400 border-[1px]">
        <Carousel
          className="pb-6 lg:h-96 md:h-88 sm:h-80 xs:h-72 xs2:h-64 h-56"
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          dotListClass="custom-dot-list-style"
          slidesToSlide={1}
        >
          {data.map((item) => {
            return (
              <SellCard
                src={UPLOAD_URI + item.uploads}
                key={item.uploads + item.title + item.price}
                title={item.brand}
                price={"$" + item.price}
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
export default PromotionCarCarouselLanding;
