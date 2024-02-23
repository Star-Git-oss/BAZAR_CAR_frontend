import Carousel from "react-multi-carousel";
import SellCard from "./SellCard";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { vehicleOpen } from "../action/vehicle";
import { UPLOAD_URI } from "../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeaturedCarCarousel = ({ search }) => {
  console.log(search);
  const dispatch = useDispatch();
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
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(
      vehicleOpen({ search: search !== undefined ? search : "", num: 12 })
    )
      .then((res) => {
        setData([...res.data]);
        if (search.length > 0)
          toast.info("AUTOS DESTACADOS: Totales: 100, Resultado: 23", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "colored",
            draggable: true,
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          "No se puede comunicar con el servidor. Por favor, compruebe su conexión.",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "colored",
            draggable: true,
          }
        );
      });
  }, [search]);
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
export default FeaturedCarCarousel;
