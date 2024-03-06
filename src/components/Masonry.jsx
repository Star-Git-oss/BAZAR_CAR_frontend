import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import SellCard from "../components/SellCard";
import { useDispatch } from "react-redux";
import { vehicleOpen } from "../action/vehicle";
import { UPLOAD_URI } from "../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import { logoOpen } from "../action/logo";

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
  ];
  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1368 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    itablet: {
      breakpoint: { max: 1368, min: 1060 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1060, min: 864 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 864, min: 664 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    imobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 1384 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet1: {
      breakpoint: { max: 1384, min: 1060 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet2: {
      breakpoint: { max: 1060, min: 768 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet3: {
      breakpoint: { max: 768, min: 620 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 620, min: 480 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile2: {
      breakpoint: { max: 480, min: 0 },
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
  const [logoList, setLogoList] = useState([]);
  useEffect(() => {
    dispatch(vehicleOpen({ search: "", num: 12 }))
      .then((res) => {
        console.log(res.data);
        setData([...res.data]);
      })
      .catch((err) => console.log(err));
    dispatch(logoOpen())
      .then((res) => {
        setLogoList(res.imageNames);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="w-full px-2">
        <div className="w-full h-auto md:h-[800px] md:flex gap-4 pr-4">
          <div className="w-full md:w-2/3 border bg-gray-300 border-blue-500 rounded-lg mt-1">
            <div className="w-full h-full p-4 flex flex-col justify-around">
              <div className="w-full h-fit p-4 rounded-lg border-gray-400 border-[1px] mb-4 md:mb-0" style={{zIndex:"2147483647"}}>
                <Carousel
                  className="mb-6 pb-4 lg:h-96 md:h-88 sm:h-80 xs:h-72 xs2:h-64 h-56"
                  responsive={responsive1}
                  showDots={true}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2500}
                  dotListClass="custom-dot-list-style"
                  slidesToSlide={1}
                  style={{zIndex:"2147483647"}}
                >
                  {data.map((item) => (
                    <SellCard
                      src={UPLOAD_URI + item.uploads}
                      key={item.src + item.title + item.price}
                      title={item.brand}
                      price={"$" + item.price}
                    />
                    // <div className="h-full py-48 bg-red-300">fehgsrgsdfg</div>
                  ))}
                </Carousel>
              </div>
              <div className="h-1/2 flex flex-col justify-around ">
                <div className="rounded-lg border-gray-400 border-[1px] md:mb-0 mb-4 py-4">
                  <Carousel
                    // className="pb-6"
                    responsive={responsive2}
                    showDots={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    dotListClass="custom-dot-list-style"
                    slidesToSlide={1}
                  >
                    {logoList.map((item, index) => {
                      return (
                        <img
                          src={UPLOAD_URI + "logos/" + item}
                          key={item.src + item._id}
                          draggable={false}
                          className="w-20 h-20 sm:w-24 sm:h-24"
                        />
                      );
                    })}
                  </Carousel>
                </div>
                <div className="rounded-lg border-gray-400 border-[1px] py-4">
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
                    {logoList.map((item, index) => {
                      return (
                        <img
                          src={UPLOAD_URI + "logos/" + item}
                          key={item.src + item._id}
                          draggable={false}
                          className="w-20 h-20 sm:w-24 sm:h-24"
                        />
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-fit md:w-1/3 bg-gray-100 border border-blue-500 rounded-lg mt-1 lg:ml-1">
            <div className="w-full mb-2">
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
