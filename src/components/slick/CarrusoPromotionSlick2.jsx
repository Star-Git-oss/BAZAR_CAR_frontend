import "./styles.css";

import { SliderComp } from "./SliderComp";

const data = [
  {
    title: "Milan",
    image: "./images/adver1.png",
  },
  {
    title: "Hong Kong",
    image: "./images/adver2.png",
  },
  {
    title: "Prague",
    image: "./images/adver3.png",
  },
];
const data1 = [
  {
    title: "Milan",
    image: "./images/image1.png",
  },
  {
    title: "Hong Kong",
    image: "./images/image2.png",
  },
  {
    title: "Prague",
    image: "./images/image3.png",
  },
  {
    title: "Prague",
    image: "./images/image4.png",
  },
];

function CarrusoPromotionSlick2() {
  return (
    <div className="main-container">
      {/* <div style={{ height: 10 }} />
      <SliderComp
        autoplay={true}
        autoplaySpeed={3000}
        slideNum={4}
        data={data}
        label={"Travel"}
      /> */}
      {/* <div style={{ height: 100 }} />
      <SliderComp
        slideNum={3}
        data={data}
        label={"Japan"}
        heading={"Things to do in Kyoto"}
        subheading={"Kyoto is hip!"}
      /> */}
      {/* <div style={{ height: 10 }} />
      <SliderComp
        autoplay={true}
        autoplaySpeed={4000}
        slideNum={2}
        data={data}
        label={"Tours"}
        heading={"Lisbon Tours"}
        subheading={"Check out the fun in Lisbon!"}
      /> */}
      <div style={{ height: 10 }} />
      <SliderComp
        slideNum={1}
        data={data}
        label={"Shop"}
        // heading={"Places to shop in Barcelona"}
        // subheading={"Shop like a local"}
      />
      <div style={{ height: 15 }} />
      <SliderComp
        slideNum={1}
        data={data1}
        label={"Shop"}
        // heading={"Places to shop in Barcelona"}
        // subheading={"Shop like a local"}
      />
    </div>
  );
}

export default CarrusoPromotionSlick2;
