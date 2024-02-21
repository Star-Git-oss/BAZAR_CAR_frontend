import Carousel from "react-multi-carousel";
import SellCard from "./SellCard";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { vehicleOpen } from "../action/vehicle";

const FeaturedCarCarousel = () => {
  const dispatch = useDispatch();
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
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(vehicleOpen({num:12}))
      .then((res) => setData([...res]))
      .catch((err) => console.log(err));
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
          {data.map((item) => {
            console.log(item);
            return (
              <SellCard
                src={"https://jolly-curious-baboon.ngrok-free.app/uploads/" + item.uploads}
                key={item.uploads + item.title + item.price}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
export default FeaturedCarCarousel;
