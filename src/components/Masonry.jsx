import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import SellCard from "../components/SellCard";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import { useDispatch } from "react-redux";
import { vehicleOpen } from "../action/vehicle";

function MasonrySection() {
  const dispatch = useDispatch();
  const selldata = [
    {
      src: "./ejemplo de banner1.png",
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
  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive2 = {
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
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive3 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
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
      <div className="w-full px-2">
        <div className="w-full h-auto md:h-[800px] md:flex gap-4 pr-4">
          <div className="w-full md:w-2/3 border bg-gray-300 border-blue-500 rounded-lg mt-1">
            <div className="w-full h-full p-4">
              <div className="w-full h-1/2 p-4 rounded-lg border-gray-400 border-[1px]">
                <Carousel
                  className="mb-6 pb-4 h-full"
                  responsive={responsive1}
                  showDots={true}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  dotListClass="custom-dot-list-style"
                  slidesToSlide={1}
                >
                  {data.map((item) => (
                    <SellCard
                      src={"https://jolly-curious-baboon.ngrok-free.app/uploads/" + item.uploads}
                      key={item.src + item.title + item.price}
                      title={item.title}
                      price={item.price}
                    />
                    // <div className="h-full py-48 bg-red-300">fehgsrgsdfg</div>
                  ))}
                </Carousel>
              </div>
              <div className="h-1/2 flex flex-col justify-evenly ">
                <div className="rounded-lg border-gray-400 border-[1px]">
                  <Carousel
                    // className="pb-6"
                    responsive={responsive2}
                    showDots={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={200000}
                    dotListClass="custom-dot-list-style"
                    slidesToSlide={1}
                  >
                    {selldata.map((item) => (
                      <img src={"./tomas1.png"} key={item.src} />
                    ))}
                  </Carousel>
                </div>
                <div className="rounded-lg border-gray-400 border-[1px]">
                  <Carousel
                    className=""
                    responsive={responsive2}
                    showDots={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    dotListClass="custom-dot-list-style"
                    slidesToSlide={1}
                  >
                    {selldata.map((item) => (
                      <img src={"./tomas2.png"} key={item.src} />
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full md:w-1/3 bg-gray-100 border border-blue-500 rounded-lg mt-1 lg:ml-1">
            <div className="w-full mb-10">
              <Carousel
                className="pb-6 h-full"
                responsive={responsive3}
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                dotListClass="custom-dot-list-style"
                slidesToSlide={1}
              >
                {selldata.map((item) => (
                  <img
                    className="w-full md:h-[750px] rounded-lg"
                    src={item.src}
                    key={item.src}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        {/* <div className="w-full h-auto border border-blue-500 rounded-lg mt-1 px-2">
          <PromotionSlick2 />
        </div> */}
      </div>
    </>
  );
}

export default MasonrySection;
